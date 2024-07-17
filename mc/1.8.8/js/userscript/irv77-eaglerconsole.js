// This is generally a bad practice, but we need to run scripts in the main context before the DOM loads. Because we are only matching eaglercraft.com, unsafeWindow should be safe to use.
// If someone knows a better way of doing this, please create an issue
try {
  unsafeWindow.console.warn("DANGER: This userscript is  using unsafeWindow. Unsafe websites could potentially use this to gain access to data and other content that the browser normally wouldn't allow!")
  Object.defineProperty(window, "clientWindow", {
      value: unsafeWindow
  }); // If this is a userscript, use unsafeWindow
} catch {
  Object.defineProperty(window, "clientWindow", {
      value: window
  }); // If this is plain javascript, use window
}
clientWindow.console.log("Eagler Console v1.0.0")
// TODO: remove the mobile check is implement the dynamic enabling and disabling of individual features
function isMobile() {
  try {
      document.createEvent("TouchEvent");
      return true;
  } catch (e) {
      return false;
  }
}
if(!isMobile()) {
  alert("WARNING: This script was created for controller use, and it will break functionality for keyboard use!");
}
// TODO: consolidate all of these into a single object?
clientWindow.crouchLock = false; // Used for crouch mobile control
clientWindow.sprintLock = false; // Used for sprint mobile control
clientWindow.keyboardFix = false; // keyboardFix ? "Standard Keyboard" : "Compatibility Mode"
clientWindow.inputFix = false; // If true, Duplicate Mode
clientWindow.blockNextInput = false; // Used for Duplicate Mode 
clientWindow.hiddenInputFocused = false; // Used for keyboard display on mobile
clientWindow.canvasTouchMode = 0; // Used for canvas touch handling
/*
  0   Idle
  1   Touch initiated
  2   Primary touch
  3   Secondary touch
  4   Scroll
  5   Finished
*/
clientWindow.canvasTouchStartX = null;
clientWindow.canvasTouchStartY = null;
clientWindow.canvasTouchPreviousX = null;
clientWindow.canvasTouchPreviousY = null;
clientWindow.canvasPrimaryID = null;
clientWindow.buttonTouchStartX = null;

// charCodeAt is designed for unicode characters, and doesn't match the behavior of the keyCodes used by KeyboardEvents, thus necessitating this function
String.prototype.toKeyCode = function() {
      const keyCodeList = {"0": 48, "1": 49, "2": 50, "3": 51, "4": 52, "5": 53, "6": 54, "7": 55, "8": 56, "9": 57, "backspace": 8, "tab": 9, "enter": 13, "shift": 16, "ctrl": 17, "alt": 18, "pause_break": 19, "caps_lock": 20, "escape": 27, " ": 32, "page_up": 33, "page_down": 34, "end": 35, "home": 36, "left_arrow": 37, "up_arrow": 38, "right_arrow": 39, "down_arrow": 40, "insert": 45, "delete": 46, "a": 65, "b": 66, "c": 67, "d": 68, "e": 69, "f": 70, "g": 71, "h": 72, "i": 73, "j": 74, "k": 75, "l": 76, "m": 77, "n": 78, "o": 79, "p": 80, "q": 81, "r": 82, "s": 83, "t": 84, "u": 85, "v": 86, "w": 87, "x": 88, "y": 89, "z": 90, "left_window_key": 91, "right_window_key": 92, "select_key": 93, "numpad_0": 96, "numpad_1": 97, "numpad_2": 98, "numpad_3": 99, "numpad_4": 100, "numpad_5": 101, "numpad_6": 102, "numpad_7": 103, "numpad_8": 104, "numpad_9": 105, "*": 106, "+": 107, "-": 109, ".": 110, "/": 111, "f1": 112, "f2": 113, "f3": 114, "f4": 115, "f5": 116, "f6": 117, "f7": 118, "f8": 119, "f9": 120, "f10": 121, "f11": 122, "f12": 123, "num_lock": 144, "scroll_lock": 145, ";": 186, "=": 187, ",": 188, "-": 189, ".": 190, "/": 191, "\u0060": 192, "[": 219, "\u005C": 220, "]": 221, "\u0022": 222};
  return keyCodeList[this];
}
// Overrides the addEventListener behavior to all code injection on keydown event listeners. This function has thrown TypeErrors on some Android devices because fn is not recognized as a function
// This is used by Compatibility Mode to block invalid keyEvents
const _addEventListener = EventTarget.prototype.addEventListener;
Object.defineProperty(EventTarget.prototype, "addEventListener", {
  value: function (type, fn, ...rest) {
      if(type == 'keydown') { // Check if a keydown event is being added
          _addEventListener.call(this, type, function(...args) {
              if(args[0].isTrusted && clientWindow.keyboardFix) { // When we are in compatibility mode, we ignore all trusted keyboard events
                  return;
              }
              return fn.apply(this, args); // Appends the rest of the function specified by addEventListener
          }, ...rest);
      } else { // If it's not a keydown event, behave like normal (hopefully)
          _addEventListener.call(this, type, fn, ...rest);
      }
  }
});
// Overrides preventDefault, because on some (Android) devices you couldn't type into hiddenInput
const _preventDefault = Event.prototype.preventDefault;
Event.prototype.preventDefault = function(shouldBypass) {
if(document.activeElement.id != "hiddenInput" || shouldBypass) { // activeElement is what element is currently focused
    this._preventDefault =  _preventDefault;
    this._preventDefault();
}
}
// Key and mouse events
// Note: the client must have the key, keyCode, and which parameters defined or it will crash
// Note: for text inputs, the client only reads from the "key" paramater
//     * an exception to this appears to be the shift and backspace key
// Note: for inGame inputs, the client only reads from the "keyCode character"
function keyEvent(name, state) {
  const charCode = name.toKeyCode();
  let evt = new KeyboardEvent(state, {
      "key": name,
      "keyCode": charCode,
      "which": charCode
  });
  clientWindow.dispatchEvent(evt);
}
function mouseEvent(number, state, element, event = {"clientX": 0, "clientY" : 0, "screenX": 0, "screenY": 0}) {
  element.dispatchEvent(new PointerEvent(state, {
      "button": number,
      "buttons": number,
      "clientX": event.clientX,
      "clientY" : event.clientY,
      "screenX": event.screenX,
      "screenY": event.screenY
  }));
}
function wheelEvent(element, delta) {
  element.dispatchEvent(new WheelEvent("wheel", {
      "wheelDeltaY": delta
}));
}
function setButtonVisibility(pointerLocked) {
  let inGameStyle = document.getElementById('inGameStyle');
  let inMenuStyle = document.getElementById('inMenuStyle');
  inGameStyle.disabled = pointerLocked;
  inMenuStyle.disabled = !pointerLocked;  
}
// POINTERLOCK
// When requestpointerlock is called, this dispatches an event, saves the requested element to clientWindow.fakelock, and unhides the touch controls
clientWindow.fakelock = null;

