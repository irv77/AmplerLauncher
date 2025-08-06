let recipes = {};

function displayMessage(msg) {
    let advancement = document.createElement('advancement');
    let message = document.createElement('message');

    if (msg === "success") {
        document.querySelector(':root').style.setProperty('--hue-rotate', "0deg");
        message.innerText = "Recipes imported successfully";
    } else if (msg === "error") {
        document.querySelector(':root').style.setProperty('--hue-rotate', "250deg");
        message.innerText = "Recipes not imported  The mod wont work";
    }

    advancement.appendChild(message);
    document.body.appendChild(advancement);
}

fetch("https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/1.8/recipes.json")
.then(response => response.json())
.then(json => recipes = json)
.then(() => addAllItems())
.then(() => displayMessage("success"))
.catch(() => displayMessage("error"));


function getRecipe(recipe, index) {
    let json = {};
    let craft = Object.values(recipe)[index];
    let grid = [];

    json.result = ModAPI.getItemById(craft.result.id);
    json.resultNumber = craft.result.count;
    json.grid = [];

    if (craft.inShape) {
        while (craft.inShape.length < 3) {
            craft.inShape.push([null, null, null]);
        }
        craft.inShape.forEach(craftLine => {
            while (craftLine.length < 3) {
                craftLine.push(null);
            }
        });
        grid = [].concat(craft.inShape[0], craft.inShape[1], craft.inShape[2]);
    } else if (craft.outShape) {
        grid = [].concat(craft.outShape[0], craft.outShape[1], craft.outShape[2]);
    }

    grid.forEach(item => {
        if (item) {
            if (item.id) {
                fixedItem = item.id;
            } else {
                fixedItem = item;
            }
            json.grid.push(ModAPI.getItemById(fixedItem));
        } else {
            json.grid.push(null);
        }
    });

    return json;
}

function getRecipesForId(id) {
    return recipes[id];
}

ModAPI.getItemById = function (id) {
    return Object.keys(ModAPI.items)[Object.values(ModAPI.items).indexOf(Object.values(ModAPI.items).find(function (item) {
        if (item) {
            if(item.getID() == id) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }))];
}

ModAPI.getIdforItem = function (item) {
    if (ModAPI.items[item]) {
        return ModAPI.items[item].getID()
    }
}

function craft(result, index) {
    if (!recipes[ModAPI.getIdforItem(result)]) {
        return false;
    }
    let craft = getRecipe(getRecipesForId(ModAPI.getIdforItem(result)), index);
    let matrixGrid = [];
    let resultItem;

    craft.grid.forEach(item => {
        if (item) {
            matrixGrid.push(ModAPI.reflect.classes[0].constructors[4].exec({itemIn: ModAPI.items[item].getRef(), amount: 1}));
        } else {
            matrixGrid.push(null);
        }
    });

    resultItem = ModAPI.reflect.classes[0].constructors[4].exec({itemIn: ModAPI.items[craft.result].getRef(), amount: craft.resultNumber})

    if (matrixGrid.length == 9) {
        Minecraft.$currentScreen.$inventorySlots0.$craftMatrix1.$stackList.data = matrixGrid;
        Minecraft.$currentScreen.$inventorySlots0.$craftResult0.$stackResult.data[0] = resultItem;
    }

    return true;
}

function currentScreenName() {
    return String(Minecraft.$currentScreen).substring(String(Minecraft.$currentScreen).lastIndexOf(".") + 1, String(Minecraft.$currentScreen).lastIndexOf("@"));
}

// GUI

let button = document.createElement('button');
button.setAttribute('id', 'recipesButton')

document.body.appendChild(button);

button.style.position = "absolute";
button.style.display = "none";
button.style.top = "0px";
button.style.left = "0px";
button.style.width = "40px";
button.style.height = "36px";
button.style.transformOrigin = "top left";
button.style.border = "0px";
button.style.backgroundSize = "100% 100%";

function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.body.append(style);
}

let recipeGui = document.createElement('div');
recipeGui.setAttribute('id', 'recipeGui');
recipeGui.style.position = "absolute";
recipeGui.style.backgroundColor = "#c6c6c6";

