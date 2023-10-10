
export function getConfig() {
    if (process.env.NEXT_PUBLIC_GAME === 'aoe2') {
        return {
            host: 'aoe2companion.com',
            game: 'aoe2',
            ms: {
                name: 'Age of Empires II: Definitive Edition',
                url: 'https://www.ageofempires.com/games/aoeiide/',
            },
            app: {
                slug: 'aoe2companion',
                name: 'AoE II Companion',
                android: {
                    bundleId: 'com.aoe2companion',
                },
                ios: {
                    bundleId: '1518463195',
                },
            }
        }
    }
    if (process.env.NEXT_PUBLIC_GAME === 'aoe4') {
        return {
            host: 'aoe4companion.com',
            game: 'aoe4',
            ms: {
                name: 'Age of Empires IV',
                url: 'https://www.ageofempires.com/games/age-of-empires-iv/',
            },
            app: {
                slug: 'aoe4companion',
                name: 'AoE IV Companion',
                android: {
                    bundleId: 'com.aoe4companion',
                },
                ios: {
                    bundleId: '1601333682',
                },
            }
        };
    }
    throw new Error('Unknown game');
}
