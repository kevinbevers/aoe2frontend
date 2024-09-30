export interface ICivMatchup {
    civName: string
    civ?: number
    civImageUrl?: string
    strongUnits?: number[]
    deathBall?: number[]
    UnitsAvailable?: number[]
    weakAgainstUnints?: number[]
    strengthsText?: string
}


export const civList: ICivMatchup[] = [
{
    civName: "Armenians",
    strongUnits: [1795, 1802, 567, 359],
    weakAgainstUnints: [1753],
    strengthsText: "Infantry, archers, monks, ships"
},
{
    civName: "Aztecs",
},
{
    civName: "Bengalis",
},
{
    civName: "Berber",
},
{
    civName: "Bohemians",
},
{
    civName: "Britons",
},
{
    civName: "Bulgarians",
},
{
    civName: "Burgundians",
},
{
    civName: "Burmese",
},
{
    civName: "Byzantines",
},
];