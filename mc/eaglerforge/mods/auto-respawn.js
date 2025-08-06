ModAPI.require('player');
ModAPI.addEventListener("update", () => {
    if (Boolean(ModAPI.player ? (ModAPI.player.isPlayer() ? true : false) : false)) {
        if (ModAPI.player.isEntityAlive() === false) {
            ModAPI.player.respawnPlayer();
        };
    };
});