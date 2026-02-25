// Not Added Feature
function errorNA(text) {
    clearTimeout()
    document.getElementById('errortext').innerHTML = "The " + text + " feature hasn't been made yet."
    document.getElementById('naerror').style.display = 'block';
    setTimeout(function(){
        document.getElementById('naerror').classList.add('zoom-out');
    }, 3000);
    setTimeout(function(){
        document.getElementById('naerror').classList.remove('zoom-out');
        document.getElementById('naerror').style.display = 'none';
        document.getElementById('errortext').innerHTML = "This feature hasn't been made yet."
    }, 3200);
}

// Last Played Game Option
let selectedGame1 = localStorage.getItem("basegame");
let selectedGame2 = localStorage.getItem("moddedgame");
let selectedGame3 = localStorage.getItem("assisted");
let modslauncher
if (localStorage.getItem("modslauncher")) {modslauncher = JSON.parse(localStorage.getItem("modslauncher"))};
if (!localStorage.getItem("launcherpresets")) {
    localStorage.setItem("customlaunchers", "[]");
    localStorage.setItem("customlaunchersnumber", 0);
    localStorage.setItem("launcherpresets", true);
    localStorage.setItem("launchnewtab", false);
};
let customlaunchersnumber = localStorage.getItem("customlaunchersnumber").padStart(2, "0");
if (customlaunchersnumber > 99) {
    console.log("%cWell.. You found an easter egg. You broke the launcher. Sure I can easily fix it. But this is a rare bug. Report if you found this bug, then I will. -IRV77", "color: red; font-weight: bold; background-color: rgba(0,0,0,0.5); padding: 1vw;");
};

function generateprofile(game) {
    let selectedGame = "";
    let running = false;
    if (!selectedGame1) {
        fetch("./assets/json/base.json").then((response) => response.json()).then((data) => {
            selectedGame1 = JSON.stringify(data[0]); localStorage.setItem("basegame", selectedGame1);
        });
    };
    if (game === 1 && selectedGame1) {selectedGame = JSON.parse(selectedGame1);  running = true;}; 
    if (!selectedGame2) {
        fetch("./assets/json/modded.json").then((response) => response.json()).then((data) => {
            selectedGame2 = JSON.stringify(data[0]); localStorage.setItem("moddedgame", selectedGame2);
        });
    };
    if (game === 2 && selectedGame2) {selectedGame = JSON.parse(selectedGame2);  running = true;}; 
    if (!selectedGame3) {
        fetch("./assets/json/assisted.json").then((response) => response.json()).then((data) => {
            selectedGame3 = JSON.stringify(data[0]); localStorage.setItem("assisted", selectedGame3);
        });
    };
    if (game === 3 && selectedGame3) {selectedGame = JSON.parse(selectedGame3);  running = true;}; 
    if (running === true) {
    document.getElementById('gametitle').innerHTML = selectedGame.title;
    if (selectedGame.custom) {document.getElementById('gametitle').innerHTML = selectedGame.title.slice(4)};
    document.getElementById('gameversion').innerHTML = selectedGame.version;
    document.getElementById('gameicon').src = selectedGame.icon;
    document.getElementById('playbutton').href = selectedGame.link;
    }
    if (!modslauncher) {
        localStorage.setItem("modslauncher", "");
        modslauncher = [];
    }
};

// Generate Game Options
const dropdown = document.getElementById("dropdn");
let margincount = 0;
function generategames(path) {
    margincount = 0;
    if (localStorage.getItem("customlaunchers")) {
        let gamepath;
        if (path === "./assets/json/base.json") {gamepath = "basegame"};
        if (path === "./assets/json/modded.json") {gamepath = "moddedgame"};
        if (path === "./assets/json/assisted.json") {gamepath = "assisted"};

        JSON.parse(localStorage.getItem("customlaunchers")).forEach((launcher) => {
            let game = JSON.parse(localStorage.getItem("c" + launcher));
            if (game.custom != gamepath) {return};
            generatelauncheroptions(path, game, "");
        });
    };
    fetch(path).then((response) => response.json()).then((data) => {
        let gamepath;
        if (path === "./assets/json/base.json") {
            if (!localStorage.getItem("basegame")) {localStorage.setItem("basegame", JSON.stringify(data[0]))};
            gamepath = JSON.parse(localStorage.getItem("basegame"));
        };
        if (path === "./assets/json/modded.json") {
            if (!localStorage.getItem("moddedgame")) {localStorage.setItem("moddedgame", JSON.stringify(data[0]))};
            gamepath = JSON.parse(localStorage.getItem("moddedgame"));
        };
        if (path === "./assets/json/assisted.json") {
            if (!localStorage.getItem("assisted")) {localStorage.setItem("assisted", JSON.stringify(data[0]))};
            gamepath = JSON.parse(localStorage.getItem("assisted"));
        };
        data.reverse()
        data.forEach((game) => {
            generatelauncheroptions(path, game, gamepath);
        });
    });
};

