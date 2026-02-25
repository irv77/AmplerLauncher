let discordsays = window.location.hostname.includes("discordsays.com") ? true : false;
let isWASM = typeof window.isWASM !== 'undefined' && window.isWASM;
let astraClient = typeof window.astraClient !== 'undefined' && window.astraClient;
let moreServers = false; //!discordsays ? (typeof window.parent?.settings?.moreDefaultServers?.value === "boolean" ? window.parent.settings.moreDefaultServers.value : false) : false;

let relayId = Math.floor(Math.random() * 3);

let serverList = [];

/*if (!astraClient) {
    serverList.push({
        addr: "wss://ob.webmc.xyz",
        name: "§6§lWebMC§r",
        hideAddr: true,
    });
}*/

serverList.push(
    {
        addr: "wss://play.webmc.fun",
        name: "§6§lWebMC§r",
        hideAddr: true,
    },
    {
        addr: "wss://legacy.webmc.xyz",
        name: "§7§lWebMC LEGACY§r",
        hideAddr: true,
    },
    {
        addr: "wss://eagler.eaglesmp.org",
        name: "§9§lEagleSMP§r",
        hideAddr: true,
    },
    {
        addr: "wss://2b2t.zypher.club",
        name: "§c§l2b2t²§r",
        hideAddr: true,
    }
);

if (window.location.pathname.includes("wisp")) {
    serverList.push(
        {
            addr: "java://mc.hypixel.net/",
            name: "Hypixel",
            hideAddr: true,
        }
    );
}

if (moreServers) {
    serverList.push(
        {
            addr: "wss://mc.arch.lol/",
            name: "ArchMC",
            hideAddr: true,
        },
        {
            addr: "wss://mc.asspixel.net/",
            name: "APX Network",
            hideAddr: true,
        },
        {
            addr: "wss://eag.hyper-network.xyz/",
            name: "Hyper Network",
            hideAddr: true,
        },
        {
            addr: "wss://mc.ricenetwork.xyz/",
            name: "RN X BC",
            hideAddr: true,
        },
        {
            addr: "wss://mc.lamplifesteal.xyz/",
            name: "Lamp Network",
            hideAddr: true,
        },
        {
            addr: "wss://communistmc.xyz/",
            name: "CommunistMC",
            hideAddr: true,
        },
        {
            addr: "wss://zentic.cc/",
            name: "Zentic Network",
            hideAddr: true,
        },
        {
            addr: "wss://x.mess.eu.org/",
            name: "MessCraftX",
            hideAddr: true,
        },
        {
            addr: "wss://play.ggsmp.net/",
            name: "GGSMP",
            hideAddr: true,
        },
        {
            addr: "wss://sigma.shhnowisnottheti.me/",
            name: "creayun",
            hideAddr: true,
        },
        {
            addr: "wss://eagler.nobnot.org/",
            name: "noBnoT",
            hideAddr: true,
        },
        {
            addr: "wss://ws.wisteriasmp.fun/",
            name: "Wisteria SMP",
            hideAddr: true,
        }
    );
}

window.eaglercraftXOpts = {
    enableMinceraft: false,
    allowUpdateSvc: false,
    allowUpdateDL: false,
    checkRelaysForUpdates: false,
    enableDownloadOfflineButton: !discordsays,
    downloadOfflineButtonLink: `${window.location.origin}?download=${btoa(encodeURIComponent(window.location.pathname.split('/').filter(Boolean).reverse().slice(-2, -1)[0]))}`,
    allowFNAWSkins: false,
    autoFixLegacyStyleAttr: true,
    allowBootMenu: false,
    forceProfanityFilter: true,
    noInitialModGui: true,
    enforceVSync: true,
    enableEPKVersionCheck: true,
    allowServerRedirects: true,
    container: "game_frame",
    assetsURI: !isWASM ? "assets.epk" : "assets.epw",
    localesURI: "lang/",
    worldsDB: "worlds",
    servers: serverList,
    relays: [
        { addr: "wss://relay.deev.is/", comment: "lax1dude relay #1", primary: relayId === 0 },
        { addr: "wss://relay.lax1dude.net/", comment: "lax1dude relay #2", primary: relayId === 1 },
        { addr: "wss://relay.shhnowisnottheti.me/", comment: "ayunami relay #1", primary: relayId === 2 }
    ]
};

let q = window.location.search;
if (typeof q === "string" && q[0] === "?" && typeof window.URLSearchParams !== "undefined") {
    q = new window.URLSearchParams(q);
    const s = q.get("server");
    if (s) window.eaglercraftXOpts.joinServer = s;
}

if (localStorage.getItem("newPerformanceMode") === "true" && document.body.dataset.performance !== "false") {
    document.documentElement.style = "height:40%; transform-origin: top left; width: 40%; transform: scale(2.5); background-color:black; image-rendering: pixelated;";
}

window.focus();