Object.defineProperty(Element.prototype, "requestPointerLock", {
  value: function() {
      clientWindow.fakelock = this
      document.dispatchEvent(new Event('pointerlockchange'));
      setButtonVisibility(true);
      return true
  }
});


// Makes pointerLockElement return clientWindow.fakelock
Object.defineProperty(Document.prototype, "pointerLockElement", {
  get: function() {
      return clientWindow.fakelock;
  }
});
// When exitPointerLock is called, this dispatches an event, clears the
Object.defineProperty(Document.prototype, "exitPointerLock", {
  value: function() {
      clientWindow.fakelock = null
      document.dispatchEvent(new Event('pointerlockchange'));
      setButtonVisibility(false);
      return true
  }
});

// FULLSCREEN
clientWindow.fakefull = null;
// Stops the client from crashing when fullscreen is requested
Object.defineProperty(Element.prototype, "requestFullscreen", {
  value: function() {
      clientWindow.fakefull = this
      document.dispatchEvent(new Event('fullscreenchange'));
      return true
  }
});
Object.defineProperty(document, "fullscreenElement", {
  get: function() {
      return clientWindow.fakefull;
  }
});
Object.defineProperty(Document.prototype, "exitFullscreen", {
  value: function() {
      clientWindow.fakefull = null
      document.dispatchEvent(new Event('fullscreenchange'));
      return true
  }
});

// FILE UPLOADING
// Safari doesn't recognize the element.click() used to display the file uploader as an action performed by the user, so it ignores it.
// This hijacks the element.createElement() function to add the file upload to the DOM, so the user can manually press the button again.
const _createElement = document.createElement;
document.createElement = function(type, ignore) {
  this._createElement = _createElement;
  var element = this._createElement(type);
  if(type == "input" && !ignore) { // We set the ingore flag to true when we create the hiddenInput
      document.querySelectorAll('#fileUpload').forEach(e => e.parentNode.removeChild(e)); // Get rid of any left over fileUpload inputs
      element.id = "fileUpload";
      element.addEventListener('change', function(e) {
          element.hidden = true;
          element.style.display = "none";
      }, {passive: false, once: true});
      clientWindow.addEventListener('focus', function(e) {
          setTimeout(() => {
              element.hidden = true;
              element.style.display = "none";
          }, 300)
      }, { once: true })
      document.body.appendChild(element);
  }
  return element;
}