function generatelauncheroptions(path, game, gamepath) {
        if (localStorage.getItem("launcherpresets") === "false" && !game.custom) {localStorage.setItem(game.title, false); if (game.title === gamepath.title) {localStorage.setItem(game.title, true)}};
        if (!localStorage.getItem(game.title) && game.active === false) {localStorage.setItem(game.title, game.active); return};
        if (localStorage.getItem(game.title) === "false") {return};

        const gameoption = document.createElement("div");
        gameoption.className = "dropdownOptions";
        gameoption.style.bottom = margincount + "vw";
        gameoption.addEventListener("click", () => {
            document.getElementById('gametitle').innerHTML = game.title;
            if (game.custom) {document.getElementById('gametitle').innerHTML = game.title.slice(4)};
            document.getElementById('gameversion').innerHTML = game.version;
            document.getElementById('gameicon').src = game.icon;
            document.getElementById('playbutton').href = game.link;
            if (path === "./assets/json/base.json") {selectedGame1 = JSON.stringify(game); localStorage.setItem("basegame", selectedGame1)};
            if (path === "./assets/json/modded.json") {selectedGame2 = JSON.stringify(game); localStorage.setItem("moddedgame", selectedGame2)};
            if (path === "./assets/json/assisted.json") {selectedGame3 = JSON.stringify(game); localStorage.setItem("assisted", selectedGame3)};
            dropdowntoggle();
        });
        
        const gameoptioninner = document.createElement("div");
        gameoptioninner.className = "dropdownOption";
        const gameoptionicon = document.createElement("img");
        gameoptionicon.src = game.icon;
        
        const gameoptiontext = document.createElement("div");
        gameoptiontext.className = "dropdownOptionText";
        const gameoptiontitle = document.createElement("p");
        gameoptiontitle.className = "bolded";
        gameoptiontitle.innerHTML = game.title;
        if (game.custom) {gameoptiontitle.innerHTML = game.title.slice(4)};
        const gameoptionversion = document.createElement("p");
        gameoptionversion.innerHTML = game.version;
        
        gameoptiontext.appendChild(gameoptiontitle);
        gameoptiontext.appendChild(gameoptionversion);
        gameoptioninner.appendChild(gameoptionicon);
        gameoptioninner.appendChild(gameoptiontext);
        gameoption.appendChild(gameoptioninner);
        dropdown.appendChild(gameoption);
        margincount = margincount + 5;
};

const mods = document.getElementById("modsbox");
function generatemods() {
    fetch("./assets/json/mods.json").then((response) => response.json()).then((data) => {
        data.forEach((mod) => {
            const modoption = document.createElement("div");
            modoption.className = "modoption";
            modoption.addEventListener("click", () => {
                if (localStorage.getItem(mod.title) === 'true') {
                    mod.active = false; 
                    localStorage.setItem(mod.title, mod.active); 
                    modoption.classList.remove("selected"); 
                    modslauncher = modslauncher.filter(obj => obj !== mod.link); 
                    localStorage.setItem("modslauncher", JSON.stringify(modslauncher.filter(obj => obj !== mod.link))); 
                    console.log("Off")
                }
                else {
                    mod.active = true; 
                    localStorage.setItem(mod.title, mod.active); 
                    modoption.classList.add("selected"); 
                    modslauncher.push(mod.link); 
                    localStorage.setItem("modslauncher", JSON.stringify(modslauncher)); 
                    console.log("On")} 
            });
            if (localStorage.getItem(mod.title) === 'true') {
                modoption.classList.add("selected");
            }
            const modoptionimg = document.createElement("img");
            modoptionimg.src = mod.icon;

            const moddetails = document.createElement("div");
            moddetails.className = "moddetails";
            const moddetailtitle = document.createElement("p");
            moddetailtitle.className = "bolded modtitle";
            moddetailtitle.innerHTML = mod.title;
            const moddetailauthor = document.createElement("p");
            moddetailauthor.className = "modauthor";
            moddetailauthor.innerHTML = mod.author;
            const moddetaildesc = document.createElement("p");
            moddetaildesc.innerHTML = mod.description;

            moddetails.appendChild(moddetailtitle);
            moddetails.appendChild(moddetailauthor);
            moddetails.appendChild(moddetaildesc);
            modoption.appendChild(modoptionimg);
            modoption.appendChild(moddetails);
            mods.appendChild(modoption);
        }
        )
    })
};

