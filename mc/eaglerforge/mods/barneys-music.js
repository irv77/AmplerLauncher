var playButton = document.createElement('button');
playButton.textContent = 'Music';
playButton.style.position = 'fixed';
playButton.style.top = '20px';
playButton.style.right = '20px';
playButton.style.padding = '10px 20px';
playButton.style.backgroundColor = '#007bff';
playButton.style.color = '#fff';
playButton.style.border = 'none';
playButton.style.borderRadius = '5px';
playButton.style.cursor = 'pointer';
playButton.style.fontFamily = 'Poppins, sans-serif';

document.body.appendChild(playButton);

var songs = JSON.parse(localStorage.getItem('songs')) || {};

var audioElement = new Audio();

playButton.addEventListener('click', function() {
    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#141414';
    modal.style.borderRadius = '10px';
    modal.style.padding = '40px';
    modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    modal.style.zIndex = '9999';
    modal.style.cursor = 'move';

    var isDragging = false;
    var offsetX, offsetY;

    function handleMouseDown(event) {
        isDragging = true;
        offsetX = event.clientX - modal.offsetLeft;
        offsetY = event.clientY - modal.offsetTop;
    }

    function handleMouseMove(event) {
        if (isDragging) {
            var x = event.clientX - offsetX;
            var y = event.clientY - offsetY;
            modal.style.left = x + 'px';
            modal.style.top = y + 'px';
        }
    }

    function handleMouseUp() {
        isDragging = false;
    }

    modal.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    var closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '20px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = 'red';

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    var title = document.createElement('h2');
    title.textContent = 'Barneys Music Player';
    title.style.color = '#fff';
    title.style.textAlign = 'center';
    title.style.marginBottom = '20px';
    title.style.fontFamily = 'Poppins, sans-serif';

    var songNameInput = document.createElement('input');
    songNameInput.setAttribute('type', 'text');
    songNameInput.style.width = '100%';
    songNameInput.style.marginBottom = '20px';
    songNameInput.placeholder = 'Enter the name of the song';
    songNameInput.disabled = false;
    songNameInput.style.fontFamily = 'Poppins, sans-serif';

    songNameInput.addEventListener('click', function() {
        var songName = prompt('Please enter the name of the song:');
        if (songName) {
            songNameInput.value = songName;
        }
    });

    var musicUrlInput = document.createElement('input');
    musicUrlInput.setAttribute('type', 'text');
    musicUrlInput.style.width = '100%';
    musicUrlInput.style.marginBottom = '20px';
    musicUrlInput.placeholder = 'Enter the URL of the song';
    musicUrlInput.disabled = false;
    musicUrlInput.style.fontFamily = 'Poppins, sans-serif';

    musicUrlInput.addEventListener('click', function() {
        var musicUrl = prompt('Please enter the URL of the song:');
        if (musicUrl) {
            musicUrlInput.value = musicUrl;
        }
    });

    var addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.style.width = '100%';
    addButton.style.padding = '10px 0';
    addButton.style.backgroundColor = 'purple';
    addButton.style.color = '#fff';
    addButton.style.border = 'none';
    addButton.style.borderRadius = '5px';
    addButton.style.cursor = 'pointer';
    addButton.style.marginBottom = '10px';
    addButton.style.fontFamily = 'Poppins, sans-serif';

    var playButton = document.createElement('button');
    playButton.textContent = 'Play';
    playButton.style.width = '100%';
    playButton.style.padding = '10px 0';
    playButton.style.backgroundColor = 'purple';
    playButton.style.color = '#fff';
    playButton.style.border = 'none';
    playButton.style.borderRadius = '5px';
    playButton.style.cursor = 'pointer';
    playButton.style.marginBottom = '10px';
    playButton.style.fontFamily = 'Poppins, sans-serif';

    playButton.addEventListener('click', function() {
        var selectedSongName = songNameInput.value;
        if (selectedSongName && songs[selectedSongName]) {
            var url = songs[selectedSongName];
            audioElement.pause();
            audioElement.src = url;
            audioElement.play();
        } else {
            alert('Please select a song from the list.');
        }
    });

    modal.appendChild(closeButton);
    modal.appendChild(title);
    modal.appendChild(songNameInput);
    modal.appendChild(musicUrlInput);
    modal.appendChild(addButton);
    modal.appendChild(playButton);

    document.body.appendChild(modal);

    addButton.addEventListener('click', function() {
        var songName = songNameInput.value;
        var musicUrl = musicUrlInput.value;
        if (songName && musicUrl) {
            if (!songs[songName]) {
                songs[songName] = musicUrl;
                localStorage.setItem('songs', JSON.stringify(songs));
                songNameInput.value = '';
                musicUrlInput.value = '';
                displaySongs();
                alert('Song added successfully!');
            } else {
                alert('Song with the same name already exists.');
            }
        } else {
            alert('Please enter song name and URL.');
        }
    });

    function displaySongs() {
        while (modal.lastChild && modal.lastChild.tagName === 'UL') {
            modal.removeChild(modal.lastChild);
        }

        var songList = document.createElement('ul');
        songList.style.color = '#fff';
        for (var song in songs) {
            var listItem = document.createElement('li');
            listItem.textContent = song;
            listItem.style.cursor = 'pointer';
            listItem.addEventListener('click', function() {
                songNameInput.value = this.textContent;
            });
            songList.appendChild(listItem);
        }
        modal.appendChild(songList);
    }

    displaySongs();
});

function playMusic(url) {
    audioElement.pause();
    audioElement.src = url;
    audioElement.play();
}