// Lazy way to hide touch controls through CSS.
let inGameStyle = document.createElement("style");
inGameStyle.id = "inGameStyle";
inGameStyle.textContent = `
  .inGame {
      display: none;
  }`;
document.documentElement.appendChild(inGameStyle);

let inMenuStyle = document.createElement("style");
inMenuStyle.id = "inMenuStyle";
inMenuStyle.textContent = `
  .inMenu {
      display: none;
  }`;
document.documentElement.appendChild(inMenuStyle);


// The canvas is created by the client after it finishes unzipping and loading. When the canvas is created, this applies any necessary event listeners and creates buttons
function waitForElm(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }
      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
              observer.disconnect();
              resolve(document.querySelector(selector));
          }
      });
      observer.observe(document.documentElement, {
          childList: true,
          subtree: true
      });
  });
}
function createTouchButton(buttonClass, buttonDisplay, elementName) {
  var touchButton = document.createElement(elementName ?? 'button', true);
  touchButton.classList.add(buttonClass);
  touchButton.classList.add(buttonDisplay);
  touchButton.classList.add("mobileControl");
  touchButton.addEventListener("touchmove", function(e){e.preventDefault()}, false);
  touchButton.addEventListener("contextmenu", function(e){e.preventDefault()});
  return touchButton;
}