function newinstallation(data) {
    const installationscreenheader = document.createElement("div");
    installationscreenheader.className = "bolded notescreenheader";
    installationscreenheader.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" onclick="closenotescreen()"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>`
    const installationscreenheadertitle = document.createElement("p");
    installationscreenheadertitle.innerHTML = "Create New Installation";
    const installationscreenhr = document.createElement("hr");
    const installationscreendetails = document.createElement("div");
    installationscreendetails.className = "newinstallationdetails";
    const installationscreenicons = document.createElement("div");
    installationscreenicons.className = "newinstallationicons";
    fetch("./assets/json/icons.json").then((response) => response.json()).then((newicons) => {
        newicons.forEach((newicon) => {
            const newiconimg = document.createElement("img");
            newiconimg.src = newicon;
            newiconimg.className = "icon";
            newiconimg.addEventListener("click", () => {
                if (document.querySelector(".icon.selected")) {document.querySelector(".icon.selected").classList.remove("selected")};
                installationscreenicons.setAttribute("data-icon", newicon);
                newiconimg.classList.add("selected");
            });
            installationscreenicons.appendChild(newiconimg);
        });
        installationscreenicons.setAttribute("data-icon", newicons[0]);
        installationscreenicons.firstChild.classList.add("selected");
    });

    const installationscreennametitle = document.createElement("p");
    installationscreennametitle.className = "bolded newinstallationheader";
    installationscreennametitle.innerHTML = "NAME";
    const installationscreenname = document.createElement("input");
    installationscreenname.autocomplete = "off";
    installationscreenname.type = "text";
    installationscreenname.placeholder = "New Installation";
    installationscreenname.id = "installationscreenname";

    const installationscreenversion = document.createElement("p");
    installationscreenversion.className = "bolded newinstallationheader";
    installationscreenversion.innerHTML = "VERSION";
    const installationscreendropdown = document.createElement("select");
    installationscreendropdown.id = "installationscreendropdown";
    fetch(data).then((response) => response.json()).then((installs) => {
        installs.forEach((install) => {
            const installname = document.createElement("option");
            installname.innerHTML = install.title + "-" +install.version;
            installname.value = install.link;

            installationscreendropdown.appendChild(installname);
        });
    });

    const installationscreenfooter = document.createElement("div");
    installationscreenfooter.className = "newinstallationfooter";
    const installationscreenfooterhr = document.createElement("hr");
    const installationscreenfooterbuttons = document.createElement("div");
    installationscreenfooterbuttons.className = "newinstallationfooterbuttons";
    installationscreenfooterbuttons.innerHTML = `<div id="newinstallationcancel" class="classicbutton" onclick="closenotescreen();"><p class="bolded">Cancel</p></div><div id="newinstallationsave" class="greenbutton classicbutton" onclick="newinstallationsave();"><p class="bolded">Save</p></div>`;

    installationscreenheader.prepend(installationscreenheadertitle);
    installationscreenfooter.appendChild(installationscreenfooterhr);
    installationscreenfooter.appendChild(installationscreenfooterbuttons);
    installationscreendetails.appendChild(installationscreenicons);
    installationscreendetails.appendChild(installationscreennametitle);
    installationscreendetails.appendChild(installationscreenname);
    installationscreendetails.appendChild(installationscreenversion);
    installationscreendetails.appendChild(installationscreendropdown);
    externalmenu.appendChild(installationscreenheader);
    externalmenu.appendChild(installationscreenhr);
    externalmenu.appendChild(installationscreendetails);
    externalmenu.appendChild(installationscreenfooter);
    externalmenu.style.display = "flex";
};

function newinstallationsave(notsaving) {
    let customlaunchname = document.getElementById("installationscreenname").value;
    if (!customlaunchname) {customlaunchname = "New Installation";};
    let gamepath;
    if (localStorage.getItem("startupprofile") == 1) {gamepath = "basegame"};
    if (localStorage.getItem("startupprofile") == 2) {gamepath = "moddedgame"};
    if (localStorage.getItem("startupprofile") == 3) {gamepath = "assisted"};
    let customlaunch = {
        "title": customlaunchersnumber + "cl" + customlaunchname,
        "version": document.getElementById("installationscreendropdown").selectedOptions[0].innerText,
        "icon": document.querySelector(".newinstallationicons").getAttribute("data-icon"),
        "link": document.getElementById("installationscreendropdown").value,
        "active": true,
        "custom": gamepath
    };
    let customlaunchers = JSON.parse(localStorage.getItem("customlaunchers"));
    customlaunchers.push(customlaunch.title);
    customlaunchersnumber++
    localStorage.setItem("customlaunchers", JSON.stringify(customlaunchers));
    localStorage.setItem("customlaunchersnumber", customlaunchersnumber);
    localStorage.setItem("c" + customlaunch.title, JSON.stringify(customlaunch));
    generatelauncher(customlaunch, launcher);
    if (!notsaving) {
        while (installations.firstChild) {installations.removeChild(installations.firstChild)};
        generatelaunchers(launcher);
    };
    closenotescreen();
};

