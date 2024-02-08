import {_Object, S3} from "@aws-sdk/client-s3";
import * as fs from "fs/promises";
import * as path from "path";
import {config} from "dotenv";
import { lookup } from "mime-types";
import * as crypto from "crypto";
import {from, mergeMap, toArray} from "rxjs";

config();

export const AWS_BUCKET = 'aoe2companion-frontend';
console.log('AWS_BUCKET', AWS_BUCKET);

export function generateFileClient() {
    return new S3([{}]);
}

function getMimeTypeFromExtension(ext: string) {
    const mimeType = lookup(ext);
    if (mimeType === false) {
        return 'application/octet-stream';
    }
    return mimeType;
}

async function walkSync(dir: string): Promise<string[]> {
    const list = [];
    const files = await fs.readdir(dir, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            list.push(...await walkSync(path.join(dir, file.name)));
        } else {
            list.push(path.join(dir, file.name));
        }
    }
    return list;
}


async function getAllFiles(client: S3) {
    let continuationToken = undefined;

    const files: _Object[] = [];
    let size = 0;

    while(true) {
        const result = await client.listObjectsV2({
            Bucket: AWS_BUCKET,
            // MaxKeys: 100,
            ContinuationToken: continuationToken,
        });
        files.push(...(result.Contents || []));
        size += result.Contents?.reduce((acc, f) => acc + (f.Size || 0), 0) || 0;
        continuationToken = result.NextContinuationToken as string;
        if (!result.IsTruncated) break;
    }

    console.log(`${files.length} files using ${(size / 1024 / 1024).toFixed(1)} MB`);

    return files;
}

function md5(contents: any): string {
    return crypto.createHash('md5').update(contents).digest('hex');
}


async function main() {
    const client = generateFileClient();

    const files = await getAllFiles(client);

    const filesDict = new Map(files.map(f => [f.Key, f] as [string, _Object]));

    // if (files.length > 0) {
    //     await client.deleteObjects({
    //         Bucket: AWS_BUCKET,
    //         Delete: {
    //             Objects: files.map(f => ({Key: f.Key})),
    //         }
    //     })
    // }

    // const filePathsInPublic = await walkSync('apps/web/public');
    // const filesInPublic = filePathsInPublic.map(filePath => ({
    //     path: filePath,
    //     hash: md5(await fs.readFile(filePath)),
    // }));
    //
    // console.log(files[0]);
    // console.log(filePathsInPublic[0]);

    const filesToUpload = await walkSync('apps/web/public');

    console.log('Files to upload:', filesToUpload.length);

    let skippedFiles = 0;

    console.log('');

    await from(filesToUpload).pipe(
        mergeMap((file: string) => from(uploadFile(client, file, filesDict)), 5),
        toArray(),
    ).toPromise();

    console.log('');
    console.log('Done.');
}

async function uploadFile(client: S3, filePath: string, filesDict: Map<string, _Object>) {
    const key = filePath.replace('apps/web/', '');
    const contentType = getMimeTypeFromExtension(path.extname(filePath));

    const hash = md5(await fs.readFile(filePath));

    // console.log('Checking', key, hash, filesDict.get(key)?.ETag?.replaceAll('"', ''));

    if (hash === filesDict.get(key)?.ETag?.replaceAll('"', '')) return;

    console.log('Uploading', key, contentType, hash);

    // const existing = filesDict.get(filePath);
    // console.log('existing', existing);

    await client.putObject({
        Bucket: AWS_BUCKET,
        Key: key,
        ContentType: contentType,
        Body: await fs.readFile(filePath),
    });
}

main();