let textInput = document.createElement('div');
textInput.setAttribute('id', 'textInput');

let itemList = document.createElement('div');
itemList.setAttribute('id', 'itemList');

function addItem(url, id) {
    let item = document.createElement('item');
    let name = String(id).replaceAll('_', ' ');
    item.setAttribute('class', 'item');
    item.setAttribute('itemName', name);
    item.style.background = `url('${url}'), url('https://raw.githubusercontent.com/kuronekony4n/mcicons/main/assets/itemBg.png')`;
    item.style.backgroundSize = "75% 75%, cover";
    item.style.backgroundPosition = "center";
    item.style.backgroundRepeat = "no-repeat";
    itemList.appendChild(item);
    item.onclick = function() {
        craft(id, 0);
    }
}

recipeGui.appendChild(textInput);
recipeGui.appendChild(itemList);
document.body.appendChild(recipeGui);

window.searchFieldValue = "";
window.recipeGui = false;
window.cursor = "";

const exceptions = {
    planks: "oak_planks",
    noteblock: "note_block",
    golden_rail: "powered_rail",
    wool: "white_wool",
    brick_block: "bricks",
    snow_layer: "snow",
    snow: "snow_block",
    fence: "oak_fence",
    lit_pumpkin: "jack_o_lantern",
    stained_glass: "white_stained_glass",
    trapdoor: "oak_trapdoor",
    stonebrick: "stone_bricks",
    melon_block: "melon",
    fence_gate: "oak_fence_gate",
    stained_hardened_clay: "white_terracotta",
    stained_glass_pane: "white_stained_glass_pane",
    slime: "slime_block",
    carpet: "white_carpet",
    stone_slab2:"red_sandstone_slab",
    sign: "oak_sign",
    boat: "oak_boat",
    bed: "red_bed",
    speckled_melon: "glistering_melon_slice",
    netherbrick: "nether_bricks",
    banner: "white_banner",
    wooden_pressure_plate: "oak_pressure_plate",
    wooden_slab: "oak_slab",
    wooden_button: "oak_button",
    wooden_door: "oak_door",
    dye: "white_dye",
    fireworks: "firework_rocket",
    firework_charge: "firework_star",
}

button.onclick = function () {
    window.recipeGui = !window.recipeGui;
    if (window.recipeGui) {
        window.intervalCursor = setInterval(() => {
            window.cursor = "_";
            textInput.innerText = window.searchFieldValue + window.cursor;
            let timeout = setTimeout(() => {
                window.cursor = "";
                textInput.innerText = window.searchFieldValue + window.cursor;
            }, 1000);
        }, 2000);
    } else {
        clearTimeout(intervalCursor);
    }
}

function addAllItems() {
    Object.keys(recipes).forEach(item => {
        let name = ModAPI.getItemById(item);
        let url = "";
        if (exceptions[name]) {
            url = `https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.8.8/assets/minecraft/textures/items/${exceptions[name]}.png`;
        } else {
            if (name != undefined) {
                url = `https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.8.8/assets/minecraft/textures/items/${name}.png`;
            } else {
                url = `https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b5/Missing_Texture_JE4.png`;
            }
        }
        addItem(url, name);
    });
}