function installationedit(data, title) {
    const installationscreenheader = document.createElement("div");
    installationscreenheader.className = "bolded notescreenheader";
    installationscreenheader.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" onclick="closenotescreen()"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>`
    const installationscreenheadertitle = document.createElement("p");
    installationscreenheadertitle.innerHTML = "Edit Installation";
    const installationscreenhr = document.createElement("hr");
    const installationscreendetails = document.createElement("div");
    installationscreendetails.className = "newinstallationdetails";
    const installationscreenicons = document.createElement("div");
    installationscreenicons.className = "newinstallationicons";
    fetch("./assets/json/icons.json").then((response) => response.json()).then((newicons) => {
        newicons.forEach((newicon) => {
            const newiconimg = document.createElement("img");
            newiconimg.src = newicon;
            newiconimg.className = "icon";
            newiconimg.addEventListener("click", () => {
                if (document.querySelector(".icon.selected")) {document.querySelector(".icon.selected").classList.remove("selected")};
                installationscreenicons.setAttribute("data-icon", newicon);
                newiconimg.classList.add("selected");
            });
            installationscreenicons.appendChild(newiconimg);
        });
        installationscreenicons.setAttribute("data-icon", JSON.parse(localStorage.getItem("c" + title)).icon);
        installationscreenicons.querySelector("[src='"+ JSON.parse(localStorage.getItem("c" + title)).icon +"']").classList.add("selected");
    });

    const installationscreennametitle = document.createElement("p");
    installationscreennametitle.className = "bolded newinstallationheader";
    installationscreennametitle.innerHTML = "NAME";
    const installationscreenname = document.createElement("input");
    installationscreenname.value = title.slice(4);
    installationscreenname.autocomplete = "off";
    installationscreenname.type = "text";
    installationscreenname.placeholder = "New Installation";
    installationscreenname.id = "installationscreenname";

    const installationscreenversion = document.createElement("p");
    installationscreenversion.className = "bolded newinstallationheader";
    installationscreenversion.innerHTML = "VERSION";
    const installationscreendropdown = document.createElement("select");
    installationscreendropdown.id = "installationscreendropdown";
    fetch(data).then((response) => response.json()).then((installs) => {
        installs.forEach((install) => {
            const installname = document.createElement("option");
            installname.innerHTML = install.title + "-" +install.version;
            installname.value = install.link;

            installationscreendropdown.appendChild(installname);
        });
    }).then(() => {
        installationscreendropdown.value = JSON.parse(localStorage.getItem("c" + title)).link;
    });

    const installationscreenfooter = document.createElement("div");
    installationscreenfooter.className = "newinstallationfooter";
    const installationscreenfooterhr = document.createElement("hr");
    const installationscreenfooterbuttons = document.createElement("div");
    installationscreenfooterbuttons.className = "newinstallationfooterbuttons";
    installationscreenfooterbuttons.innerHTML = `<div id="newinstallationcancel" class="classicbutton" onclick="closenotescreen();"><p class="bolded">Cancel</p></div><div id="newinstallationsave" class="greenbutton classicbutton" onclick="localStorage.removeItem('c` + title + `'); localStorage.removeItem('` + title + `'); localStorage.setItem('customlaunchers', JSON.stringify(JSON.parse(localStorage.getItem('customlaunchers')).filter(item => item !== '` + title + `'))); newinstallationsave(false);"><p class="bolded">Save</p></div>`;

    installationscreenheader.prepend(installationscreenheadertitle);
    installationscreenfooter.appendChild(installationscreenfooterhr);
    installationscreenfooter.appendChild(installationscreenfooterbuttons);
    installationscreendetails.appendChild(installationscreenicons);
    installationscreendetails.appendChild(installationscreennametitle);
    installationscreendetails.appendChild(installationscreenname);
    installationscreendetails.appendChild(installationscreenversion);
    installationscreendetails.appendChild(installationscreendropdown);
    externalmenu.appendChild(installationscreenheader);
    externalmenu.appendChild(installationscreenhr);
    externalmenu.appendChild(installationscreendetails);
    externalmenu.appendChild(installationscreenfooter);
    externalmenu.style.display = "flex";
};

function installationdelete(title) {
    document.querySelector('.confrimationmenuscreen').classList.add("deleteinstallation");
    document.getElementById('confirmationmenu').style.display = 'flex';
    document.querySelector(".warningtitle").innerHTML = "Are you sure you want to delete?";
    document.querySelector(".warningdesc").innerHTML = title.slice(4);
    document.querySelector(".warningbutton").setAttribute("onclick", "installationdeleteconfirm('" + title + "')");
};

function installationdeleteconfirm(title) {
    localStorage.removeItem("c" + title);
    localStorage.removeItem(title);
    localStorage.setItem("customlaunchers", JSON.stringify(JSON.parse(localStorage.getItem("customlaunchers")).filter(item => item !== title)));
    while (installations.firstChild) {installations.removeChild(installations.firstChild)};
    generatelaunchers(launcher);
    document.getElementById('confirmationmenu').style.display = "none";
};

const installations = document.getElementById("installationsbox");
function generatelaunchers(path) {
    document.getElementById("newinstallationbutton").setAttribute("onclick", "newinstallation('" + path + "')");
    const gamedividertop = document.createElement("hr");
    installations.appendChild(gamedividertop);
    if (localStorage.getItem("launcherpresets") == "true") {
        fetch(path).then((response) => response.json()).then((data) => {data.forEach((game) => {
            generatelauncher(game, path);
        })}).then(() => {generatecustomlaunchers(path)});
    };
    if (localStorage.getItem("launcherpresets") == "false") {
        let gamepath;
        if (path === "./assets/json/base.json") {gamepath = JSON.parse(localStorage.getItem("basegame"))};
        if (path === "./assets/json/modded.json") {gamepath = JSON.parse(localStorage.getItem("moddedgame"))};
        if (path === "./assets/json/assisted.json") {gamepath = JSON.parse(localStorage.getItem("assisted"))};
        generatelauncher(gamepath, path);
        generatecustomlaunchers(path);
    };
};

function generatecustomlaunchers(path) {
    if (localStorage.getItem("customlaunchers")) {
        let gamepath;
        if (path === "./assets/json/base.json") {gamepath = "basegame"};
        if (path === "./assets/json/modded.json") {gamepath = "moddedgame"};
        if (path === "./assets/json/assisted.json") {gamepath = "assisted"};

        JSON.parse(localStorage.getItem("customlaunchers")).forEach((launcher) => {
            let game = JSON.parse(localStorage.getItem("c" + launcher));
            if (game.custom != gamepath) {return};
            generatelauncher(game, path);
        });
    };
};

