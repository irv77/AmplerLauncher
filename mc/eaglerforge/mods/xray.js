//Coalest xray mod to ever exist!

//IIFE. I like scoped variables.
(function () {
    var enabled = false
    ModAPI.addEventListener("key", function(ev){
        if(ev.key == 45){// the "x" key
          if(enabled){
                disable()
                enabled = false
          } else{
                update(); //Trigger the coal xray.
                enabled = true
          }
        }
    })
    var targets = ["diamond_block","diamond_ore","gold_block","gold_ore","iron_block","iron_ore","coal_block","coal_ore","emerald_ore","emerald_block","redstone_ore","redstone_block","lapis_ore","lapis_block","chest","furnace","lit_furnace","ender_chest"]; //The target blocks
    var allblocks = Object.keys(ModAPI.blocks); //List of all block IDsw
    function update() {
      ModAPI.displayToChat({msg: "xray Enabled!"})
      allblocks.forEach(block=>{ //Loop through all the blocks
        if (targets.includes(block)) { //If it is in the targets list, force it to render.
          ModAPI.blocks[block].forceRender = true;
          ModAPI.blocks[block].reload(); //Push the changes.
        } else if (ModAPI.blocks[block] && ("noRender" in ModAPI.blocks[block])) { //Otherwise, if it is a valid block, and can be set to not render, do so.
          ModAPI.blocks[block].noRender = true;
          ModAPI.blocks[block].reload(); //Push the changes.
        }
      });
      ModAPI.reloadchunks()
    }
    function disable(){
      ModAPI.displayToChat({msg: "xray Disabled!"})
              allblocks.forEach(block=>{ //Loop through all the blocks
 if (ModAPI.blocks[block] && ("noRender" in ModAPI.blocks[block])) { 
          ModAPI.blocks[block].noRender = false;
          ModAPI.blocks[block].reload(); //Push the changes.
        }
      });
    ModAPI.reloadchunks()
    }
  })();
