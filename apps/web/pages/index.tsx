import styles from './index.module.scss';

export function Index() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.scss file.
     */
    return (
        <div className="flex flex-row">



            <div className="flex-1 p-8 pt-32">
                {/*<h1><span className="main-title">{appName}</span></h1>*/}
                <h3 style={{ fontFamily: 'Merriweather,sans-serif' }}>
                    Track your games now.
                </h3>

                {/*<div className="phone-container phone-container-mobile">*/}
                {/*    <AspectRatio ratio="360/718" style={{maxWidth: '80vw', margin: '20px auto'}}>*/}
                {/*        <div className="frame"/>*/}
                {/*    </AspectRatio>*/}
                {/*</div>*/}

                <br/>
                <div className="flex flex-row space-x-4">
                    <a href={`https://play.google.com/store/apps/details?id=com.aoe2companion`}>
                        <img src="/app-button-play-store.png" className="max-h-[50px]" />
                    </a>
                    <div className="app-button-spacer"/>
                    <a href={`https://apps.apple.com/app/id1518463195`}>
                        <img src="/app-button-app-store.png" className="max-h-[50px]" />
                    </a>
                </div>

                <br/>
                <br/>
                <p className="text-sm py-3">Also available:</p>
                <a href={`https://app.aoe2companion.com`} target="_blank">
                    <img src="https://img.shields.io/static/v1?label=Web&logo=google-chrome&message=Open&logoColor=FFFFFF&color=brightgreen"/>
                </a>
                {/*<div style={{height: '10px'}}/>*/}
                {/*<a onClick={downloadWindowsApp} href="#">*/}
                {/*    <img src="https://img.shields.io/static/v1?label=Windows&logo=windows&message=Download&logoColor=FFFFFF&color=brightgreen"/>*/}
                {/*</a>*/}

                <br/>
                <br/>
                <br/>
                <p className="text-sm py-3">Community:</p>
                <a href={`https://github.com/denniske/aoe2companion`} target="_blank">
                    <img src={`https://img.shields.io/badge/github-aoe2companion-brightgreen?label=Github&logo=github`}/>
                </a>
                &nbsp;&nbsp;
                <a href="https://discord.gg/gCunWKx" target="_blank">
                    <img src="https://img.shields.io/discord/727175083977736262.svg?label=Discord&logo=discord&logoColor=ffffff&labelColor=7289DA&color=2c2f33"/>
                </a>
                <div style={{height: '10px'}}/>
                <a href="https://www.buymeacoffee.com/denniskeil" target="_blank">
                    <img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshields-io-buymeacoffee.vercel.app%2Fapi%3Fusername%3Ddenniskeil"/>
                </a>
            </div>

            {/*<div className="spacer"/>*/}

            <div className="p-8">
                <img src="ios-shot-aoe2companion.png" style={{maxWidth: '400px'}}/>
            </div>






        </div>
    );
}

export default Index;