function generatelauncher(game, path) {
    let gamepath;
    if (path === "./assets/json/base.json") {gamepath = JSON.parse(localStorage.getItem("basegame"))};
    if (path === "./assets/json/modded.json") {gamepath = JSON.parse(localStorage.getItem("moddedgame"))};
    if (path === "./assets/json/assisted.json") {gamepath = JSON.parse(localStorage.getItem("assisted"))};

    const gameoption = document.createElement("div");
    gameoption.className = "installationOptions";
    const gameoptioninner = document.createElement("div");
    gameoptioninner.className = "installationOption";

    const gameinput = document.createElement("input");
    gameinput.className = "installationBox";
    gameinput.type = "checkbox";
    gameinput.addEventListener("change", () => {
        if (game.title === gamepath.title) {return};
        if (gameinput.checked) {game.active = true; localStorage.setItem(game.title, game.active); console.log("On")} 
        else {game.active = false; localStorage.setItem(game.title, game.active); console.log("Off")} 
    });
    if (!localStorage.getItem(game.title)) {localStorage.setItem(game.title, game.active)};
    if (localStorage.getItem(game.title) === 'true') {gameinput.checked = "checked"};

    const gameoptionicon = document.createElement("img");
    gameoptionicon.src = game.icon;
            
    const gameoptiontext = document.createElement("div");
    gameoptiontext.className = "installationOptionText";
    const gameoptiontitle = document.createElement("p");
    gameoptiontitle.className = "bolded";
    gameoptiontitle.innerHTML = game.title;
    if (game.custom) {
        gameoptiontitle.innerHTML = game.title.slice(4);
        const custombuttons = document.createElement("div");
        custombuttons.className = "editbuttons";
        const editbutton = document.createElement("div");
        editbutton.className = "classicbutton";
        editbutton.onclick = function(){installationedit(path, game.title)};
        const editbuttontext = document.createElement("p");
        editbuttontext.className = "bolded";
        editbuttontext.innerHTML = "Edit";
        const deletebutton = document.createElement("div");
        deletebutton.className = "redbutton classicbutton";
        deletebutton.onclick = function(){installationdelete(game.title)};
        const deletebuttontext = document.createElement("p");
        deletebuttontext.className = "bolded";
        deletebuttontext.innerHTML = "Delete";
        
        editbutton.appendChild(editbuttontext);
        deletebutton.appendChild(deletebuttontext);
        custombuttons.appendChild(editbutton);
        custombuttons.appendChild(deletebutton);
        gameoption.appendChild(custombuttons);
    };
    const gameoptionversion = document.createElement("p");
    gameoptionversion.innerHTML = game.version;
    const gamedivider = document.createElement("hr");

    gameoptiontext.appendChild(gameoptiontitle);
    gameoptiontext.appendChild(gameoptionversion);
    gameoptioninner.appendChild(gameinput);
    gameoptioninner.appendChild(gameoptionicon);
    gameoptioninner.appendChild(gameoptiontext);
    gameoption.prepend(gameoptioninner);
    installations.appendChild(gameoption);
    installations.appendChild(gamedivider);
}

const faqs = document.getElementById("faqbox");
function generatefaqs() {
    fetch("./assets/json/faqs.json").then((response) => response.json()).then((data) => {
        data.forEach((game) => {
            const faqoption = document.createElement("div");
            faqoption.className = "faqoption";

            const faqquestion = document.createElement("div");
            faqquestion.className = "bolded faqtext";
            const faqquestionsymbol = document.createElement("p");
            faqquestionsymbol.className = "faqsymbol";
            faqquestionsymbol.innerHTML = "Q";
            const faqquestiontext = document.createElement("p");
            faqquestiontext.innerHTML = game.question;

            const faqanswer = document.createElement("div");
            faqanswer.className = "faqtext";
            const faqanswersymbol = document.createElement("p");
            faqanswersymbol.className = "bolded faqsymbol";
            faqanswersymbol.innerHTML = "A";
            const faqanswertext = document.createElement("p");
            faqanswertext.innerHTML = game.answer;

            faqquestion.appendChild(faqquestionsymbol);
            faqquestion.appendChild(faqquestiontext);
            faqanswer.appendChild(faqanswersymbol);
            faqanswer.appendChild(faqanswertext);
            faqoption.appendChild(faqquestion);
            faqoption.appendChild(faqanswer);
            faqs.appendChild(faqoption);
        }
        )
    })
};