addStyle(`
    #recipesButton {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA2CAYAAACbZ/oUAAACkklEQVRoQ+2aPUsDQRCGjY2tnREhWNikEBFsFEEsrBSCAbFQEMHGykos/AJjCslfSBOwESGQTrAI12g6EYtAmkgaGwv/QYywjK8y4+3qhdzGSbW7N7e3775PhrmPxID8a/9wzIdDCW6R7KAJVME+2AprtHKYXG23/TY4kfiilzrfd0EFe4YxLfcnh1lXa7VaV7VmFmZD568E96ExUkChUKBD5XL5cyM6LRX8sR3q8C/hktCduliiGYfHh6n99vxG7ceDW2q74t0zpFWw8cx7hyUnF67W2D9DvVKn8XQmzcb8Be+uI62CjWfeO+zqJGKJ3D5cPlA3OZmk9ujUKJu98dxg/To0e0eGtAoOQdcbh0eG+GcD+J9EMVg8SDWKJB7PxeyN80iZXMLbGWkVzKDbtw5P7M8RXWMzY2zdi/hJtbGEPW7cy+OLU0GC2X7w6ZXOnV/Jut0eItIq2OydTRKywT7WDiO6iDeOV8+r1F08Wgytk21QR3RxwtJZibrbq8vRI62CGf/6yuHDuUOSmL/Ls7gi6ih+enM6tE7GeJw8t5OjbiqVonar1aL26d5u9EirYMbjvnK4uFEkic1mk8VbKk4wG0voYtZFXCWMj4vHtIauFB4q2OwvJjAvHcYH8XjTj2WmjduNmwabySV0MRgx3jrZYudBjDHAuZZWwWb7/oXDiIor3iyHnUEpA7uiK72CcX7iIb1MU8HGQimBee+wK95BELCasWDAACnrxuLtoQ3eKtjY6aXDNnhLhUdU6Eo5IrIsLV1AwlsFmx3z3mEJb4kI16wrzdMzpFVwiCW9dBiXRh+pZbOfrypccYpDPH5911lP+MelKjgOtjmswdZhFm+H68Qp1OoDcRUcJ8sc18I6/A6Toag65vT7bwAAAABJRU5ErkJggg==');
        outline: none;
    }

    #recipesButton:hover {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA2CAYAAACbZ/oUAAACoElEQVRoQ+2aL0hDURTGnUWjzY3BMFgMIsJAWXAYTAYxiEFhCBaTIA7DnILTIIjFuiJYxBWbYJAZhIkgYhAskxWLYVHTFHmcfYNzePfq2+adZ+m+++6/736/dzhv74a6pF/PRE2858KNj+sQt0y28ruhCnbBVlijkcPgau296JjCxuWGepP1ChDfiLQKdtdk2WHB1f2j26aqPVwf8x1/7aDk20ZqUCgU6NZdqT5OCKMxPrcq+Md7zXfsWIclYSP7U7QTfQN9VK6+VKn8sHFJZVu824a0CvY8c95hycnk6Rz7ED+dP1H90MwQ2+Y3eDcdaRXseea8w7ZOIpbI7f3JPV2Gh8NUjoxE2OiNfYvzZ77ROzCkVbAPus443N/D/zeAzySKweRBSsok8dgXozeOI0VyCW9rpFUwg27HOjyYThBd0XiUzXsRPyk3lrDHjXt9eLVKSDDadz++Ud/YeNru9RCRVsHe3pkEIRPs/7TDiC7ijfVXu1d0Obk56Zsnm6CO6OKAxzvHdLk0Ox080iqY8a+jHM4kMiRx72aPxRVRR/Gji6O+eTK2x8Fzy7k6rrEYlSuVCpW3V1eCR1oFMx53lMP5hTxJLJfLLN5ScoLRWEIXoy7iGhMwzuaztIamJB4q2NtfDGBOOoxfHvClH9NME7efL57ZSC6hi40R49RWih0HMW7oa5tLq2Bv+/6Fw4iKLd4sh1+VUgS2RVf6BGP9j4f09VAFexZKAcx5h23xLhb5syKYMOCYUtT9E18PTfBWwZ6dTjpsgreUeASFrhQjAovS0gQS3irY2zHnHZbwloiwjbrSOG1DWgX7WNI+h3FhcCovPuZ/Us4Ws1a2x9N3XSaHS1VwK+0JYC4zhwW8A5i/9UMYHRBXwa03JrAZBYc/AS53y4zphYZNAAAAAElFTkSuQmCC');
    }

    #textInput {
        width: 88%;
        margin-left: 4%;
        padding-left: 2%;
        border: 1px solid #111;
        border-radius: 0px;
        font-family: Minecraftia;
        display: flex;
        align-items: center;
        background-color: #8b8b8b;
        color: white;
        text-shadow: 3px 3px 0px rgb(55 55 55 / 75%);
        border-image-slice: 14 14 14 14;
        border-image-outset: 0px 0px 0px 0px;
        border-image-repeat: stretch stretch;
        border-image-source: url("data:image/png;base64,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");
        border-style: solid;
        user-select: none;
        pointer-events: all;
    }

    #itemList {
        width: 95%;
        margin-left: 4%;
        overflow-y: auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        pointer-events: all;
    }

    item.item {
        height: var(--itemSize);
        width: var(--itemSize);
        display: block;
    }
        
    #recipeGui {
        pointer-events: none;
    }

    #itemList::-webkit-scrollbar {
        width: var(--sb-size);
    }
    
    #itemList::-webkit-scrollbar-thumb {
        background: #adadad;
        border-radius: 0px;
        border-right: calc(var(--sb-size) / 6) solid #808080;
        border-bottom: calc(var(--sb-size) / 6) solid #808080;
    }
    
    #itemList::-webkit-scrollbar-track {
        background: #e4e4e4;
        border-radius: 0px;
    }
    
    @supports not selector(::-webkit-scrollbar) {
        #itemList {
            scrollbar-color: #e4e4e4 #c0c0c0;
        }
    }
    `
    );

