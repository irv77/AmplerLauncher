let height = 0;
let maxJumpHeight = 3;
document.addEventListener('keydown', function(event) {
  if (event.code == 'Space' && ModAPI.mcinstance.$currentScreen === null) {
    if (height < maxJumpHeight) {
        ModAPI.mcinstance.$thePlayer.$motionY = 1;
        height += 1;
    } else if (ModAPI.mcinstance.$thePlayer.$isCollidedVertically === 1){
        height = 0;
    }
  }
});
