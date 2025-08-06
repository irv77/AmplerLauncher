(() => {
  var popupCenter = ({url, title, w, h}) => {
      var dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
      var dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;
  
      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  
      var systemZoom = width / window.screen.availWidth;
      var left = (width - w) / 2 / systemZoom + dualScreenLeft
      var top = (height - h) / 2 / systemZoom + dualScreenTop
      var newWindow = window.open(url, title, 
        `
        scrollbars=yes,
        width=${w / systemZoom}, 
        height=${h / systemZoom}, 
        top=${top}, 
        left=${left}
        `
      )
  
      return newWindow;
  }
  ModAPI.require("player");
  var w = 200;
  var h = 200;
  var newWin = popupCenter({url: '', title: '', w: 200, h: 100});
  var pass = "";

  if(!newWin || newWin.closed || typeof newWin.closed=='undefined') 
  { 
      pass = prompt("login (popup failed!)");
  } else {
    newWin.document.body.innerHTML="<center><form id='form'><input id='pass' type='password' autofocus/><br><br><input type='submit' value='Register'></form></center>";
    newWin.document.getElementById("form").onsubmit=function(){
        pass = newWin.document.getElementById("pass").value;
        newWin.close();
    };
  }
  
  function loginModFunc(e){
      if(e.key == 38){
        ModAPI.player.sendChatMessage({message:"/login "+pass})
      }
    };
    ModAPI.addEventListener("key",loginModFunc);
})();