ModAPI.addEventListener("update", () => {
    if (currentScreenName() === "GuiCrafting") {
        button.style.display = "block";
        window.ScaledResolution = innerHeight/ModAPI.mcinstance.$displayHeight*ModAPI.ScaledResolution.getScaleFactor();
        button.style.scale = ModAPI.ScaledResolution.getScaleFactor()/2;
        button.style.top = ScaledResolution * (Minecraft.$currentScreen.$guiTop + 35) + "px";
        button.style.left = ScaledResolution * (Minecraft.$currentScreen.$guiLeft + 6) + "px";
    } else {
        button.style.display = "none";
        window.recipeGui = false;
    }
})

ModAPI.addEventListener("update", () => {
    if (window.recipeGui) {
        recipeGui.style.display = "block";
        recipeGui.style.left = ScaledResolution * (Minecraft.$currentScreen.$guiLeft + 3) + "px";
        recipeGui.style.top = ScaledResolution * (Minecraft.$currentScreen.$guiTop + 72) + "px";
        recipeGui.style.width = ScaledResolution * (Minecraft.$currentScreen.$xSize - 6) + "px";
        recipeGui.style.height = ScaledResolution * (Minecraft.$currentScreen.$ySize - 75) + "px";

        textInput.style.height = ScaledResolution * 12 + "px";
        textInput.style.marginTop = ScaledResolution * 5 + "px";
        textInput.style.borderWidth = ModAPI.ScaledResolution.getScaleFactor() + "px";
        textInput.style.fontSize = ModAPI.ScaledResolution.getScaleFactor()/2.5 + "rem";
        textInput.style.paddingBottom = ModAPI.ScaledResolution.getScaleFactor() + "px";
        textInput.style.textShadow = `${ModAPI.ScaledResolution.getScaleFactor()}px ${ModAPI.ScaledResolution.getScaleFactor()}px 0px rgb(55 55 55 / 75%)`;

        itemList.style.height = `calc(100% - ${ScaledResolution * 22}px)`;
        itemList.style.marginTop = ScaledResolution * 2 + "px";

        document.querySelector(':root').style.setProperty('--itemSize', (ModAPI.ScaledResolution.getScaleFactor() * 17.25) + "px");
        document.querySelector(':root').style.setProperty('--sb-size', (ModAPI.ScaledResolution.getScaleFactor() * 5) + "px");
    } else {
        recipeGui.style.display = "none";
    }
})

document.addEventListener('keydown', function(event) {
    if (window.recipeGui && event.key.length == 1 && window.searchFieldValue.length < 30) {
        window.searchFieldValue = window.searchFieldValue + event.key;
    } else if (window.recipeGui && event.key == "Backspace") {
        window.searchFieldValue = window.searchFieldValue.slice(0,-1);
    } else if (window.recipeGui && event.key == "Space") {
        window.searchFieldValue = window.searchFieldValue + " ";
    }
    if (window.recipeGui) {
        textInput.innerText = window.searchFieldValue + window.cursor;
        event.stopPropagation();
        Array.from(document.getElementsByClassName('item')).forEach(itemElement => {
            if (window.searchFieldValue.length > 0) {
                if (itemElement.getAttribute("itemName").includes(window.searchFieldValue)) {
                    itemElement.style.display = "block";
                } else {
                    itemElement.style.display = "none";
                }
            } else {
                itemElement.style.display = "block";
            }
        });
    }
});

