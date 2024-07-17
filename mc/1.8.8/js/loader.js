"use strict";
(function(){
	function checkNotMobileBrowser() {
		try {
			document.exitPointerLock();
			return !(/Mobi/i.test(window.navigator.userAgent));
		}catch(e) {
			return false;
		}
	}

	var q = window.location.search;
	if(typeof q === "string" && q.startsWith("?")) {
		q = new URLSearchParams(q);
		var s = q.get("userscript");
		if(s) {
			if(["flameddogo99-eaglermobile.js", "irv77-eaglercraft-mobile.js", "irv77-eaglerconsole.js"].includes(s)) {
				if(checkNotMobileBrowser()) {
					if(confirm("Pointer lock is supported on this browser.\n\nWould you like to disable Touch/Controller Mode?")) {
						q.delete("userscript");
						window.location.href = window.location.origin + window.location.pathname + (q.size > 0 ? ("?" + q.toString()) : "") + window.location.hash;
						return;
					}
				}
				alert("WARNING: These userscripts are 3rd-party creations and might crash your game!");
				var scriptElement = document.createElement("script");
				scriptElement.type = "text/javascript";
				scriptElement.src = "js/userscript/" + s;
				document.head.appendChild(scriptElement);
			}
		}
	}
})();
