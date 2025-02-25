export const regions = [
    "us",
    "eu",
    // TODO - support more regions / retrieve from bnet API
];

// I manually called the bnet API to get the below realm data.
// Obviously could do that dynamically if this was to be a real thing.
export const usRealms = [
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1?namespace=dynamic-us",
        },
        name: "Lightbringer",
        id: 1,
        slug: "lightbringer",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/2?namespace=dynamic-us",
        },
        name: "Cenarius",
        id: 2,
        slug: "cenarius",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3?namespace=dynamic-us",
        },
        name: "Uther",
        id: 3,
        slug: "uther",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/4?namespace=dynamic-us",
        },
        name: "Kilrogg",
        id: 4,
        slug: "kilrogg",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/5?namespace=dynamic-us",
        },
        name: "Proudmoore",
        id: 5,
        slug: "proudmoore",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/6?namespace=dynamic-us",
        },
        name: "Hyjal",
        id: 6,
        slug: "hyjal",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/7?namespace=dynamic-us",
        },
        name: "Frostwolf",
        id: 7,
        slug: "frostwolf",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/8?namespace=dynamic-us",
        },
        name: "Ner'zhul",
        id: 8,
        slug: "nerzhul",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/9?namespace=dynamic-us",
        },
        name: "Kil'jaeden",
        id: 9,
        slug: "kiljaeden",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/10?namespace=dynamic-us",
        },
        name: "Blackrock",
        id: 10,
        slug: "blackrock",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/11?namespace=dynamic-us",
        },
        name: "Tichondrius",
        id: 11,
        slug: "tichondrius",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/12?namespace=dynamic-us",
        },
        name: "Silver Hand",
        id: 12,
        slug: "silver-hand",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/13?namespace=dynamic-us",
        },
        name: "Doomhammer",
        id: 13,
        slug: "doomhammer",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/14?namespace=dynamic-us",
        },
        name: "Icecrown",
        id: 14,
        slug: "icecrown",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/15?namespace=dynamic-us",
        },
        name: "Deathwing",
        id: 15,
        slug: "deathwing",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/16?namespace=dynamic-us",
        },
        name: "Kel'Thuzad",
        id: 16,
        slug: "kelthuzad",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/47?namespace=dynamic-us",
        },
        name: "Eitrigg",
        id: 47,
        slug: "eitrigg",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/51?namespace=dynamic-us",
        },
        name: "Garona",
        id: 51,
        slug: "garona",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/52?namespace=dynamic-us",
        },
        name: "Alleria",
        id: 52,
        slug: "alleria",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/53?namespace=dynamic-us",
        },
        name: "Hellscream",
        id: 53,
        slug: "hellscream",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/54?namespace=dynamic-us",
        },
        name: "Blackhand",
        id: 54,
        slug: "blackhand",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/55?namespace=dynamic-us",
        },
        name: "Whisperwind",
        id: 55,
        slug: "whisperwind",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/56?namespace=dynamic-us",
        },
        name: "Archimonde",
        id: 56,
        slug: "archimonde",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/57?namespace=dynamic-us",
        },
        name: "Illidan",
        id: 57,
        slug: "illidan",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/58?namespace=dynamic-us",
        },
        name: "Stormreaver",
        id: 58,
        slug: "stormreaver",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/59?namespace=dynamic-us",
        },
        name: "Mal'Ganis",
        id: 59,
        slug: "malganis",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/60?namespace=dynamic-us",
        },
        name: "Stormrage",
        id: 60,
        slug: "stormrage",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/61?namespace=dynamic-us",
        },
        name: "Zul'jin",
        id: 61,
        slug: "zuljin",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/62?namespace=dynamic-us",
        },
        name: "Medivh",
        id: 62,
        slug: "medivh",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/63?namespace=dynamic-us",
        },
        name: "Durotan",
        id: 63,
        slug: "durotan",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/64?namespace=dynamic-us",
        },
        name: "Bloodhoof",
        id: 64,
        slug: "bloodhoof",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/65?namespace=dynamic-us",
        },
        name: "Khadgar",
        id: 65,
        slug: "khadgar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/66?namespace=dynamic-us",
        },
        name: "Dalaran",
        id: 66,
        slug: "dalaran",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/67?namespace=dynamic-us",
        },
        name: "Elune",
        id: 67,
        slug: "elune",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/68?namespace=dynamic-us",
        },
        name: "Lothar",
        id: 68,
        slug: "lothar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/69?namespace=dynamic-us",
        },
        name: "Arthas",
        id: 69,
        slug: "arthas",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/70?namespace=dynamic-us",
        },
        name: "Mannoroth",
        id: 70,
        slug: "mannoroth",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/71?namespace=dynamic-us",
        },
        name: "Warsong",
        id: 71,
        slug: "warsong",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/72?namespace=dynamic-us",
        },
        name: "Shattered Hand",
        id: 72,
        slug: "shattered-hand",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/73?namespace=dynamic-us",
        },
        name: "Bleeding Hollow",
        id: 73,
        slug: "bleeding-hollow",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/74?namespace=dynamic-us",
        },
        name: "Skullcrusher",
        id: 74,
        slug: "skullcrusher",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/75?namespace=dynamic-us",
        },
        name: "Argent Dawn",
        id: 75,
        slug: "argent-dawn",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/76?namespace=dynamic-us",
        },
        name: "Sargeras",
        id: 76,
        slug: "sargeras",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/77?namespace=dynamic-us",
        },
        name: "Azgalor",
        id: 77,
        slug: "azgalor",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/78?namespace=dynamic-us",
        },
        name: "Magtheridon",
        id: 78,
        slug: "magtheridon",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/79?namespace=dynamic-us",
        },
        name: "Destromath",
        id: 79,
        slug: "destromath",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/80?namespace=dynamic-us",
        },
        name: "Gorgonnash",
        id: 80,
        slug: "gorgonnash",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/81?namespace=dynamic-us",
        },
        name: "Dethecus",
        id: 81,
        slug: "dethecus",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/82?namespace=dynamic-us",
        },
        name: "Spinebreaker",
        id: 82,
        slug: "spinebreaker",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/83?namespace=dynamic-us",
        },
        name: "Bonechewer",
        id: 83,
        slug: "bonechewer",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/84?namespace=dynamic-us",
        },
        name: "Dragonmaw",
        id: 84,
        slug: "dragonmaw",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/85?namespace=dynamic-us",
        },
        name: "Shadowsong",
        id: 85,
        slug: "shadowsong",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/86?namespace=dynamic-us",
        },
        name: "Silvermoon",
        id: 86,
        slug: "silvermoon",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/87?namespace=dynamic-us",
        },
        name: "Windrunner",
        id: 87,
        slug: "windrunner",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/88?namespace=dynamic-us",
        },
        name: "Cenarion Circle",
        id: 88,
        slug: "cenarion-circle",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/89?namespace=dynamic-us",
        },
        name: "Nathrezim",
        id: 89,
        slug: "nathrezim",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/90?namespace=dynamic-us",
        },
        name: "Terenas",
        id: 90,
        slug: "terenas",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/91?namespace=dynamic-us",
        },
        name: "Burning Blade",
        id: 91,
        slug: "burning-blade",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/92?namespace=dynamic-us",
        },
        name: "Gorefiend",
        id: 92,
        slug: "gorefiend",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/93?namespace=dynamic-us",
        },
        name: "Eredar",
        id: 93,
        slug: "eredar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/94?namespace=dynamic-us",
        },
        name: "Shadowmoon",
        id: 94,
        slug: "shadowmoon",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/95?namespace=dynamic-us",
        },
        name: "Lightning's Blade",
        id: 95,
        slug: "lightnings-blade",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/96?namespace=dynamic-us",
        },
        name: "Eonar",
        id: 96,
        slug: "eonar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/97?namespace=dynamic-us",
        },
        name: "Gilneas",
        id: 97,
        slug: "gilneas",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/98?namespace=dynamic-us",
        },
        name: "Kargath",
        id: 98,
        slug: "kargath",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/99?namespace=dynamic-us",
        },
        name: "Llane",
        id: 99,
        slug: "llane",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/100?namespace=dynamic-us",
        },
        name: "Earthen Ring",
        id: 100,
        slug: "earthen-ring",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/101?namespace=dynamic-us",
        },
        name: "Laughing Skull",
        id: 101,
        slug: "laughing-skull",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/102?namespace=dynamic-us",
        },
        name: "Burning Legion",
        id: 102,
        slug: "burning-legion",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/103?namespace=dynamic-us",
        },
        name: "Thunderlord",
        id: 103,
        slug: "thunderlord",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/104?namespace=dynamic-us",
        },
        name: "Malygos",
        id: 104,
        slug: "malygos",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/105?namespace=dynamic-us",
        },
        name: "Thunderhorn",
        id: 105,
        slug: "thunderhorn",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/106?namespace=dynamic-us",
        },
        name: "Aggramar",
        id: 106,
        slug: "aggramar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/107?namespace=dynamic-us",
        },
        name: "Crushridge",
        id: 107,
        slug: "crushridge",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/108?namespace=dynamic-us",
        },
        name: "Stonemaul",
        id: 108,
        slug: "stonemaul",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/109?namespace=dynamic-us",
        },
        name: "Daggerspine",
        id: 109,
        slug: "daggerspine",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/110?namespace=dynamic-us",
        },
        name: "Stormscale",
        id: 110,
        slug: "stormscale",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/111?namespace=dynamic-us",
        },
        name: "Dunemaul",
        id: 111,
        slug: "dunemaul",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/112?namespace=dynamic-us",
        },
        name: "Boulderfist",
        id: 112,
        slug: "boulderfist",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/113?namespace=dynamic-us",
        },
        name: "Suramar",
        id: 113,
        slug: "suramar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/114?namespace=dynamic-us",
        },
        name: "Dragonblight",
        id: 114,
        slug: "dragonblight",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/115?namespace=dynamic-us",
        },
        name: "Draenor",
        id: 115,
        slug: "draenor",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/116?namespace=dynamic-us",
        },
        name: "Uldum",
        id: 116,
        slug: "uldum",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/117?namespace=dynamic-us",
        },
        name: "Bronzebeard",
        id: 117,
        slug: "bronzebeard",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/118?namespace=dynamic-us",
        },
        name: "Feathermoon",
        id: 118,
        slug: "feathermoon",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/119?namespace=dynamic-us",
        },
        name: "Bloodscalp",
        id: 119,
        slug: "bloodscalp",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/120?namespace=dynamic-us",
        },
        name: "Darkspear",
        id: 120,
        slug: "darkspear",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/121?namespace=dynamic-us",
        },
        name: "Azjol-Nerub",
        id: 121,
        slug: "azjolnerub",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/122?namespace=dynamic-us",
        },
        name: "Perenolde",
        id: 122,
        slug: "perenolde",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/123?namespace=dynamic-us",
        },
        name: "Eldre'Thalas",
        id: 123,
        slug: "eldrethalas",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/124?namespace=dynamic-us",
        },
        name: "Spirestone",
        id: 124,
        slug: "spirestone",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/125?namespace=dynamic-us",
        },
        name: "Shadow Council",
        id: 125,
        slug: "shadow-council",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/126?namespace=dynamic-us",
        },
        name: "Scarlet Crusade",
        id: 126,
        slug: "scarlet-crusade",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/127?namespace=dynamic-us",
        },
        name: "Firetree",
        id: 127,
        slug: "firetree",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/128?namespace=dynamic-us",
        },
        name: "Frostmane",
        id: 128,
        slug: "frostmane",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/129?namespace=dynamic-us",
        },
        name: "Gurubashi",
        id: 129,
        slug: "gurubashi",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/130?namespace=dynamic-us",
        },
        name: "Smolderthorn",
        id: 130,
        slug: "smolderthorn",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/131?namespace=dynamic-us",
        },
        name: "Skywall",
        id: 131,
        slug: "skywall",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/151?namespace=dynamic-us",
        },
        name: "Runetotem",
        id: 151,
        slug: "runetotem",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/153?namespace=dynamic-us",
        },
        name: "Moonrunner",
        id: 153,
        slug: "moonrunner",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/154?namespace=dynamic-us",
        },
        name: "Detheroc",
        id: 154,
        slug: "detheroc",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/155?namespace=dynamic-us",
        },
        name: "Kalecgos",
        id: 155,
        slug: "kalecgos",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/156?namespace=dynamic-us",
        },
        name: "Ursin",
        id: 156,
        slug: "ursin",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/157?namespace=dynamic-us",
        },
        name: "Dark Iron",
        id: 157,
        slug: "dark-iron",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/158?namespace=dynamic-us",
        },
        name: "Greymane",
        id: 158,
        slug: "greymane",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/159?namespace=dynamic-us",
        },
        name: "Wildhammer",
        id: 159,
        slug: "wildhammer",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/160?namespace=dynamic-us",
        },
        name: "Staghelm",
        id: 160,
        slug: "staghelm",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/162?namespace=dynamic-us",
        },
        name: "Emerald Dream",
        id: 162,
        slug: "emerald-dream",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/163?namespace=dynamic-us",
        },
        name: "Maelstrom",
        id: 163,
        slug: "maelstrom",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/164?namespace=dynamic-us",
        },
        name: "Twisting Nether",
        id: 164,
        slug: "twisting-nether",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1067?namespace=dynamic-us",
        },
        name: "Cho'gall",
        id: 1067,
        slug: "chogall",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1068?namespace=dynamic-us",
        },
        name: "Gul'dan",
        id: 1068,
        slug: "guldan",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1069?namespace=dynamic-us",
        },
        name: "Kael'thas",
        id: 1069,
        slug: "kaelthas",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1070?namespace=dynamic-us",
        },
        name: "Alexstrasza",
        id: 1070,
        slug: "alexstrasza",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1071?namespace=dynamic-us",
        },
        name: "Kirin Tor",
        id: 1071,
        slug: "kirin-tor",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1072?namespace=dynamic-us",
        },
        name: "Ravencrest",
        id: 1072,
        slug: "ravencrest",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1075?namespace=dynamic-us",
        },
        name: "Balnazzar",
        id: 1075,
        slug: "balnazzar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1128?namespace=dynamic-us",
        },
        name: "Azshara",
        id: 1128,
        slug: "azshara",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1129?namespace=dynamic-us",
        },
        name: "Agamaggan",
        id: 1129,
        slug: "agamaggan",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1130?namespace=dynamic-us",
        },
        name: "Lightninghoof",
        id: 1130,
        slug: "lightninghoof",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1131?namespace=dynamic-us",
        },
        name: "Nazjatar",
        id: 1131,
        slug: "nazjatar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1132?namespace=dynamic-us",
        },
        name: "Malfurion",
        id: 1132,
        slug: "malfurion",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1136?namespace=dynamic-us",
        },
        name: "Aegwynn",
        id: 1136,
        slug: "aegwynn",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1137?namespace=dynamic-us",
        },
        name: "Akama",
        id: 1137,
        slug: "akama",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1138?namespace=dynamic-us",
        },
        name: "Chromaggus",
        id: 1138,
        slug: "chromaggus",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1139?namespace=dynamic-us",
        },
        name: "Draka",
        id: 1139,
        slug: "draka",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1140?namespace=dynamic-us",
        },
        name: "Drak'thul",
        id: 1140,
        slug: "drakthul",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1141?namespace=dynamic-us",
        },
        name: "Garithos",
        id: 1141,
        slug: "garithos",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1142?namespace=dynamic-us",
        },
        name: "Hakkar",
        id: 1142,
        slug: "hakkar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1143?namespace=dynamic-us",
        },
        name: "Khaz Modan",
        id: 1143,
        slug: "khaz-modan",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1145?namespace=dynamic-us",
        },
        name: "Mug'thol",
        id: 1145,
        slug: "mugthol",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1146?namespace=dynamic-us",
        },
        name: "Korgath",
        id: 1146,
        slug: "korgath",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1147?namespace=dynamic-us",
        },
        name: "Kul Tiras",
        id: 1147,
        slug: "kul-tiras",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1148?namespace=dynamic-us",
        },
        name: "Malorne",
        id: 1148,
        slug: "malorne",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1151?namespace=dynamic-us",
        },
        name: "Rexxar",
        id: 1151,
        slug: "rexxar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1154?namespace=dynamic-us",
        },
        name: "Thorium Brotherhood",
        id: 1154,
        slug: "thorium-brotherhood",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1165?namespace=dynamic-us",
        },
        name: "Arathor",
        id: 1165,
        slug: "arathor",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1173?namespace=dynamic-us",
        },
        name: "Madoran",
        id: 1173,
        slug: "madoran",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1175?namespace=dynamic-us",
        },
        name: "Trollbane",
        id: 1175,
        slug: "trollbane",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1182?namespace=dynamic-us",
        },
        name: "Muradin",
        id: 1182,
        slug: "muradin",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1184?namespace=dynamic-us",
        },
        name: "Vek'nilash",
        id: 1184,
        slug: "veknilash",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1185?namespace=dynamic-us",
        },
        name: "Sen'jin",
        id: 1185,
        slug: "senjin",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1190?namespace=dynamic-us",
        },
        name: "Baelgun",
        id: 1190,
        slug: "baelgun",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1258?namespace=dynamic-us",
        },
        name: "Duskwood",
        id: 1258,
        slug: "duskwood",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1259?namespace=dynamic-us",
        },
        name: "Zuluhed",
        id: 1259,
        slug: "zuluhed",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1260?namespace=dynamic-us",
        },
        name: "Steamwheedle Cartel",
        id: 1260,
        slug: "steamwheedle-cartel",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1262?namespace=dynamic-us",
        },
        name: "Norgannon",
        id: 1262,
        slug: "norgannon",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1263?namespace=dynamic-us",
        },
        name: "Thrall",
        id: 1263,
        slug: "thrall",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1264?namespace=dynamic-us",
        },
        name: "Anetheron",
        id: 1264,
        slug: "anetheron",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1265?namespace=dynamic-us",
        },
        name: "Turalyon",
        id: 1265,
        slug: "turalyon",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1266?namespace=dynamic-us",
        },
        name: "Haomarush",
        id: 1266,
        slug: "haomarush",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1267?namespace=dynamic-us",
        },
        name: "Scilla",
        id: 1267,
        slug: "scilla",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1268?namespace=dynamic-us",
        },
        name: "Ysondre",
        id: 1268,
        slug: "ysondre",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1270?namespace=dynamic-us",
        },
        name: "Ysera",
        id: 1270,
        slug: "ysera",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1271?namespace=dynamic-us",
        },
        name: "Dentarg",
        id: 1271,
        slug: "dentarg",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1276?namespace=dynamic-us",
        },
        name: "Andorhal",
        id: 1276,
        slug: "andorhal",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1277?namespace=dynamic-us",
        },
        name: "Executus",
        id: 1277,
        slug: "executus",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1278?namespace=dynamic-us",
        },
        name: "Dalvengyr",
        id: 1278,
        slug: "dalvengyr",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1280?namespace=dynamic-us",
        },
        name: "Black Dragonflight",
        id: 1280,
        slug: "black-dragonflight",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1282?namespace=dynamic-us",
        },
        name: "Altar of Storms",
        id: 1282,
        slug: "altar-of-storms",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1283?namespace=dynamic-us",
        },
        name: "Uldaman",
        id: 1283,
        slug: "uldaman",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1284?namespace=dynamic-us",
        },
        name: "Aerie Peak",
        id: 1284,
        slug: "aerie-peak",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1285?namespace=dynamic-us",
        },
        name: "Onyxia",
        id: 1285,
        slug: "onyxia",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1286?namespace=dynamic-us",
        },
        name: "Demon Soul",
        id: 1286,
        slug: "demon-soul",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1287?namespace=dynamic-us",
        },
        name: "Gnomeregan",
        id: 1287,
        slug: "gnomeregan",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1288?namespace=dynamic-us",
        },
        name: "Anvilmar",
        id: 1288,
        slug: "anvilmar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1289?namespace=dynamic-us",
        },
        name: "The Venture Co",
        id: 1289,
        slug: "the-venture-co",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1290?namespace=dynamic-us",
        },
        name: "Sentinels",
        id: 1290,
        slug: "sentinels",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1291?namespace=dynamic-us",
        },
        name: "Jaedenar",
        id: 1291,
        slug: "jaedenar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1292?namespace=dynamic-us",
        },
        name: "Tanaris",
        id: 1292,
        slug: "tanaris",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1293?namespace=dynamic-us",
        },
        name: "Alterac Mountains",
        id: 1293,
        slug: "alterac-mountains",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1294?namespace=dynamic-us",
        },
        name: "Undermine",
        id: 1294,
        slug: "undermine",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1295?namespace=dynamic-us",
        },
        name: "Lethon",
        id: 1295,
        slug: "lethon",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1296?namespace=dynamic-us",
        },
        name: "Blackwing Lair",
        id: 1296,
        slug: "blackwing-lair",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1297?namespace=dynamic-us",
        },
        name: "Arygos",
        id: 1297,
        slug: "arygos",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1342?namespace=dynamic-us",
        },
        name: "Echo Isles",
        id: 1342,
        slug: "echo-isles",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1344?namespace=dynamic-us",
        },
        name: "The Forgotten Coast",
        id: 1344,
        slug: "the-forgotten-coast",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1345?namespace=dynamic-us",
        },
        name: "Fenris",
        id: 1345,
        slug: "fenris",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1346?namespace=dynamic-us",
        },
        name: "Anub'arak",
        id: 1346,
        slug: "anubarak",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1347?namespace=dynamic-us",
        },
        name: "Blackwater Raiders",
        id: 1347,
        slug: "blackwater-raiders",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1348?namespace=dynamic-us",
        },
        name: "Vashj",
        id: 1348,
        slug: "vashj",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1349?namespace=dynamic-us",
        },
        name: "Korialstrasz",
        id: 1349,
        slug: "korialstrasz",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1350?namespace=dynamic-us",
        },
        name: "Misha",
        id: 1350,
        slug: "misha",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1351?namespace=dynamic-us",
        },
        name: "Darrowmere",
        id: 1351,
        slug: "darrowmere",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1352?namespace=dynamic-us",
        },
        name: "Ravenholdt",
        id: 1352,
        slug: "ravenholdt",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1353?namespace=dynamic-us",
        },
        name: "Bladefist",
        id: 1353,
        slug: "bladefist",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1354?namespace=dynamic-us",
        },
        name: "Shu'halo",
        id: 1354,
        slug: "shuhalo",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1355?namespace=dynamic-us",
        },
        name: "Winterhoof",
        id: 1355,
        slug: "winterhoof",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1356?namespace=dynamic-us",
        },
        name: "Sisters of Elune",
        id: 1356,
        slug: "sisters-of-elune",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1357?namespace=dynamic-us",
        },
        name: "Maiev",
        id: 1357,
        slug: "maiev",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1358?namespace=dynamic-us",
        },
        name: "Rivendare",
        id: 1358,
        slug: "rivendare",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1359?namespace=dynamic-us",
        },
        name: "Nordrassil",
        id: 1359,
        slug: "nordrassil",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1360?namespace=dynamic-us",
        },
        name: "Tortheldrin",
        id: 1360,
        slug: "tortheldrin",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1361?namespace=dynamic-us",
        },
        name: "Cairne",
        id: 1361,
        slug: "cairne",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1362?namespace=dynamic-us",
        },
        name: "Drak'Tharon",
        id: 1362,
        slug: "draktharon",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1363?namespace=dynamic-us",
        },
        name: "Antonidas",
        id: 1363,
        slug: "antonidas",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1364?namespace=dynamic-us",
        },
        name: "Shandris",
        id: 1364,
        slug: "shandris",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1365?namespace=dynamic-us",
        },
        name: "Moon Guard",
        id: 1365,
        slug: "moon-guard",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1367?namespace=dynamic-us",
        },
        name: "Nazgrel",
        id: 1367,
        slug: "nazgrel",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1368?namespace=dynamic-us",
        },
        name: "Hydraxis",
        id: 1368,
        slug: "hydraxis",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1369?namespace=dynamic-us",
        },
        name: "Wyrmrest Accord",
        id: 1369,
        slug: "wyrmrest-accord",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1370?namespace=dynamic-us",
        },
        name: "Farstriders",
        id: 1370,
        slug: "farstriders",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1371?namespace=dynamic-us",
        },
        name: "Borean Tundra",
        id: 1371,
        slug: "borean-tundra",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1372?namespace=dynamic-us",
        },
        name: "Quel'dorei",
        id: 1372,
        slug: "queldorei",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1373?namespace=dynamic-us",
        },
        name: "Garrosh",
        id: 1373,
        slug: "garrosh",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1374?namespace=dynamic-us",
        },
        name: "Mok'Nathal",
        id: 1374,
        slug: "moknathal",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1375?namespace=dynamic-us",
        },
        name: "Nesingwary",
        id: 1375,
        slug: "nesingwary",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1377?namespace=dynamic-us",
        },
        name: "Drenden",
        id: 1377,
        slug: "drenden",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1425?namespace=dynamic-us",
        },
        name: "Drakkari",
        id: 1425,
        slug: "drakkari",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1427?namespace=dynamic-us",
        },
        name: "Ragnaros",
        id: 1427,
        slug: "ragnaros",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1428?namespace=dynamic-us",
        },
        name: "Quel'Thalas",
        id: 1428,
        slug: "quelthalas",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1549?namespace=dynamic-us",
        },
        name: "Azuremyst",
        id: 1549,
        slug: "azuremyst",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1555?namespace=dynamic-us",
        },
        name: "Auchindoun",
        id: 1555,
        slug: "auchindoun",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1556?namespace=dynamic-us",
        },
        name: "Coilfang",
        id: 1556,
        slug: "coilfang",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1557?namespace=dynamic-us",
        },
        name: "Shattered Halls",
        id: 1557,
        slug: "shattered-halls",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1558?namespace=dynamic-us",
        },
        name: "Blood Furnace",
        id: 1558,
        slug: "blood-furnace",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1559?namespace=dynamic-us",
        },
        name: "The Underbog",
        id: 1559,
        slug: "the-underbog",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1563?namespace=dynamic-us",
        },
        name: "Terokkar",
        id: 1563,
        slug: "terokkar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1564?namespace=dynamic-us",
        },
        name: "Blade's Edge",
        id: 1564,
        slug: "blades-edge",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1565?namespace=dynamic-us",
        },
        name: "Exodar",
        id: 1565,
        slug: "exodar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1566?namespace=dynamic-us",
        },
        name: "Area 52",
        id: 1566,
        slug: "area-52",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1567?namespace=dynamic-us",
        },
        name: "Velen",
        id: 1567,
        slug: "velen",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1570?namespace=dynamic-us",
        },
        name: "The Scryers",
        id: 1570,
        slug: "the-scryers",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1572?namespace=dynamic-us",
        },
        name: "Zangarmarsh",
        id: 1572,
        slug: "zangarmarsh",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1576?namespace=dynamic-us",
        },
        name: "Fizzcrank",
        id: 1576,
        slug: "fizzcrank",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1578?namespace=dynamic-us",
        },
        name: "Ghostlands",
        id: 1578,
        slug: "ghostlands",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1579?namespace=dynamic-us",
        },
        name: "Grizzly Hills",
        id: 1579,
        slug: "grizzly-hills",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1581?namespace=dynamic-us",
        },
        name: "Galakrond",
        id: 1581,
        slug: "galakrond",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/1582?namespace=dynamic-us",
        },
        name: "Dawnbringer",
        id: 1582,
        slug: "dawnbringer",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3207?namespace=dynamic-us",
        },
        name: "Goldrinn",
        id: 3207,
        slug: "goldrinn",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3208?namespace=dynamic-us",
        },
        name: "Nemesis",
        id: 3208,
        slug: "nemesis",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3209?namespace=dynamic-us",
        },
        name: "Azralon",
        id: 3209,
        slug: "azralon",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3210?namespace=dynamic-us",
        },
        name: "Tol Barad",
        id: 3210,
        slug: "tol-barad",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3234?namespace=dynamic-us",
        },
        name: "Gallywix",
        id: 3234,
        slug: "gallywix",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3721?namespace=dynamic-us",
        },
        name: "Caelestrasz",
        id: 3721,
        slug: "caelestrasz",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3722?namespace=dynamic-us",
        },
        name: "Aman'Thul",
        id: 3722,
        slug: "amanthul",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3723?namespace=dynamic-us",
        },
        name: "Barthilas",
        id: 3723,
        slug: "barthilas",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3724?namespace=dynamic-us",
        },
        name: "Thaurissan",
        id: 3724,
        slug: "thaurissan",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3725?namespace=dynamic-us",
        },
        name: "Frostmourne",
        id: 3725,
        slug: "frostmourne",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3726?namespace=dynamic-us",
        },
        name: "Khaz'goroth",
        id: 3726,
        slug: "khazgoroth",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3733?namespace=dynamic-us",
        },
        name: "Dreadmaul",
        id: 3733,
        slug: "dreadmaul",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3734?namespace=dynamic-us",
        },
        name: "Nagrand",
        id: 3734,
        slug: "nagrand",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3735?namespace=dynamic-us",
        },
        name: "Dath'Remar",
        id: 3735,
        slug: "dathremar",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3736?namespace=dynamic-us",
        },
        name: "Jubei'Thos",
        id: 3736,
        slug: "jubeithos",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3737?namespace=dynamic-us",
        },
        name: "Gundrak",
        id: 3737,
        slug: "gundrak",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/3738?namespace=dynamic-us",
        },
        name: "Saurfang",
        id: 3738,
        slug: "saurfang",
    },
    {
        key: {
            href: "https://us.api.blizzard.com/data/wow/realm/5909?namespace=dynamic-us",
        },
        name: "US PS Realm 222",
        id: 5909,
        slug: "us-ps-realm-222",
    },
];