ModAPI.addEventListener("frame", () => {
    document.querySelector(':root').style.setProperty('--scale', "scale("+ ModAPI.ScaledResolution.getScaleFactor()/3 +")");
})

/* Load recipes message css */
addStyle(`
    :root {
    --hue-rotate: 0deg;
}
advancement {
    border-image-slice: 27 27 27 27 fill;
    border-image-width: 20px 20px 20px 20px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: stretch stretch;
    border-image-source: url("data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAACQCAYAAAAhkFzZAAAABHNCSVQICAgIfAhkiAAAC4xJREFUeJzt3ctuXFW6wPFv7Vu5EoR6gEBCAgkFCZAQEqd5gDwAb9MPQHerdUbnXZhwnoIBEjBhwCiRGBDELTjUvq0elHfFdhzs5Rt2+P0kC7tStWtXYpK/lr9aO8Xp6ojYpJTqM9y3WM75Kg4LAADP00dEFxH/ioh/Hnzen/XB1dWcEwAAvJiaE26rD27PETFHRHutZwQAANdjmbDoDt126kr08YCuI2I6+FiMsY1pAAB4ESxt+9PBfx+XPPhwQC/xfD8iPj44YF1VVfXuu+9WVVXFNE2RUrrg+R512ccDAIBTNKvVKh48ePDxDz/8EBHxt4iY5nmeI+I/sZ3CeP6Dj30+xTae/7Hc2LZtvP/++/Hyyy/HL7/8Ek1z0tTH+QloAACuWX337t0p53z/0aNH95cbU0qRc/7fKAjok5ayu77vY39/vxuHMSIipunwdMfFCWgAAK7TMAwxTVP95MmTKaU05pxTbDfXGOIMo8uHA3op7cPD1F1ExHq9jqqqomma6Psz7/BxJgIaAIDr1HVddF0XdV3X8bR9IyJSnLL6HLEN6OVBbWzfMFjVdb1bab57927knKNpmvj999+jqi535zv7QAMAcJ1SSjGOY1RVFSml44vEbWxXoqt4GtRHojrFNpoX+b333qs++OCDarPZRNd1MQ5j1M22sbuuu/QVaAAAuG5t28b+/v6ud5u2iXEY47P//2wahiFiu53dOuf8SUT8Ow5dbKU5foXBpml2bxTcrmpvV4mrqhLPAADcekvXVmk7opxzjpxztF0bwzAcns6Iqqqq7eYchx5//IDLVnXzPMdms4mmaSKlFJvNJtq2jZTSkY/F8a8BAOAmmud5+/6+tonHj7dbQK9Wq5jn+fCOc897f2B36p50B0vY0bZtDMPw3Ehe4vp4oQMAwE2w2Wyiqqoj78FbwnkYhthsNrvezTnng7Z95mIrl7Kpc0opvvnmm91JAADATTGOY6zX63jllVci4tld4JYNNNq2jQ8//DAeP34cdV03e3t78cMPP3z84MGDiIOLrURcQkBXVRXzPMf3339/6XtEAwDAReWcY71ex2uvvRZ1Xe8mLBZLz1ZVFe+88060bRs557qqqunrr7++//Dhw/uH73/hgE4pxTROsV6vY7PZXPRwAABwqeq6jr7vY+iHmOrpmRXoaZqi67rY39+PnPNui7u9vb368ePHU2x3rds9qHhT52W4epl1HscxqrqKJ0+emH8GAODGyTnvojmlFKvVKnLOu1XnnHMMwxBt2+4uHrho27aOiFUcehNhcUBXVRXDMMQwDNs9og+Kvm1bIxwAANw44zhur2cy9JFSiv3f9mOetgu/8zyfuMPcHyke4ei6Lr799tt4+PBh7O3txWaz2e2+0bZt6eEAAODKpJSirusYxzG++uqrmOc51ut1DMMQr776aty7dy/GcXtdwWV3jmVf6OXjuOKATintNp9eLrqyDF4vK9CXfblvAAA4jyWAl7GMvu9jf39/16vTNJ0YyX+kOKD7vo+qqnb7PkfEbva5ruviEwAAgKuUUtot9C5X2p7nObquO9eFAC0VAwBAAQHNX8QcT6/IeQa52n4AABxzKVcihJuvMIaTLRkhIiLywY82020bzzt8vif9eDY/53aA0wloAJ7v1oXz4rQ4Fs/A+fkZNQAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAECBC+8DnfNt3SMUAIC/gsvuVSvQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAUENAAAFBDQAABQQEADAEABAQ0AAAWaP/sE4DKllI58nXP+k87k/A6/hsPnn3N+5vVd1nPdlt+ni77+017n8359ub2qTl9zmOd5d795nv/wvsePd/z+pz3fRb/fS58PgC0BzR8q/Qe6NBiuW+nruWigXGbwXkVAL54X0qc9320J77O6jNfzZ3+PA3D1/E0Pt4QwA4Cbwb/IAABQwAgHRU77kf5NWyU97XxLRyKuaoTivM932SMU1/37cd0jINf9/Vt6vIs+f+mfx037/xXgtvC3JwAAFBDQAABQQEADAECB4hnolFJsNpvIOccwDFFVVeSco23bU7cw48V33TPCcJn+at+/t22GHeC8jm/X2rZt/PrrrzFN07mOV7wCvTxxXdext7cXERFd10Xf91HX9blOAgAArlJKabfY2/d93L17d9eypYpXoMdxjLfeeiveeOONGMcx2raNzWYTX3755blOAAAArlLOOaZpir//z98jIqKqt2vIdV1Hv+mjbsoWgYsDOs85cs5R13XUdR0557hz505ExLmXwQEA4CpVVRVznqNK1ZERtrqpi6/220REf+jrPM9zU1VVHbEN4qZp4rfffouXXnoppmnaPcmi7/voui6aptnVfemL4eYy4/hiu21/vrftfAG4GeZ5jqqqtou/cz5ye0T5e0KaiOgO39C2bdR1Pa1Wq3q9Xsc4jrFer2MYhmjb9plAzjnHPM/R9/3u5Er4BxEAgKvU9300TRNN00RK6cJTE01K6V8Hn9fzPP/06NGjj7/44ov7wzBM0zTVd+7cibfffjuapolxHJ8p9PV6HXVdx5tvvhnjOBYH9F/tXe8AAFy/eZ5jmqaYp7l45vm4Zp7nfx6+4bvvvotHjx7dn6ZpbJqmXt40WNf1iU+4nMzrr78eXdcZ4QAA4Eap6zr6vo9pmqLtLr718uERji4iHldV9bdxHCMi0uGxjaZpou3aOPi1I+GbUoqUUvT9dpy6ZCzDCjQAAFfpcL+e9IbBlFIM/RBVXUXXdbvrnqxWqxO79vibCCMiliXkannCZWW5qo6+a1H8AgBw2202m6hStRtZjtg28GazOXFa4plb5qdr2kNETCmlaYnnzWazO+iyFA4AALdZ0zTRrZ7uqzHP8+6q23t7e3NEjLFdZJ4iYjppCbk6+MgRMUdEW9f1fs65rus6Ukpx7969+Oijj2IYhiMzJMsStxEOAABuitN68/DK86effhrjOEbOua/rupum6d8R8UlErONgcuOkC6nMBx+LYYnkg4NFVW2XuH/++edYrVa7O54noAEA4M+0BPY8z7vejdhdJPDIdEbE2a5EWMW2ttuDA+TY7t5Rd133hw8EAICbbhlTzjlHznmZUe5ju8nGkfcHRpwtoFNsl6y3X6QUbdvGarWaxnGsm+bpIYxwAABw05zWm23bxmaziWEY4mBsI+LpTnV/Ww6z3P8sAT3nnD+ptm9BrCPipx9//PHjzz///P44jtM8z7uNoQU0AAA3zWm92fd91HUde3t78zRN/4nt1MUU23j+7OBu4+545zyPf6SU/i8iNhGxOu3OAABwC4w55/aE2+t4OspxphXoiBMutnKwymz5GACAF8UyujzEduY5xdMt7HbOGtDPu9gKAAC8SPo4pXWfvbQKAADwXP8FT13puhEpb+wAAAAASUVORK5CYII=");
    border-style: solid;
    padding: 10px;
    color: #fff;
    font-family: 'Minecraftia';
    position: absolute;
    top: -1px;
    right: 0px;
    height: 72px;
    width: 455px;
    image-rendering: pixelated;
    transform-origin: top right;
    font-size: 1.5em;
    user-select: none;
    z-index: 10000;
    transform-origin: top right;
}

advancement {
    -webkit-animation-name: slideInDown, slideOutUp;
    animation-name: slideInDown, slideOutUp;
    -webkit-animation-duration: .5s, .5s;
    animation-duration: .5s, .5s;
    -webkit-animation-delay: 0s, 5s;
    animation-delay: 0s, 5s;
    -webkit-animation-fill-mode: both, forwards;
    animation-fill-mode: both, forwards;
}
@-webkit-keyframes slideInDown {
    0% {
        -webkit-transform: translateY(-100%) var(--scale);
        transform: translateY(-100%) var(--scale);
        visibility: visible;
    }
    100% {
        -webkit-transform: translateY(0) var(--scale);
        transform: translateY(0);
    }
}
@keyframes slideInDown {
    0% {
        -webkit-transform: translateY(-100%) var(--scale);
        transform: translateY(-100%) var(--scale);
        visibility: visible;
    }
    100% {
        -webkit-transform: translateY(0) var(--scale);
        transform: translateY(0) var(--scale);
    }
}

  @-webkit-keyframes slideOutUp {
  0% {
  -webkit-transform: translateY(0) var(--scale);
  transform: translateY(0) var(--scale);
  }
  100% {
  visibility: hidden;
  -webkit-transform: translateY(-100%) var(--scale);
  transform: translateY(-100%) var(--scale);
  }
  }
  @keyframes slideOutUp {
  0% {
  -webkit-transform: translateY(0) var(--scale);
  transform: translateY(0) var(--scale);
  }
  100% {
  visibility: hidden;
  -webkit-transform: translateY(-100%) var(--scale);
  transform: translateY(-100%) var(--scale);
  }
}

advancement:before {
    content: '';
    position: absolute;
    width: 70px;
    height: 70px;
    background-image: url('data:;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAKlBMVEUAAABHjkdWrVYbNhswYDCWlpYhFAUVDgU9ej1UVFQcDwC0tLTV1dUMBQA2AfQBAAAAAXRSTlMAQObYZgAAAQhJREFUeF7t17tqBTEMQMHs7n3k+f+/m05qhGJwiiuYUwpjTyf89lpJkvTZBggICAgI+BfmiM4oZ0mdDwQEBAQE3MecRbcoZz11KhAQEBAQcB9zFF1RUpNVoZM6EQgICAgI+IgqTH91T63WX9ZTJwIBAQEBAd+j/uGK1aN7VrUmf6KJQEBAQEDAippdUc9axWRf0Uc0EQgICAgImAd7dFJ7VoW5R8nK2RwgICAgIOAzSsJ3VFH7tdavsJ5VfZpeHQgICAgImOVwlbqKqViJqVgDgYCAgICA69S2/8bMAwICAgICrlPvRTuYWUBAQEBAwH3qDmY+EBAQEBBwn7qMAQQEBAQErJMk6RenVGZExR2o4AAAAABJRU5ErkJggg==');
    background-position: center center;
    background-size: cover;
    left: 20px;
    filter: hue-rotate(var(--hue-rotate));
}

message {
    margin-left: 100px;
    display: block;
    margin-top: -2px;
}
`)