waitForElm('canvas').then(() => {insertCanvasElements()});
function insertCanvasElements() {    
  // Translates touchmove events to mousemove events when inGame, and touchmove events to wheele events when inMenu
  var canvas = document.querySelector('canvas');
  canvas.addEventListener("touchstart", function(e) {
      if(clientWindow.canvasTouchMode < 2) { // If a touch is initiated but not assigned
          if(clientWindow.canvasPrimaryID == null) {
              clientWindow.canvasTouchMode = 1;
              const primaryTouch = e.changedTouches[0];
              clientWindow.canvasPrimaryID = primaryTouch.identifier
              canvasTouchStartX = primaryTouch.clientX;
              canvasTouchStartY = primaryTouch.clientY;
              canvasTouchPreviousX = canvasTouchStartX
              canvasTouchPreviousY = canvasTouchStartY

              clientWindow.touchTimer = setTimeout(function(e) {
                  // If our touch is still set to initiaited, set it to secondary touch
                  if(clientWindow.canvasTouchMode == 1) {
                      clientWindow.canvasTouchMode = 3;
                      mouseEvent(2, "mousedown", canvas, primaryTouch)
                      if(clientWindow.fakelock) { // We only dispatch mouseup inGame because we want to be able to click + drag items in GUI's
                          mouseEvent(2, "mouseup", canvas, primaryTouch)
                      }
                  }
              }, 300);
          } else if(clientWindow.canvasTouchMode == 1 && !clientWindow.fakelock) { // If we already have a primary touch, it means we're using two fingers
              clientWindow.canvasTouchMode = 4;
              clearTimeout(clientWindow.crouchTimer); // TODO: Find out why this isn't redudnant
          }
      }
  }, false);

  canvas.addEventListener("touchmove", function(e) {
      e.preventDefault() // Prevents window zoom when using two fingers
      var primaryTouch;
      for (let touchIndex = 0; touchIndex < e.targetTouches.length; touchIndex++) { // Iterate through our touches to find a touch event matching the primary touch ID
          if(e.targetTouches[touchIndex].identifier == clientWindow.canvasPrimaryID) {
              primaryTouch = e.targetTouches[touchIndex];
              break;
          }
      }
      if(primaryTouch) {
          primaryTouch.distanceX = primaryTouch.clientX - canvasTouchStartX;
          primaryTouch.distanceY = primaryTouch.clientY - canvasTouchStartY;
          primaryTouch.squaredNorm = (primaryTouch.distanceX * primaryTouch.distanceX) + (primaryTouch.distanceY * primaryTouch.distanceY);
          primaryTouch.movementX = primaryTouch.clientX - canvasTouchPreviousX;
          primaryTouch.movementY = primaryTouch.clientY - canvasTouchPreviousY;
          if(clientWindow.canvasTouchMode == 1) { // If the primary touch is still only initiated
              if (primaryTouch.squaredNorm > 25) { // If our touch becomes a touch + drag
                  clearTimeout(clientWindow.crouchTimer);
                  clientWindow.canvasTouchMode = 2;
                  if(!clientWindow.fakelock) { // When we're inGame, we don't want to be placing blocks when we are moving the camera around
                      mouseEvent(1, "mousedown", canvas, primaryTouch);
                  }
              }
          } else { // If our touch is primary, secondary, scroll or finished
              if(clientWindow.canvasTouchMode == 4) { // If our touch is scrolling
                  wheelEvent(canvas, primaryTouch.movementY)
              } else {
                  canvas.dispatchEvent(new MouseEvent("mousemove", {
                      "clientX": primaryTouch.clientX,
                      "clientY": primaryTouch.clientY,
                      "screenX": primaryTouch.screenX,
                      "screenY": primaryTouch.screenY, // The top four are used for item position when in GUI's, the bottom two are for moving the camera inGame
                      "movementX": primaryTouch.movementX,
                      "movementY": primaryTouch.movementY
                  }));
              }
          }
          canvasTouchPreviousX = primaryTouch.clientX
          canvasTouchPreviousY = primaryTouch.clientY
      }
  }, false);

  function canvasTouchEnd(e) {
      for(let touchIndex = 0; touchIndex < e.changedTouches.length; touchIndex++) { // Iterate through changed touches to find primary touch
          if(e.changedTouches[touchIndex].identifier == clientWindow.canvasPrimaryID) {
              let primaryTouch = e.changedTouches[touchIndex]
              // When any of the controlling fingers go away, we want to wait until we aren't receiving any other touch events
              if(clientWindow.canvasTouchMode == 2) {
                  mouseEvent(1, "mouseup", canvas, primaryTouch)
              } else if (clientWindow.canvasTouchMode == 3) {
                  e.preventDefault(); // This prevents some mobile devices from dispatching a mousedown + mouseup event after a touch is ended
                  mouseEvent(2, "mouseup", canvas, primaryTouch)
              }
              clientWindow.canvasTouchMode = 5;
          }
      }
      if(e.targetTouches.length == 0) { // We want to wait until all fingers are off the canvas before we reset for the next cycle
          clientWindow.canvasTouchMode = 0;
          clientWindow.canvasPrimaryID = null;
      }
  }

  canvas.addEventListener("touchend", canvasTouchEnd, false); 
  canvas.addEventListener("touchcancel", canvasTouchEnd, false); // TODO: Find out why this is different than touchend
  setButtonVisibility(clientWindow.fakelock != null); //Updates our mobile controls when the canvas finally loads
  // All of the touch buttons

  let controllerIndex = null;

let jleftPressed = false;
let jrightPressed = false;
let jupPressed = false;
let jdownPressed = false;

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let bluePressed = false;
let yellowPressed = false;
let redPressed = false;
let greenPressed = false;

let pausePressed = false;
let selectPressed = false;
let lbPressed = false;
let rbPressed = false;
let ltPressed = false;
let rtPressed = false;
let ljsPressed = false;
let rjsPressed = false;

let perspective=false;
let debug=false;
let drop=false;
let chat=false;
let jump=false;
let inventory1=false;
let inventory2=false;
let lefthotbar=false;
let righthotbar=false;
let pause=false;
let players=false;

window.addEventListener("gamepadconnected", (event) => {
controllerIndex = event.gamepad.index;
console.log("Controller Connected!");
});

window.addEventListener("gamepaddisconnected", (event) => {
console.log("Controller Disconnected!");
controllerIndex = null;
});

function controllerInput() {
if (controllerIndex !== null) {
  const gamepad = navigator.getGamepads()[controllerIndex];

  const buttons = gamepad.buttons;

  const stickDeadZone = 0.4;
  const leftRightValue = gamepad.axes[0];

  if (leftRightValue >= stickDeadZone) {
    jrightPressed = true;
  } else if (leftRightValue <= stickDeadZone) {
    jrightPressed = false;
  } if (leftRightValue <= -stickDeadZone) {
    jleftPressed = true;
  } else if (leftRightValue >= -stickDeadZone) {
    jleftPressed = false;
  }

  const upDownValue = gamepad.axes[1];

  if (upDownValue >= stickDeadZone) {
    jdownPressed = true;
  } else if (upDownValue <= stickDeadZone) {
    jdownPressed = false;
  } if (upDownValue <= -stickDeadZone) {
    jupPressed = true;
  } else if (upDownValue >= -stickDeadZone) {
    jupPressed = false;
  }

  greenPressed = buttons[0].pressed;
  redPressed = buttons[1].pressed;
  bluePressed = buttons[2].pressed;
  yellowPressed = buttons[3].pressed;

  lbPressed = buttons[4].pressed
  rbPressed = buttons[5].pressed
  ltPressed = buttons[6].pressed
  rtPressed = buttons[7].pressed

  selectPressed = buttons[8].pressed
  pausePressed = buttons[9].pressed

  ljsPressed = buttons[10].pressed
  rjsPressed = buttons[11].pressed

  upPressed = buttons[12].pressed;
  downPressed = buttons[13].pressed;
  leftPressed = buttons[14].pressed;
  rightPressed = buttons[15].pressed;
}
}

function movePlayer() {
if (jupPressed) {console.log("W");keyEvent("w", "keydown");} 
else if (!jupPressed) {keyEvent("w", "keyup");}
if (jleftPressed) {console.log("A");keyEvent("a", "keydown");} 
else if (!jleftPressed) {keyEvent("a", "keyup");}
if (jdownPressed) {console.log("S");keyEvent("s", "keydown");} 
else if (!jdownPressed) {keyEvent("s", "keyup");}
if (jrightPressed) {console.log("D");keyEvent("d", "keydown");} 
else if (!jrightPressed) {keyEvent("d", "keyup");}

if (greenPressed && jump) {console.log("Spacebar");keyEvent(" ", "keydown");jump=false;}
else if (!greenPressed) {keyEvent(" ", "keyup");jump=true;}
if (redPressed) {console.log("Crouch1");keyEvent("shift", "keydown");}
else if (!redPressed) {keyEvent("shift", "keyup");}
if (bluePressed && inventory1) {console.log("Inventory1");keyEvent("e", "keydown");inventory1=false;}
else if (!bluePressed) {keyEvent("e", "keyup");inventory1=true;}
if (yellowPressed && inventory2) {console.log("Inventory2");keyEvent("e", "keydown");inventory2=false;}
else if (!yellowPressed) {keyEvent("e", "keyup");inventory2=true;}

if (lbPressed && lefthotbar) {console.log("Left1");wheelEvent(canvas, 10);lefthotbar=false;}
else if (!lbPressed) {lefthotbar=true;}
if (rbPressed && righthotbar) {console.log("Right1");wheelEvent(canvas, -10);righthotbar=false;}
else if (!rbPressed) {righthotbar=true;}
if (ltPressed) {console.log("Place");mouseEvent(2, "mousedown", canvas)}
else if (!ltPressed) {mouseEvent(2, "mouseup", canvas)}
if (rtPressed) {console.log("Break");mouseEvent(0, "mousedown", canvas)}
else if (!rtPressed) {mouseEvent(0, "mouseup", canvas)}

if (pausePressed && pause) {console.log("Pause");keyEvent("`", "keydown");pause=false;}
else if (!pausePressed) {keyEvent("`", "keyup");pause=true;}
if (selectPressed && players) {console.log("Tab");keyEvent("tab", "keydown");players=false;}
else if (!selectPressed) {keyEvent("Tab", "keyup");players=true;}
if (ljsPressed) {console.log("Sprint");keyEvent("r", "keydown");}
else if (!ljsPressed) {keyEvent("r", "keyup");}
if (rjsPressed) {console.log("Crouch2");keyEvent("shift", "keydown");}
else if (!rjsPressed) {keyEvent("shift", "keyup");}

if (upPressed && perspective) {console.log("Perspective");keyEvent("f5", "keydown");perspective=false;} 
else if (!upPressed && !perspective) {keyEvent("f5", "keyup");perspective=true;}
if (leftPressed && debug) {console.log("Debug");keyEvent("f3", "keydown");debug=false;} 
else if (!leftPressed) {keyEvent("f3", "keyup");debug=true;}
if (downPressed && drop) {console.log("Drop");keyEvent("q", "keydown");drop=false;} 
else if (!downPressed) {keyEvent("q", "keyup");drop=true;}
if (rightPressed && chat) {console.log("Chat");keyEvent("t", "keydown");chat=false;} 
else if (!rightPressed) {keyEvent("t", "keyup");chat=true;}  
}

function gameLoop() {
controllerInput();
movePlayer();
requestAnimationFrame(gameLoop);
}

gameLoop();
}
// CSS for touch screen buttons, along with fixing iOS's issues with 100vh ignoring the naviagtion bar, and actually disabling zoom because safari ignores user-scalable=no :(
let customStyle = document.createElement("style");
customStyle.textContent = `
  html, body, canvas {
      height: 100svh !important;
      height: -webkit-fill-available !important;
      touch-action: pan-x pan-y;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      outline: none;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
  .hide {
      display: none;
  }
  #fileUpload {
      position: absolute;
      left: 0;
      right: 100vw;
      top: 0; 
      bottom: 100vh;
      width: 100vw;
      height: 100vh;
      background-color:rgba(255,255,255,0.5);
  }
  `;
document.documentElement.appendChild(customStyle);