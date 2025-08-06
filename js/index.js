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
function generategames(path) {
    let margincount = 0;
    fetch(path).then((response) => response.json()).then((data) => {
        data.reverse();
        data.forEach((game) => {
            if (!localStorage.getItem(game.title) && game.active === false) {localStorage.setItem(game.title, game.active); return};
            if (localStorage.getItem(game.title) === 'false') {return};
            const gameoption = document.createElement("div");
            gameoption.className = "dropdownOptions";
            gameoption.style.bottom = margincount + "vw";
            gameoption.addEventListener("click", () => {
                document.getElementById('gametitle').innerHTML = game.title;
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
            const gameoptionversion = document.createElement("p");
            gameoptionversion.innerHTML = game.version;
        
            gameoptiontext.appendChild(gameoptiontitle);
            gameoptiontext.appendChild(gameoptionversion);
            gameoptioninner.appendChild(gameoptionicon);
            gameoptioninner.appendChild(gameoptiontext);
            gameoption.appendChild(gameoptioninner);
            dropdown.appendChild(gameoption);
            margincount = margincount + 5;
        }
        )
    })
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

const installations = document.getElementById("installationsbox");
function generatelaunchers(path) {
    fetch(path).then((response) => response.json()).then((data) => {
        const gamedividertop = document.createElement("hr");
        installations.appendChild(gamedividertop);
        data.forEach((game) => {
            const gameoption = document.createElement("div");
            gameoption.className = "installationOptions";
            const gameoptioninner = document.createElement("div");
            gameoptioninner.className = "installationOption";

            const gameinput = document.createElement("input");
            gameinput.className = "installationBox";
            gameinput.type = "checkbox";
            gameoption.addEventListener("click", () => {
                if (gameinput.checked) {game.active = false; localStorage.setItem(game.title, game.active); gameinput.checked = ""; console.log("Off")} 
                else {game.active = true; localStorage.setItem(game.title, game.active); gameinput.checked = "checked"; console.log("On")} 
            });
            if (!localStorage.getItem(game.title)) {
                localStorage.setItem(game.title, game.active);
            }
            if (localStorage.getItem(game.title) === 'true') {
                gameinput.checked = "checked";
            }

            const gameoptionicon = document.createElement("img");
            gameoptionicon.src = game.icon;
        
            const gameoptiontext = document.createElement("div");
            gameoptiontext.className = "installationOptionText";
            const gameoptiontitle = document.createElement("p");
            gameoptiontitle.className = "bolded";
            gameoptiontitle.innerHTML = game.title;
            const gameoptionversion = document.createElement("p");
            gameoptionversion.innerHTML = game.version;
            const gamedivider = document.createElement("hr");

            gameoptiontext.appendChild(gameoptiontitle);
            gameoptiontext.appendChild(gameoptionversion);
            gameoptioninner.appendChild(gameinput);
            gameoptioninner.appendChild(gameoptionicon);
            gameoptioninner.appendChild(gameoptiontext);
            gameoption.appendChild(gameoptioninner);
            installations.appendChild(gameoption);
            installations.appendChild(gamedivider);
        }
        )
    })
};

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
const notescreen = document.getElementById("notescreen");
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
                notescreen.appendChild(notescreenheader);
                notescreen.appendChild(notescreenhr);
                notescreen.appendChild(notescreendetails);
                notescreen.style.display = "flex";
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
        }
        )
    })
};

// Patchnote Functions

let gamenote = sitenote = true;
function sortnote(type) {
    if (type === "game") {
        if (gamenote == true) { document.querySelectorAll('[data-note-type="game"]').forEach(element => {element.style.display = 'none';}); gamenote = false;}
        else if (gamenote == false) { document.querySelectorAll('[data-note-type="game"]').forEach(element => {element.style.display = 'flex';}); gamenote = true;}
    };
    if (type === "site") {
        if (sitenote == true) { document.querySelectorAll('[data-note-type="site"]').forEach(element => {element.style.display = 'none';}); sitenote = false; }
        else if (sitenote == false) { document.querySelectorAll('[data-note-type="site"]').forEach(element => {element.style.display = 'flex';}); sitenote = true; }
    };
}

function closenotescreen() {
    notescreen.style.display = "none";
    while (notescreen.firstChild) {notescreen.removeChild(notescreen.firstChild)};
}

// Game Edition Selected
let launcher = "./assets/json/base.json";
function webedition(){
    launcher = "./assets/json/base.json";
    resetTabSelected();
    generateprofile(1);
    generategames(launcher);
    generatelaunchers(launcher);
    document.getElementById('game-bg').style.backgroundImage = 'url(./assets/images/web-edition.jpg)';
    document.getElementById('game-title').src = './assets/images/web-title.png';
    document.getElementById('gameedition').innerHTML = 'EAGLERCRAFT WEB EDITION';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('gtabs2').classList.add('selected');
}
function moddededition(){
    launcher = "./assets/json/modded.json";
    resetTabSelected();
    generateprofile(2);
    generategames(launcher);
    generatelaunchers(launcher);
    document.getElementById('game-bg').style.backgroundImage = 'url(./assets/images/modded-edition.jpg)';
    document.getElementById('game-title').src = './assets/images/modded-title.png';
    document.getElementById('gameedition').innerHTML = 'EAGLERCRAFT MODDED';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('gtabs3').classList.add('selected');
}
function eaglercontrols(){
    launcher = "./assets/json/assisted.json";
    resetTabSelected();
    generateprofile(3);
    generategames(launcher);
    generatelaunchers(launcher);
    document.getElementById('game-bg').style.backgroundImage = 'url(./assets/images/controls-edition.jpg)';
    document.getElementById('game-title').src = './assets/images/controls-title.png';
    document.getElementById('gameedition').innerHTML = 'EAGLERCRAFT MOBILE/CONTROLLER';
    document.getElementById('header2').style.display = 'none';
    document.getElementById('header5').style.display = 'none';
    document.getElementById('gtabs4').classList.add('selected');
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
    for (var i = 1; i < 6; i++) { 
        let gtabs = document.getElementById('gtabs' + [i]);
        let headers = document.getElementById('header' + [i]);
        gtabs.classList.remove('selected');
        headers.style.display = "block";
    };
    playheader();
}

function resetHeaderSelected() {
    while (dropdown.firstChild) {dropdown.removeChild(dropdown.firstChild)};
    while (mods.firstChild) {mods.removeChild(mods.firstChild)};
    while (notes.firstChild) {notes.removeChild(notes.firstChild)};
    for (var i = 1; i < 7; i++) { 
        let headers = document.getElementById('header' + [i]);
        headers.classList.remove('selected'); 
    };
    document.getElementById('game-bg').style.display = "none";
    document.getElementById('gameSelection').style.display = "none";
    document.getElementById('mods').style.display = "none";
    document.getElementById('faq').style.display = "none";
    document.getElementById('installations').style.display = "none";
    document.getElementById('patchNotes').style.display = "none";
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

// Username Generator
let username = document.getElementById('username');
let userchosen = false;
if (userchosen === false && !localStorage.getItem("username")) {
    fetch("https://genr8rs.com/api/Content/Fun/XboxNameGenerator?genr8rsUserId=1748114452.233968321c14391c2&_sGameGenre=any").then((response) => response.json()).then((data) => {
        if (!data) {return};
        username.innerHTML = data._sResult;
        localStorage.setItem("username", data._sResult);
        userchosen = true;
    })
}
else {username.innerHTML = localStorage.getItem("username")}

generateprofile(1);
generategames("./assets/json/base.json");
generatefaqs();
generatelaunchers("./assets/json/base.json");
console.clear();