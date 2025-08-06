ModAPI.require("player");
ModAPI.addEventListener("sendchatmessage", function (event) {
  event.message = `${event.message}`
    .replaceAll("{health}", ModAPI.player.getHealth() / 2 + "❤")
    .replaceAll(
      "{pos}",
      Math.floor(ModAPI.player.x) +
        " " +
        Math.floor(ModAPI.player.y) +
        " " +
        Math.floor(ModAPI.player.z)
    ).replaceAll(
      "{name}",
      ModAPI.player.getDisplayName()
    ).replaceAll(
      "{me}",
      ModAPI.player.getDisplayName()
    ).replaceAll(
      "{x}",
      Math.floor(ModAPI.player.x)
    ).replaceAll(
      "{y}",
      Math.floor(ModAPI.player.y)
    ).replaceAll(
      "{z}",
      Math.floor(ModAPI.player.z)
    ).replaceAll(
      "{level}",
      ModAPI.player.experienceLevel
    ).replaceAll(
      "{walked}",
      Math.floor(ModAPI.player.movedDistance)
    ).replaceAll(
      "{chunk}",
      Math.floor(ModAPI.player.chunkCoordX) +
        " " +
        Math.floor(ModAPI.player.chunkCoordY) +
        " " +
        Math.floor(ModAPI.player.chunkCoordZ)
    ).replaceAll(
      "\\n",
      "\n"
    );
});
