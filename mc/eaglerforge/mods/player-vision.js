let decoder = new TextDecoder();
let listPseudos;

let select = document.createElement('select');

select.addEventListener('mousedown', function (e) {
    if (Minecraft.$theWorld) {
        select.innerHTML = "";
        listPseudos = [];
        Minecraft.$theWorld.$playerEntities.$array1.data.forEach(element => {
            if (element) {
                listPseudos.push(decoder.decode(new Uint8Array(element.$getName().$characters.data)));
            }
        });
        listPseudos.forEach(element => {
            let option = document.createElement('option');
            option.innerText = element + ((listPseudos.indexOf(element) === 0)?" (you)":"");
            option.value = element;
            select.appendChild(option);
        });
        if (document.querySelector(`option[value="${Minecraft.$renderViewEntity.$getName()}"]`)) {
            document.querySelector(`option[value="${Minecraft.$renderViewEntity.$getName()}"]`).toggleAttribute('selected');
        }
    }
})

function keepLoadedPlayer() {
    if (profile !== Minecraft.$thePlayer) {
        Minecraft.$renderViewEntity = Minecraft.$thePlayer;
        setTimeout(function() {Minecraft.$renderViewEntity = profile;}, 0);
    }
}

select.addEventListener('change', function (e) {
    window.profile = Minecraft.$theWorld.$playerEntities.$array1.data.find(function (element) {
        if (element) {
            return element.$getName() == select.value;
        } else {
            return null;
        }
    });
    if (profile) {
        Minecraft.$renderViewEntity = profile;
        if (typeof(keepLoadedPlayerInterval) !== "undefined") {
            clearInterval(keepLoadedPlayerInterval);
        }
        if (profile === Minecraft.$thePlayer) {
            Minecraft.$gameSettings.$hideGUI = 0;
        } else {
            Minecraft.$gameSettings.$hideGUI = 1;
            window.keepLoadedPlayerInterval = setInterval(keepLoadedPlayer, 1000);
        }
    }
})

ModAPI.addEventListener("frame", () => {
    if (Minecraft.$theWorld && Minecraft.$theWorld.$playerEntities.$array1.data.length > 1) {
        select.style.display = "unset";
    } else {
        select.style.display = "none";
    }
})

select.style.position = "absolute";
select.style.top = "0px";
select.style.left = "0px";

document.body.appendChild(select);