export const euRealms = [
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/500?namespace=dynamic-eu",
        },
        name: "Aggramar",
        id: 500,
        slug: "aggramar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/501?namespace=dynamic-eu",
        },
        name: "Arathor",
        id: 501,
        slug: "arathor",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/502?namespace=dynamic-eu",
        },
        name: "Aszune",
        id: 502,
        slug: "aszune",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/503?namespace=dynamic-eu",
        },
        name: "Azjol-Nerub",
        id: 503,
        slug: "azjolnerub",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/504?namespace=dynamic-eu",
        },
        name: "Bloodhoof",
        id: 504,
        slug: "bloodhoof",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/505?namespace=dynamic-eu",
        },
        name: "Doomhammer",
        id: 505,
        slug: "doomhammer",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/506?namespace=dynamic-eu",
        },
        name: "Draenor",
        id: 506,
        slug: "draenor",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/507?namespace=dynamic-eu",
        },
        name: "Dragonblight",
        id: 507,
        slug: "dragonblight",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/508?namespace=dynamic-eu",
        },
        name: "Emerald Dream",
        id: 508,
        slug: "emerald-dream",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/509?namespace=dynamic-eu",
        },
        name: "Garona",
        id: 509,
        slug: "garona",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/510?namespace=dynamic-eu",
        },
        name: "Vol'jin",
        id: 510,
        slug: "voljin",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/511?namespace=dynamic-eu",
        },
        name: "Sunstrider",
        id: 511,
        slug: "sunstrider",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/512?namespace=dynamic-eu",
        },
        name: "Arak-arahm",
        id: 512,
        slug: "arakarahm",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/513?namespace=dynamic-eu",
        },
        name: "Twilight's Hammer",
        id: 513,
        slug: "twilights-hammer",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/515?namespace=dynamic-eu",
        },
        name: "Zenedar",
        id: 515,
        slug: "zenedar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/516?namespace=dynamic-eu",
        },
        name: "Forscherliga",
        id: 516,
        slug: "forscherliga",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/517?namespace=dynamic-eu",
        },
        name: "Medivh",
        id: 517,
        slug: "medivh",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/518?namespace=dynamic-eu",
        },
        name: "Agamaggan",
        id: 518,
        slug: "agamaggan",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/519?namespace=dynamic-eu",
        },
        name: "Al'Akir",
        id: 519,
        slug: "alakir",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/521?namespace=dynamic-eu",
        },
        name: "Bladefist",
        id: 521,
        slug: "bladefist",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/522?namespace=dynamic-eu",
        },
        name: "Bloodscalp",
        id: 522,
        slug: "bloodscalp",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/523?namespace=dynamic-eu",
        },
        name: "Burning Blade",
        id: 523,
        slug: "burning-blade",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/524?namespace=dynamic-eu",
        },
        name: "Burning Legion",
        id: 524,
        slug: "burning-legion",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/525?namespace=dynamic-eu",
        },
        name: "Crushridge",
        id: 525,
        slug: "crushridge",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/526?namespace=dynamic-eu",
        },
        name: "Daggerspine",
        id: 526,
        slug: "daggerspine",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/527?namespace=dynamic-eu",
        },
        name: "Deathwing",
        id: 527,
        slug: "deathwing",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/528?namespace=dynamic-eu",
        },
        name: "Dragonmaw",
        id: 528,
        slug: "dragonmaw",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/529?namespace=dynamic-eu",
        },
        name: "Dunemaul",
        id: 529,
        slug: "dunemaul",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/531?namespace=dynamic-eu",
        },
        name: "Dethecus",
        id: 531,
        slug: "dethecus",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/533?namespace=dynamic-eu",
        },
        name: "Sinstralis",
        id: 533,
        slug: "sinstralis",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/535?namespace=dynamic-eu",
        },
        name: "Durotan",
        id: 535,
        slug: "durotan",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/536?namespace=dynamic-eu",
        },
        name: "Argent Dawn",
        id: 536,
        slug: "argent-dawn",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/537?namespace=dynamic-eu",
        },
        name: "Kirin Tor",
        id: 537,
        slug: "kirin-tor",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/538?namespace=dynamic-eu",
        },
        name: "Dalaran",
        id: 538,
        slug: "dalaran",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/539?namespace=dynamic-eu",
        },
        name: "Archimonde",
        id: 539,
        slug: "archimonde",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/540?namespace=dynamic-eu",
        },
        name: "Elune",
        id: 540,
        slug: "elune",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/541?namespace=dynamic-eu",
        },
        name: "Illidan",
        id: 541,
        slug: "illidan",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/542?namespace=dynamic-eu",
        },
        name: "Hyjal",
        id: 542,
        slug: "hyjal",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/543?namespace=dynamic-eu",
        },
        name: "Kael'thas",
        id: 543,
        slug: "kaelthas",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/544?namespace=dynamic-eu",
        },
        name: "Ner'zhul",
        id: 544,
        slug: "nerzhul",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/545?namespace=dynamic-eu",
        },
        name: "Cho'gall",
        id: 545,
        slug: "chogall",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/546?namespace=dynamic-eu",
        },
        name: "Sargeras",
        id: 546,
        slug: "sargeras",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/547?namespace=dynamic-eu",
        },
        name: "Runetotem",
        id: 547,
        slug: "runetotem",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/548?namespace=dynamic-eu",
        },
        name: "Shadowsong",
        id: 548,
        slug: "shadowsong",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/549?namespace=dynamic-eu",
        },
        name: "Silvermoon",
        id: 549,
        slug: "silvermoon",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/550?namespace=dynamic-eu",
        },
        name: "Stormrage",
        id: 550,
        slug: "stormrage",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/551?namespace=dynamic-eu",
        },
        name: "Terenas",
        id: 551,
        slug: "terenas",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/552?namespace=dynamic-eu",
        },
        name: "Thunderhorn",
        id: 552,
        slug: "thunderhorn",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/553?namespace=dynamic-eu",
        },
        name: "Turalyon",
        id: 553,
        slug: "turalyon",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/554?namespace=dynamic-eu",
        },
        name: "Ravencrest",
        id: 554,
        slug: "ravencrest",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/556?namespace=dynamic-eu",
        },
        name: "Shattered Hand",
        id: 556,
        slug: "shattered-hand",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/557?namespace=dynamic-eu",
        },
        name: "Skullcrusher",
        id: 557,
        slug: "skullcrusher",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/558?namespace=dynamic-eu",
        },
        name: "Spinebreaker",
        id: 558,
        slug: "spinebreaker",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/559?namespace=dynamic-eu",
        },
        name: "Stormreaver",
        id: 559,
        slug: "stormreaver",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/560?namespace=dynamic-eu",
        },
        name: "Stormscale",
        id: 560,
        slug: "stormscale",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/561?namespace=dynamic-eu",
        },
        name: "Earthen Ring",
        id: 561,
        slug: "earthen-ring",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/562?namespace=dynamic-eu",
        },
        name: "Alexstrasza",
        id: 562,
        slug: "alexstrasza",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/563?namespace=dynamic-eu",
        },
        name: "Alleria",
        id: 563,
        slug: "alleria",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/564?namespace=dynamic-eu",
        },
        name: "Antonidas",
        id: 564,
        slug: "antonidas",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/565?namespace=dynamic-eu",
        },
        name: "Baelgun",
        id: 565,
        slug: "baelgun",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/566?namespace=dynamic-eu",
        },
        name: "Blackhand",
        id: 566,
        slug: "blackhand",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/567?namespace=dynamic-eu",
        },
        name: "Gilneas",
        id: 567,
        slug: "gilneas",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/568?namespace=dynamic-eu",
        },
        name: "Kargath",
        id: 568,
        slug: "kargath",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/569?namespace=dynamic-eu",
        },
        name: "Khaz'goroth",
        id: 569,
        slug: "khazgoroth",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/570?namespace=dynamic-eu",
        },
        name: "Lothar",
        id: 570,
        slug: "lothar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/571?namespace=dynamic-eu",
        },
        name: "Madmortem",
        id: 571,
        slug: "madmortem",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/572?namespace=dynamic-eu",
        },
        name: "Malfurion",
        id: 572,
        slug: "malfurion",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/573?namespace=dynamic-eu",
        },
        name: "Zuluhed",
        id: 573,
        slug: "zuluhed",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/574?namespace=dynamic-eu",
        },
        name: "Nozdormu",
        id: 574,
        slug: "nozdormu",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/575?namespace=dynamic-eu",
        },
        name: "Perenolde",
        id: 575,
        slug: "perenolde",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/576?namespace=dynamic-eu",
        },
        name: "Die Silberne Hand",
        id: 576,
        slug: "die-silberne-hand",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/577?namespace=dynamic-eu",
        },
        name: "Aegwynn",
        id: 577,
        slug: "aegwynn",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/578?namespace=dynamic-eu",
        },
        name: "Arthas",
        id: 578,
        slug: "arthas",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/579?namespace=dynamic-eu",
        },
        name: "Azshara",
        id: 579,
        slug: "azshara",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/580?namespace=dynamic-eu",
        },
        name: "Blackmoore",
        id: 580,
        slug: "blackmoore",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/581?namespace=dynamic-eu",
        },
        name: "Blackrock",
        id: 581,
        slug: "blackrock",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/582?namespace=dynamic-eu",
        },
        name: "Destromath",
        id: 582,
        slug: "destromath",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/583?namespace=dynamic-eu",
        },
        name: "Eredar",
        id: 583,
        slug: "eredar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/584?namespace=dynamic-eu",
        },
        name: "Frostmourne",
        id: 584,
        slug: "frostmourne",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/585?namespace=dynamic-eu",
        },
        name: "Frostwolf",
        id: 585,
        slug: "frostwolf",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/586?namespace=dynamic-eu",
        },
        name: "Gorgonnash",
        id: 586,
        slug: "gorgonnash",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/587?namespace=dynamic-eu",
        },
        name: "Gul'dan",
        id: 587,
        slug: "guldan",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/588?namespace=dynamic-eu",
        },
        name: "Kel'Thuzad",
        id: 588,
        slug: "kelthuzad",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/589?namespace=dynamic-eu",
        },
        name: "Kil'jaeden",
        id: 589,
        slug: "kiljaeden",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/590?namespace=dynamic-eu",
        },
        name: "Mal'Ganis",
        id: 590,
        slug: "malganis",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/591?namespace=dynamic-eu",
        },
        name: "Mannoroth",
        id: 591,
        slug: "mannoroth",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/592?namespace=dynamic-eu",
        },
        name: "Zirkel des Cenarius",
        id: 592,
        slug: "zirkel-des-cenarius",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/593?namespace=dynamic-eu",
        },
        name: "Proudmoore",
        id: 593,
        slug: "proudmoore",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/594?namespace=dynamic-eu",
        },
        name: "Nathrezim",
        id: 594,
        slug: "nathrezim",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/600?namespace=dynamic-eu",
        },
        name: "Dun Morogh",
        id: 600,
        slug: "dun-morogh",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/601?namespace=dynamic-eu",
        },
        name: "Aman'Thul",
        id: 601,
        slug: "amanthul",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/602?namespace=dynamic-eu",
        },
        name: "Sen'jin",
        id: 602,
        slug: "senjin",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/604?namespace=dynamic-eu",
        },
        name: "Thrall",
        id: 604,
        slug: "thrall",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/605?namespace=dynamic-eu",
        },
        name: "Theradras",
        id: 605,
        slug: "theradras",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/606?namespace=dynamic-eu",
        },
        name: "Genjuros",
        id: 606,
        slug: "genjuros",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/607?namespace=dynamic-eu",
        },
        name: "Balnazzar",
        id: 607,
        slug: "balnazzar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/608?namespace=dynamic-eu",
        },
        name: "Anub'arak",
        id: 608,
        slug: "anubarak",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/609?namespace=dynamic-eu",
        },
        name: "Wrathbringer",
        id: 609,
        slug: "wrathbringer",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/610?namespace=dynamic-eu",
        },
        name: "Onyxia",
        id: 610,
        slug: "onyxia",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/611?namespace=dynamic-eu",
        },
        name: "Nera'thor",
        id: 611,
        slug: "nerathor",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/612?namespace=dynamic-eu",
        },
        name: "Nefarian",
        id: 612,
        slug: "nefarian",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/613?namespace=dynamic-eu",
        },
        name: "Kult der Verdammten",
        id: 613,
        slug: "kult-der-verdammten",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/614?namespace=dynamic-eu",
        },
        name: "Das Syndikat",
        id: 614,
        slug: "das-syndikat",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/615?namespace=dynamic-eu",
        },
        name: "Terrordar",
        id: 615,
        slug: "terrordar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/616?namespace=dynamic-eu",
        },
        name: "Krag'jin",
        id: 616,
        slug: "kragjin",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/617?namespace=dynamic-eu",
        },
        name: "Der Rat von Dalaran",
        id: 617,
        slug: "der-rat-von-dalaran",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/618?namespace=dynamic-eu",
        },
        name: "Nordrassil",
        id: 618,
        slug: "nordrassil",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/619?namespace=dynamic-eu",
        },
        name: "Hellscream",
        id: 619,
        slug: "hellscream",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/621?namespace=dynamic-eu",
        },
        name: "Laughing Skull",
        id: 621,
        slug: "laughing-skull",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/622?namespace=dynamic-eu",
        },
        name: "Magtheridon",
        id: 622,
        slug: "magtheridon",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/623?namespace=dynamic-eu",
        },
        name: "Quel'Thalas",
        id: 623,
        slug: "quelthalas",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/624?namespace=dynamic-eu",
        },
        name: "Neptulon",
        id: 624,
        slug: "neptulon",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/625?namespace=dynamic-eu",
        },
        name: "Twisting Nether",
        id: 625,
        slug: "twisting-nether",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/626?namespace=dynamic-eu",
        },
        name: "Ragnaros",
        id: 626,
        slug: "ragnaros",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/627?namespace=dynamic-eu",
        },
        name: "The Maelstrom",
        id: 627,
        slug: "the-maelstrom",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/628?namespace=dynamic-eu",
        },
        name: "Sylvanas",
        id: 628,
        slug: "sylvanas",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/629?namespace=dynamic-eu",
        },
        name: "Vashj",
        id: 629,
        slug: "vashj",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/630?namespace=dynamic-eu",
        },
        name: "Bloodfeather",
        id: 630,
        slug: "bloodfeather",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/631?namespace=dynamic-eu",
        },
        name: "Darksorrow",
        id: 631,
        slug: "darksorrow",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/632?namespace=dynamic-eu",
        },
        name: "Frostwhisper",
        id: 632,
        slug: "frostwhisper",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/633?namespace=dynamic-eu",
        },
        name: "Kor'gall",
        id: 633,
        slug: "korgall",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/635?namespace=dynamic-eu",
        },
        name: "Defias Brotherhood",
        id: 635,
        slug: "defias-brotherhood",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/636?namespace=dynamic-eu",
        },
        name: "The Venture Co",
        id: 636,
        slug: "the-venture-co",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/637?namespace=dynamic-eu",
        },
        name: "Lightning's Blade",
        id: 637,
        slug: "lightnings-blade",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/638?namespace=dynamic-eu",
        },
        name: "Haomarush",
        id: 638,
        slug: "haomarush",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/639?namespace=dynamic-eu",
        },
        name: "Xavius",
        id: 639,
        slug: "xavius",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/640?namespace=dynamic-eu",
        },
        name: "Khaz Modan",
        id: 640,
        slug: "khaz-modan",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/641?namespace=dynamic-eu",
        },
        name: "Drek'Thar",
        id: 641,
        slug: "drekthar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/642?namespace=dynamic-eu",
        },
        name: "Rashgarroth",
        id: 642,
        slug: "rashgarroth",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/643?namespace=dynamic-eu",
        },
        name: "Throk'Feroth",
        id: 643,
        slug: "throkferoth",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/644?namespace=dynamic-eu",
        },
        name: "Conseil des Ombres",
        id: 644,
        slug: "conseil-des-ombres",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/645?namespace=dynamic-eu",
        },
        name: "Varimathras",
        id: 645,
        slug: "varimathras",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/646?namespace=dynamic-eu",
        },
        name: "Hakkar",
        id: 646,
        slug: "hakkar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/647?namespace=dynamic-eu",
        },
        name: "Les Sentinelles",
        id: 647,
        slug: "les-sentinelles",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1080?namespace=dynamic-eu",
        },
        name: "Khadgar",
        id: 1080,
        slug: "khadgar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1081?namespace=dynamic-eu",
        },
        name: "Bronzebeard",
        id: 1081,
        slug: "bronzebeard",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1082?namespace=dynamic-eu",
        },
        name: "Kul Tiras",
        id: 1082,
        slug: "kul-tiras",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1083?namespace=dynamic-eu",
        },
        name: "Chromaggus",
        id: 1083,
        slug: "chromaggus",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1084?namespace=dynamic-eu",
        },
        name: "Dentarg",
        id: 1084,
        slug: "dentarg",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1085?namespace=dynamic-eu",
        },
        name: "Moonglade",
        id: 1085,
        slug: "moonglade",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1086?namespace=dynamic-eu",
        },
        name: "La Croisade écarlate",
        id: 1086,
        slug: "la-croisade-écarlate",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1087?namespace=dynamic-eu",
        },
        name: "Executus",
        id: 1087,
        slug: "executus",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1088?namespace=dynamic-eu",
        },
        name: "Trollbane",
        id: 1088,
        slug: "trollbane",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1089?namespace=dynamic-eu",
        },
        name: "Mazrigos",
        id: 1089,
        slug: "mazrigos",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1090?namespace=dynamic-eu",
        },
        name: "Talnivarr",
        id: 1090,
        slug: "talnivarr",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1091?namespace=dynamic-eu",
        },
        name: "Emeriss",
        id: 1091,
        slug: "emeriss",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1092?namespace=dynamic-eu",
        },
        name: "Drak'thul",
        id: 1092,
        slug: "drakthul",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1093?namespace=dynamic-eu",
        },
        name: "Ahn'Qiraj",
        id: 1093,
        slug: "ahnqiraj",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1096?namespace=dynamic-eu",
        },
        name: "Scarshield Legion",
        id: 1096,
        slug: "scarshield-legion",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1097?namespace=dynamic-eu",
        },
        name: "Ysera",
        id: 1097,
        slug: "ysera",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1098?namespace=dynamic-eu",
        },
        name: "Malygos",
        id: 1098,
        slug: "malygos",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1099?namespace=dynamic-eu",
        },
        name: "Rexxar",
        id: 1099,
        slug: "rexxar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1104?namespace=dynamic-eu",
        },
        name: "Anetheron",
        id: 1104,
        slug: "anetheron",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1105?namespace=dynamic-eu",
        },
        name: "Nazjatar",
        id: 1105,
        slug: "nazjatar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1106?namespace=dynamic-eu",
        },
        name: "Tichondrius",
        id: 1106,
        slug: "tichondrius",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1117?namespace=dynamic-eu",
        },
        name: "Steamwheedle Cartel",
        id: 1117,
        slug: "steamwheedle-cartel",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1118?namespace=dynamic-eu",
        },
        name: "Die ewige Wacht",
        id: 1118,
        slug: "die-ewige-wacht",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1119?namespace=dynamic-eu",
        },
        name: "Die Todeskrallen",
        id: 1119,
        slug: "die-todeskrallen",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1121?namespace=dynamic-eu",
        },
        name: "Die Arguswacht",
        id: 1121,
        slug: "die-arguswacht",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1122?namespace=dynamic-eu",
        },
        name: "Uldaman",
        id: 1122,
        slug: "uldaman",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1123?namespace=dynamic-eu",
        },
        name: "Eitrigg",
        id: 1123,
        slug: "eitrigg",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1127?namespace=dynamic-eu",
        },
        name: "Confrérie du Thorium",
        id: 1127,
        slug: "confrérie-du-thorium",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1298?namespace=dynamic-eu",
        },
        name: "Vek'nilash",
        id: 1298,
        slug: "veknilash",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1299?namespace=dynamic-eu",
        },
        name: "Boulderfist",
        id: 1299,
        slug: "boulderfist",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1300?namespace=dynamic-eu",
        },
        name: "Frostmane",
        id: 1300,
        slug: "frostmane",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1301?namespace=dynamic-eu",
        },
        name: "Outland",
        id: 1301,
        slug: "outland",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1303?namespace=dynamic-eu",
        },
        name: "Grim Batol",
        id: 1303,
        slug: "grim-batol",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1304?namespace=dynamic-eu",
        },
        name: "Jaedenar",
        id: 1304,
        slug: "jaedenar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1305?namespace=dynamic-eu",
        },
        name: "Kazzak",
        id: 1305,
        slug: "kazzak",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1306?namespace=dynamic-eu",
        },
        name: "Tarren Mill",
        id: 1306,
        slug: "tarren-mill",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1307?namespace=dynamic-eu",
        },
        name: "Chamber of Aspects",
        id: 1307,
        slug: "chamber-of-aspects",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1308?namespace=dynamic-eu",
        },
        name: "Ravenholdt",
        id: 1308,
        slug: "ravenholdt",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1309?namespace=dynamic-eu",
        },
        name: "Pozzo dell'Eternità",
        id: 1309,
        slug: "pozzo-delleternità",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1310?namespace=dynamic-eu",
        },
        name: "Eonar",
        id: 1310,
        slug: "eonar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1311?namespace=dynamic-eu",
        },
        name: "Kilrogg",
        id: 1311,
        slug: "kilrogg",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1312?namespace=dynamic-eu",
        },
        name: "Aerie Peak",
        id: 1312,
        slug: "aerie-peak",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1313?namespace=dynamic-eu",
        },
        name: "Wildhammer",
        id: 1313,
        slug: "wildhammer",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1314?namespace=dynamic-eu",
        },
        name: "Saurfang",
        id: 1314,
        slug: "saurfang",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1316?namespace=dynamic-eu",
        },
        name: "Nemesis",
        id: 1316,
        slug: "nemesis",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1317?namespace=dynamic-eu",
        },
        name: "Darkmoon Faire",
        id: 1317,
        slug: "darkmoon-faire",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1318?namespace=dynamic-eu",
        },
        name: "Vek'lor",
        id: 1318,
        slug: "veklor",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1319?namespace=dynamic-eu",
        },
        name: "Mug'thol",
        id: 1319,
        slug: "mugthol",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1320?namespace=dynamic-eu",
        },
        name: "Taerar",
        id: 1320,
        slug: "taerar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1321?namespace=dynamic-eu",
        },
        name: "Dalvengyr",
        id: 1321,
        slug: "dalvengyr",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1322?namespace=dynamic-eu",
        },
        name: "Rajaxx",
        id: 1322,
        slug: "rajaxx",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1323?namespace=dynamic-eu",
        },
        name: "Ulduar",
        id: 1323,
        slug: "ulduar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1324?namespace=dynamic-eu",
        },
        name: "Malorne",
        id: 1324,
        slug: "malorne",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1326?namespace=dynamic-eu",
        },
        name: "Der abyssische Rat",
        id: 1326,
        slug: "der-abyssische-rat",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1327?namespace=dynamic-eu",
        },
        name: "Der Mithrilorden",
        id: 1327,
        slug: "der-mithrilorden",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1328?namespace=dynamic-eu",
        },
        name: "Tirion",
        id: 1328,
        slug: "tirion",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1330?namespace=dynamic-eu",
        },
        name: "Ambossar",
        id: 1330,
        slug: "ambossar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1331?namespace=dynamic-eu",
        },
        name: "Suramar",
        id: 1331,
        slug: "suramar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1332?namespace=dynamic-eu",
        },
        name: "Krasus",
        id: 1332,
        slug: "krasus",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1333?namespace=dynamic-eu",
        },
        name: "Die Nachtwache",
        id: 1333,
        slug: "die-nachtwache",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1334?namespace=dynamic-eu",
        },
        name: "Arathi",
        id: 1334,
        slug: "arathi",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1335?namespace=dynamic-eu",
        },
        name: "Ysondre",
        id: 1335,
        slug: "ysondre",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1336?namespace=dynamic-eu",
        },
        name: "Eldre'Thalas",
        id: 1336,
        slug: "eldrethalas",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1337?namespace=dynamic-eu",
        },
        name: "Culte de la Rive noire",
        id: 1337,
        slug: "culte-de-la-rive-noire",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1378?namespace=dynamic-eu",
        },
        name: "Dun Modr",
        id: 1378,
        slug: "dun-modr",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1379?namespace=dynamic-eu",
        },
        name: "Zul'jin",
        id: 1379,
        slug: "zuljin",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1380?namespace=dynamic-eu",
        },
        name: "Uldum",
        id: 1380,
        slug: "uldum",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1381?namespace=dynamic-eu",
        },
        name: "C'Thun",
        id: 1381,
        slug: "cthun",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1382?namespace=dynamic-eu",
        },
        name: "Sanguino",
        id: 1382,
        slug: "sanguino",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1383?namespace=dynamic-eu",
        },
        name: "Shen'dralar",
        id: 1383,
        slug: "shendralar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1384?namespace=dynamic-eu",
        },
        name: "Tyrande",
        id: 1384,
        slug: "tyrande",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1385?namespace=dynamic-eu",
        },
        name: "Exodar",
        id: 1385,
        slug: "exodar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1386?namespace=dynamic-eu",
        },
        name: "Minahonda",
        id: 1386,
        slug: "minahonda",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1387?namespace=dynamic-eu",
        },
        name: "Los Errantes",
        id: 1387,
        slug: "los-errantes",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1388?namespace=dynamic-eu",
        },
        name: "Lightbringer",
        id: 1388,
        slug: "lightbringer",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1389?namespace=dynamic-eu",
        },
        name: "Darkspear",
        id: 1389,
        slug: "darkspear",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1391?namespace=dynamic-eu",
        },
        name: "Alonsus",
        id: 1391,
        slug: "alonsus",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1392?namespace=dynamic-eu",
        },
        name: "Burning Steppes",
        id: 1392,
        slug: "burning-steppes",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1393?namespace=dynamic-eu",
        },
        name: "Bronze Dragonflight",
        id: 1393,
        slug: "bronze-dragonflight",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1394?namespace=dynamic-eu",
        },
        name: "Anachronos",
        id: 1394,
        slug: "anachronos",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1395?namespace=dynamic-eu",
        },
        name: "Colinas Pardas",
        id: 1395,
        slug: "colinas-pardas",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1400?namespace=dynamic-eu",
        },
        name: "Un'Goro",
        id: 1400,
        slug: "ungoro",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1401?namespace=dynamic-eu",
        },
        name: "Garrosh",
        id: 1401,
        slug: "garrosh",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1404?namespace=dynamic-eu",
        },
        name: "Area 52",
        id: 1404,
        slug: "area-52",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1405?namespace=dynamic-eu",
        },
        name: "Todeswache",
        id: 1405,
        slug: "todeswache",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1406?namespace=dynamic-eu",
        },
        name: "Arygos",
        id: 1406,
        slug: "arygos",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1407?namespace=dynamic-eu",
        },
        name: "Teldrassil",
        id: 1407,
        slug: "teldrassil",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1408?namespace=dynamic-eu",
        },
        name: "Norgannon",
        id: 1408,
        slug: "norgannon",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1409?namespace=dynamic-eu",
        },
        name: "Lordaeron",
        id: 1409,
        slug: "lordaeron",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1413?namespace=dynamic-eu",
        },
        name: "Aggra (Português)",
        id: 1413,
        slug: "aggra-português",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1415?namespace=dynamic-eu",
        },
        name: "Terokkar",
        id: 1415,
        slug: "terokkar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1416?namespace=dynamic-eu",
        },
        name: "Blade's Edge",
        id: 1416,
        slug: "blades-edge",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1417?namespace=dynamic-eu",
        },
        name: "Azuremyst",
        id: 1417,
        slug: "azuremyst",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1587?namespace=dynamic-eu",
        },
        name: "Hellfire",
        id: 1587,
        slug: "hellfire",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1588?namespace=dynamic-eu",
        },
        name: "Ghostlands",
        id: 1588,
        slug: "ghostlands",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1589?namespace=dynamic-eu",
        },
        name: "Nagrand",
        id: 1589,
        slug: "nagrand",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1595?namespace=dynamic-eu",
        },
        name: "The Sha'tar",
        id: 1595,
        slug: "the-shatar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1596?namespace=dynamic-eu",
        },
        name: "Karazhan",
        id: 1596,
        slug: "karazhan",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1597?namespace=dynamic-eu",
        },
        name: "Auchindoun",
        id: 1597,
        slug: "auchindoun",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1598?namespace=dynamic-eu",
        },
        name: "Shattered Halls",
        id: 1598,
        slug: "shattered-halls",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1602?namespace=dynamic-eu",
        },
        name: "Gordunni",
        id: 1602,
        slug: "gordunni",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1603?namespace=dynamic-eu",
        },
        name: "Lich King",
        id: 1603,
        slug: "lich-king",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1604?namespace=dynamic-eu",
        },
        name: "Soulflayer",
        id: 1604,
        slug: "soulflayer",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1605?namespace=dynamic-eu",
        },
        name: "Deathguard",
        id: 1605,
        slug: "deathguard",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1606?namespace=dynamic-eu",
        },
        name: "Sporeggar",
        id: 1606,
        slug: "sporeggar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1607?namespace=dynamic-eu",
        },
        name: "Nethersturm",
        id: 1607,
        slug: "nethersturm",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1608?namespace=dynamic-eu",
        },
        name: "Shattrath",
        id: 1608,
        slug: "shattrath",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1609?namespace=dynamic-eu",
        },
        name: "Deepholm",
        id: 1609,
        slug: "deepholm",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1610?namespace=dynamic-eu",
        },
        name: "Greymane",
        id: 1610,
        slug: "greymane",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1611?namespace=dynamic-eu",
        },
        name: "Festung der Stürme",
        id: 1611,
        slug: "festung-der-stürme",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1612?namespace=dynamic-eu",
        },
        name: "Echsenkessel",
        id: 1612,
        slug: "echsenkessel",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1613?namespace=dynamic-eu",
        },
        name: "Blutkessel",
        id: 1613,
        slug: "blutkessel",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1614?namespace=dynamic-eu",
        },
        name: "Galakrond",
        id: 1614,
        slug: "galakrond",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1615?namespace=dynamic-eu",
        },
        name: "Howling Fjord",
        id: 1615,
        slug: "howling-fjord",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1616?namespace=dynamic-eu",
        },
        name: "Razuvious",
        id: 1616,
        slug: "razuvious",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1617?namespace=dynamic-eu",
        },
        name: "Deathweaver",
        id: 1617,
        slug: "deathweaver",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1618?namespace=dynamic-eu",
        },
        name: "Die Aldor",
        id: 1618,
        slug: "die-aldor",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1619?namespace=dynamic-eu",
        },
        name: "Das Konsortium",
        id: 1619,
        slug: "das-konsortium",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1620?namespace=dynamic-eu",
        },
        name: "Chants éternels",
        id: 1620,
        slug: "chants-éternels",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1621?namespace=dynamic-eu",
        },
        name: "Marécage de Zangar",
        id: 1621,
        slug: "marécage-de-zangar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1622?namespace=dynamic-eu",
        },
        name: "Temple noir",
        id: 1622,
        slug: "temple-noir",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1623?namespace=dynamic-eu",
        },
        name: "Fordragon",
        id: 1623,
        slug: "fordragon",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1624?namespace=dynamic-eu",
        },
        name: "Naxxramas",
        id: 1624,
        slug: "naxxramas",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1625?namespace=dynamic-eu",
        },
        name: "Borean Tundra",
        id: 1625,
        slug: "borean-tundra",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1626?namespace=dynamic-eu",
        },
        name: "Les Clairvoyants",
        id: 1626,
        slug: "les-clairvoyants",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1922?namespace=dynamic-eu",
        },
        name: "Azuregos",
        id: 1922,
        slug: "azuregos",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1923?namespace=dynamic-eu",
        },
        name: "Ashenvale",
        id: 1923,
        slug: "ashenvale",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1924?namespace=dynamic-eu",
        },
        name: "Booty Bay",
        id: 1924,
        slug: "booty-bay",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1925?namespace=dynamic-eu",
        },
        name: "Eversong",
        id: 1925,
        slug: "eversong",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1926?namespace=dynamic-eu",
        },
        name: "Thermaplugg",
        id: 1926,
        slug: "thermaplugg",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1927?namespace=dynamic-eu",
        },
        name: "Grom",
        id: 1927,
        slug: "grom",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1928?namespace=dynamic-eu",
        },
        name: "Goldrinn",
        id: 1928,
        slug: "goldrinn",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/1929?namespace=dynamic-eu",
        },
        name: "Blackscar",
        id: 1929,
        slug: "blackscar",
    },
    {
        key: {
            href: "https://eu.api.blizzard.com/data/wow/realm/5911?namespace=dynamic-eu",
        },
        name: "EU PS Realm 222",
        id: 5911,
        slug: "eu-ps-realm-222",
    },
];

export const realms = [...usRealms, ...euRealms];
