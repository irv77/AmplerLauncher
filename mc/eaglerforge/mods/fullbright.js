ModAPI.require("settings");
var gamma = 1000
var toggled = true
ModAPI.settings.gammaSetting = gamma
ModAPI.settings.reload()
ModAPI.addEventListener("key", function(ev){
    if(ev.key == 33){
        if(!toggled){
            ModAPI.settings.gammaSetting = gamma
            ModAPI.settings.reload()
            ModAPI.displayToChat({msg: "fullbright enabled!"})
            toggled = true
        } else{
            ModAPI.settings.gammaSetting = 1
            ModAPI.settings.reload()
            ModAPI.displayToChat({msg: "fullbright disabled!"})
            toggled = false
        }
    }
        
})