const notes = document.getElementById("patchnotesbox");
const externalmenu = document.getElementById("externalmenu");
function generatenotes() {
    fetch("./assets/json/patchnotes.json").then((response) => response.json()).then((data) => {
        data.forEach((note) => {
            const patchnote = document.createElement("div");
            patchnote.className = "patchnote";
            patchnote.setAttribute('data-note-type', note.type);
            patchnote.addEventListener("click", () => {
                const notescreenheader = document.createElement("div");
                notescreenheader.className = "bolded notescreenheader";
                notescreenheader.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" onclick="closenotescreen()"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>`
                const notescreenheadertitle = document.createElement("p");
                notescreenheadertitle.innerHTML = "Patch Notes " + note.title + " " + note.version;
                const notescreenhr = document.createElement("hr");

                const notescreendetails = document.createElement("div");
                notescreendetails.className = "notescreendetails";
                const notescreendate = document.createElement("p");
                notescreendate.className = "date";
                notescreendate.innerHTML = note.date;
                const notescreendescription = document.createElement("p");
                notescreendescription.className = "bolded notescreenheader";
                notescreendescription.innerHTML = note.description;

                const notescreenlist = document.createElement("ul");
                note.notes.forEach((item) => {
                    const noteitem = document.createElement("li");
                    noteitem.innerHTML = item;
                    notescreenlist.appendChild(noteitem);
                });

                notescreenheader.prepend(notescreenheadertitle);
                notescreendetails.appendChild(notescreendate);
                notescreendetails.appendChild(notescreendescription);
                notescreendetails.appendChild(notescreenlist);
                externalmenu.appendChild(notescreenheader);
                externalmenu.appendChild(notescreenhr);
                externalmenu.appendChild(notescreendetails);
                externalmenu.style.display = "flex";
            });

            const patchnoteimg = document.createElement("img");
            patchnoteimg.src = "./assets/images/" + note.icon;

            const patchnotedetails = document.createElement("div");
            patchnotedetails.className = "bolded patchnotedetails";
            const notedetailtitle = document.createElement("p");
            notedetailtitle.innerHTML = note.title;
            const notedetailversion = document.createElement("p");
            notedetailversion.innerHTML = note.version;

            patchnotedetails.appendChild(notedetailtitle);
            patchnotedetails.appendChild(notedetailversion);
            patchnote.appendChild(patchnoteimg);
            patchnote.appendChild(patchnotedetails);
            notes.appendChild(patchnote);
        });
        if (gamenote == false) { document.querySelectorAll('[data-note-type="game"]').forEach(element => {element.style.display = 'none'})};
        if (sitenote == false) { document.querySelectorAll('[data-note-type="site"]').forEach(element => {element.style.display = 'none'})};
    });
};

function generaterecentnote() {
    fetch("./assets/json/patchnotes.json").then((response) => response.json()).then((data) => {
        const note = data[0];
            const notescreenheader = document.createElement("div");
            notescreenheader.className = "bolded notescreenheader";
            notescreenheader.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" onclick="closenotescreen()"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>`
            const notescreenheadertitle = document.createElement("p");
            notescreenheadertitle.innerHTML = "Patch Notes " + note.title + " " + note.version;
            const notescreenhr = document.createElement("hr");

            const notescreendetails = document.createElement("div");
            notescreendetails.className = "notescreendetails";
            const notescreendate = document.createElement("p");
            notescreendate.className = "date";
            notescreendate.innerHTML = note.date;
            const notescreendescription = document.createElement("p");
            notescreendescription.className = "bolded notescreenheader";
            notescreendescription.innerHTML = note.description;

            const notescreenlist = document.createElement("ul");
            note.notes.forEach((item) => {
                const noteitem = document.createElement("li");
                noteitem.innerHTML = item;
                notescreenlist.appendChild(noteitem);
            });

            notescreenheader.prepend(notescreenheadertitle);
            notescreendetails.appendChild(notescreendate);
            notescreendetails.appendChild(notescreendescription);
            notescreendetails.appendChild(notescreenlist);
            externalmenu.appendChild(notescreenheader);
            externalmenu.appendChild(notescreenhr);
            externalmenu.appendChild(notescreendetails);
            externalmenu.style.display = "flex";
    })
};

// Patchnote Functions

let gamenote = sitenote = true;
function sortnote(type) {
    if (type === "site") {
        if (gamenote == true) { document.querySelectorAll('[data-note-type="game"]').forEach(element => {element.style.display = 'none';}); gamenote = false;}
        else if (gamenote == false) { document.querySelectorAll('[data-note-type="game"]').forEach(element => {element.style.display = 'flex';}); gamenote = true;}
    };
    if (type === "game") {
        if (sitenote == true) { document.querySelectorAll('[data-note-type="site"]').forEach(element => {element.style.display = 'none';}); sitenote = false; }
        else if (sitenote == false) { document.querySelectorAll('[data-note-type="site"]').forEach(element => {element.style.display = 'flex';}); sitenote = true; }
    };
}

function closenotescreen() {
    externalmenu.style.display = "none";
    while (externalmenu.firstChild) {externalmenu.removeChild(externalmenu.firstChild)};
}

// Game Edition Selected
let launcher = "./assets/json/base.json";
if (!localStorage.getItem("startupprofile")) {
    localStorage.setItem("startupprofile", "1");
}

if (localStorage.getItem("startupprofile") === "1") {webedition()};
if (localStorage.getItem("startupprofile") === "2") {moddededition()};
if (localStorage.getItem("startupprofile") === "3") {eaglercontrols()};
if (localStorage.getItem("startupprofile") === "4") {creditsmenu()};
if (localStorage.getItem("startupprofile") === "5") {settingsmenu()};

