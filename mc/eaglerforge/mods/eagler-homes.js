ModAPI.require("player");
ModAPI.addEventListener("sendchatmessage", function (event) {
    if(event.message === "{sethome}"){
        localStorage.setItem("HomePosX", Math.round(ModAPI.player.x));
        localStorage.setItem("HomePosY", Math.round(ModAPI.player.y));
        localStorage.setItem("HomePosZ", Math.round(ModAPI.player.z));
        if (Boolean((Math.round(ModAPI.player.x) == localStorage.getItem("HomePosX"))) && Boolean((Math.round(ModAPI.player.y) == localStorage.getItem("HomePosY"))) && Boolean((Math.round(ModAPI.player.z) == localStorage.getItem("HomePosZ")))){
            ModAPI.displayToChat({msg: "Home Set!"});
        }else{
            ModAPI.displayToChat({msg: "Failed to Set Home!"});
        }
    }else if(event.message === "{home}"){
        ModAPI.player.sendChatMessage({message: "/tp " + localStorage.getItem("HomePosX") + " " + localStorage.getItem("HomePosY") + " " + localStorage.getItem("HomePosZ")});
    }else if(event.message === "/help"){
        ModAPI.displayToChat({msg: "{EGHomesHelp}"});
    }else if(event.message === "{EGHomesHelp}"){
        ModAPI.displayToChat({msg: "{sethome}"});
        ModAPI.displayToChat({msg: "{home}"});
    }
});
