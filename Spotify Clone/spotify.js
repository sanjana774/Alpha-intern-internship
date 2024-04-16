const songs = [
    { title: 'Song 1', artist: 'Artist 1', file: 'song1.mp3' },
    { title: 'Song 2', artist: 'Artist 2', file: 'song2.mp3' }
    // Add more songs as needed
];

const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const songList = document.getElementById('song-list');

let currentSongIndex = 0;

// Initialize the audio player with the first song
loadSong(currentSongIndex);

// Load a song into the audio player
function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.file;
    audioPlayer.load();
    updateSongInfo(song);
}

// Update the song information displayed on the webpage
function updateSongInfo(song) {
    const songElements = document.querySelectorAll('.song');
    songElements.forEach((element, index) => {
        if (index === currentSongIndex) {
            element.classList.add('current-song');
        } else {
            element.classList.remove('current-song');
        }
    });
}

// Event listeners for play/pause, previous, and next buttons
playBtn.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playBtn.textContent = 'Play';
    }
});

prevBtn.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

nextBtn.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});