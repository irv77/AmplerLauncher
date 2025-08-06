PluginAPI.require("player");
var jetpackActive = false;
window.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "h") {
    jetpackActive = true;
  }
});
window.addEventListener("keyup", (event) => {
  if (event.key.toLowerCase() === "h") {
    jetpackActive = false;
  }
});
PluginAPI.addEventListener("update", ()=>{
if(!jetpackActive){
return;
}
PluginAPI.player.motionY += 0.2;
PluginAPI.player.reload()
});