function webedition(){
    launcher = "./assets/json/base.json";
    localStorage.setItem("startupprofile", "1");
    resetTabSelected();
    generateprofile(1);
    generatelaunchers(launcher);
    document.getElementById('game-bg').style.backgroundImage = 'url(./assets/images/web-edition.jpg)';
    document.getElementById('game-title').src = './assets/images/web-title.png';
    document.getElementById('gameedition').innerHTML = 'EAGLERCRAFT WEB EDITION';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header7').style.display = 'none';
    document.getElementById('header8').style.display = 'none';
    document.getElementById('header9').style.display = 'none';
    document.getElementById('header10').style.display = 'none';
    document.getElementById('gtabs2').classList.add('selected');
    playheader();
}
function moddededition(){
    launcher = "./assets/json/modded.json";
    localStorage.setItem("startupprofile", "2");
    resetTabSelected();
    generateprofile(2);
    generatelaunchers(launcher);
    document.getElementById('game-bg').style.backgroundImage = 'url(./assets/images/modded-edition.jpg)';
    document.getElementById('game-title').src = './assets/images/modded-title.png';
    document.getElementById('gameedition').innerHTML = 'EAGLERCRAFT MODDED';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header7').style.display = 'none';
    document.getElementById('header8').style.display = 'none';
    document.getElementById('header9').style.display = 'none';
    document.getElementById('header10').style.display = 'none';
    document.getElementById('gtabs3').classList.add('selected');
    playheader();
}
function eaglercontrols(){
    launcher = "./assets/json/assisted.json";
    localStorage.setItem("startupprofile", "3");
    resetTabSelected();
    generateprofile(3);
    generatelaunchers(launcher);
    document.getElementById('game-bg').style.backgroundImage = 'url(./assets/images/controls-edition.jpg)';
    document.getElementById('game-title').src = './assets/images/controls-title.png';
    document.getElementById('gameedition').innerHTML = 'EAGLERCRAFT MOBILE/CONTROLLER';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header7').style.display = 'none';
    document.getElementById('header8').style.display = 'none';
    document.getElementById('header9').style.display = 'none';
    document.getElementById('header10').style.display = 'none';
    document.getElementById('gtabs4').classList.add('selected');
    playheader();
}
function creditsmenu(){
    localStorage.setItem("startupprofile", "4");
    resetTabSelected();
    document.getElementById('gameedition').innerHTML = 'CREDITS/CONTRIBUTORS';
    document.getElementById('header1').style.display = 'none';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header3').style.display = 'none';
    document.getElementById('header4').style.display = 'none';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header6').style.display = 'none';
    document.getElementById('header9').style.display = 'none';
    document.getElementById('header10').style.display = 'none';
    document.getElementById('gtabs5').classList.add('selected');
    contributorsheader();
}
function settingsmenu(){
    localStorage.setItem("startupprofile", "5");
    resetTabSelected();
    document.getElementById('gameedition').innerHTML = 'SETTINGS';
    document.getElementById('header1').style.display = 'none';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header3').style.display = 'none';
    document.getElementById('header4').style.display = 'none';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('header6').style.display = 'none';
    document.getElementById('header7').style.display = 'none';
    document.getElementById('header8').style.display = 'none';
    document.getElementById('gtabs6').classList.add('selected');
    generalsettingsheader();
}

// Header Options
function playheader(){
    resetHeaderSelected();
    generategames(launcher);
    document.getElementById('game-bg').style.display = "flex";
    document.getElementById('gameSelection').style.display = "flex";
    document.getElementById('header1').classList.add('selected');
}
function modsheader(){
    resetHeaderSelected();
    generatemods();
    document.getElementById('mods').style.display = "flex";
    document.getElementById('header2').classList.add('selected');
}
function faqsheader(){
    resetHeaderSelected();
    document.getElementById('faq').style.display = "flex";
    document.getElementById('header3').classList.add('selected');
}
function installationheader(){
    resetHeaderSelected();
    document.getElementById('installations').style.display = "flex";
    document.getElementById('header4').classList.add('selected');
}
function patchnotesheader(){
    resetHeaderSelected();
    generatenotes();
    document.getElementById('patchNotes').style.display = "flex";
    document.getElementById('header6').classList.add('selected');
}
function contributorsheader(){
    resetHeaderSelected();
    document.getElementById('contributors').style.display = "flex";
    document.getElementById('header7').classList.add('selected');
}
function creditsheader(){
    resetHeaderSelected();
    document.getElementById('credits').style.display = "flex";
    document.getElementById('header8').classList.add('selected');
}
function generalsettingsheader(){
    resetHeaderSelected();
    document.getElementById('settings').style.display = "flex";
    document.getElementById('generalsettings').style.display = "block";
    document.getElementById('header9').classList.add('selected');
}
function aboutsettingsheader(){
    resetHeaderSelected();
    document.getElementById('settings').style.display = "flex";
    document.getElementById('aboutsettings').style.display = "block";
    document.getElementById('header10').classList.add('selected');
}

// Dropdown game options toggle
function dropdowntoggle(){
    if (dropdown.style.visibility === 'hidden') {
        dropdown.style.visibility = 'visible';
        document.getElementById('dropdownuparrow').innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 20 20"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="dropdownIcon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>';
    } else {
        dropdown.style.visibility = 'hidden'; 
        document.getElementById('dropdownuparrow').innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 20 20"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="dropdownIcon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>';
    }
}

