ModAPI.require("player"); //Require the player, we need to select their fishing rod.
var timer;
var fishRodId = ModAPI.items.fishing_rod.getID(); //Store the item id of fishing rods, so we don't have to recalculate it every time.
ModAPI.addEventListener("packetsoundeffect", (ev) => { //When we receive a sound effect packet
  if (ev.soundName === "random.splash") { //If it is a splash
    rightClick(); //run the rightClick() function
  }
});
ModAPI.addEventListener("update", () => { //every client tick
  if ( //If the player is holding a fishing rod
    ModAPI.player.inventory.mainInventory[
      ModAPI.player.inventory.currentItem
    ] &&
    ModAPI.player.inventory.mainInventory[
      ModAPI.player.inventory.currentItem
    ].itemId === fishRodId
  ) {
    if (timer > 0) { //If timer is greater than 0
      timer--; //Decrease the timer by 1
      return; //Exit the function
    }
    if (ModAPI.player.fishEntity) { //If the fish bobber exists
      return; //Exit the function
    }

    rightClick(); //run the rightClick() function
  }
});
function rightClick() {
  if ( //If the player is not holding a fishing rod
    !ModAPI.player.inventory.mainInventory[
      ModAPI.player.inventory.currentItem
    ] ||
    !ModAPI.player.inventory.mainInventory[
      ModAPI.player.inventory.currentItem
    ].itemId === fishRodId
  ) {
    return; //Exit the function
  }
  ModAPI.rightClickMouse(); //Tell the ModAPI to trigger a right click.
  timer = 15; // Set the timer to 15
}