// Resets certain UI aspects
function resetTabSelected() {
    while (dropdown.firstChild) {dropdown.removeChild(dropdown.firstChild)};
    while (installations.firstChild) {installations.removeChild(installations.firstChild)};
    for (var i = 1; i < 7; i++) { 
        let gtabs = document.getElementById('gtabs' + [i]);
        gtabs.classList.remove('selected');
    };
    for (var i = 1; i < 11; i++) { 
        let headers = document.getElementById('header' + [i]);
        headers.style.display = "block";
    };
    document.getElementById('settings').style.display = "none";
}

function resetHeaderSelected() {
    while (dropdown.firstChild) {dropdown.removeChild(dropdown.firstChild)};
    while (mods.firstChild) {mods.removeChild(mods.firstChild)};
    while (notes.firstChild) {notes.removeChild(notes.firstChild)};
    for (var i = 1; i < 11; i++) { 
        let headers = document.getElementById('header' + [i]);
        headers.classList.remove('selected'); 
    };
    document.getElementById('game-bg').style.display = "none";
    document.getElementById('gameSelection').style.display = "none";
    document.getElementById('mods').style.display = "none";
    document.getElementById('faq').style.display = "none";
    document.getElementById('installations').style.display = "none";
    document.getElementById('patchNotes').style.display = "none";
    document.getElementById('credits').style.display = "none";
    document.getElementById('contributors').style.display = "none";
    document.getElementById('generalsettings').style.display = "none";
    document.getElementById('aboutsettings').style.display = "none";
}

// Prevents touchscreen move
window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event)
{
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}

// Basic Settings
const newtabcheckbox = document.getElementById("launchnewtab");
const presetscheckbox = document.getElementById("launcherpresets");
if (localStorage.getItem("launcherpresets")) {
    if (localStorage.getItem("launcherpresets") == 'true') {
        presetscheckbox.checked = true;
    };
    if (localStorage.getItem("launchnewtab") == 'true') {
        newtabcheckbox.checked = true;
        document.getElementById('playbutton').target = "_blank"};
};
function launchnewtab() {
    if (newtabcheckbox.checked) {localStorage.setItem("launchnewtab", true); document.getElementById('playbutton').target = "_blank"; return}
    else {localStorage.setItem("launchnewtab", false); document.getElementById('playbutton').target = ""};
};

function presetlaunchers() {
    if (presetscheckbox.checked) {
        localStorage.setItem("launcherpresets", true);
        fetch("./assets/json/base.json").then((response) => response.json()).then((data) => {data.forEach((game) => {
            if (game.active == true) {localStorage.setItem(game.title, true)};
        })});
        fetch("./assets/json/modded.json").then((response) => response.json()).then((data) => {data.forEach((game) => {
            if (game.active == true) {localStorage.setItem(game.title, true)};
        })});
        fetch("./assets/json/assisted.json").then((response) => response.json()).then((data) => {data.forEach((game) => {
            if (game.active == true) {localStorage.setItem(game.title, true)};
        })});
        return
    }
    else {
        localStorage.setItem("launcherpresets", false);
        fetch("./assets/json/base.json").then((response) => response.json()).then((data) => {data.forEach((game) => {
            if (game.title === JSON.parse(localStorage.getItem("basegame")).title) {return};
            localStorage.setItem(game.title, false);
        })});
        fetch("./assets/json/modded.json").then((response) => response.json()).then((data) => {data.forEach((game) => {
            if (game.title === JSON.parse(localStorage.getItem("moddedgame")).title) {return};
            localStorage.setItem(game.title, false);
        })});
        fetch("./assets/json/assisted.json").then((response) => response.json()).then((data) => {data.forEach((game) => {
            if (game.title === JSON.parse(localStorage.getItem("assisted")).title) {return};
            localStorage.setItem(game.title, false);
        })});
    };
};

// Username Generator
let username = document.getElementById('username');
let userchosen = false;
if (userchosen === false && !localStorage.getItem("username")) {
    fetch("https://genr8rs.com/api/Content/Fun/XboxNameGenerator?genr8rsUserId=1748114452.233968321c14391c2&_sGameGenre=any").then((response) => response.json()).then((data) => {
        if (!data) {return};
        username.innerHTML = data._sResult;
        document.getElementById("usernameinput").value = data._sResult;
        localStorage.setItem("username", data._sResult);
        userchosen = true;
    })
}
else {
    username.innerHTML = localStorage.getItem("username");
    document.getElementById("usernameinput").value = localStorage.getItem("username");
};

function usernamechange() {
    localStorage.setItem("username", document.getElementById("usernameinput").value);
    username.innerHTML = localStorage.getItem("username");
};

// Clear Local Storage

function clearlocalstorage() {
    document.querySelector('.confrimationmenuscreen').classList.remove("deleteinstallation");
    document.getElementById('confirmationmenu').style.display = 'flex';
    document.querySelector(".warningtitle").innerHTML = "Clear Local Storage";
    document.querySelector(".warningdesc").innerHTML = "This will delete all of your local storage data of the website. This will reset saved settings and installations. Continue?";
    document.querySelector(".warningbutton").setAttribute("onclick", "clearlocalstorageconfirm()");
};
function confirmationcancel() {
    document.getElementById('confirmationmenu').style.display = "none";
};
function clearlocalstorageconfirm() {
    document.getElementById('confirmationmenu').style.display = "none";
    localStorage.clear();
    location.reload();
};

generatefaqs();