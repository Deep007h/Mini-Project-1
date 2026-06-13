/**
 * Music Player Control Logic
 * Handles play/pause, seek, and track navigation for a single-track audio player.
 */

const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcn = document.getElementById("ctrlIcn");
let isPlaying = false;

// --- Metadata loaded ---
// Set the progress bar max duration once audio metadata is available
song.addEventListener("loadedmetadata", function () {
    progress.max = song.duration;
    progress.value = 0;
});

// --- Error handling ---
// If audio fails to load, show a helpful message in the console
song.addEventListener("error", function () {
    console.error("Failed to load audio file. Check that the MP3 file exists and is a valid audio file.");
});

// --- Time update ---
// Update the progress bar as the song plays, using the proper 'timeupdate' event
song.addEventListener("timeupdate", function () {
    if (isPlaying) {
        progress.value = song.currentTime;
    }
});

// --- Play / Pause ---
function playpause() {
    if (isPlaying) {
        song.pause();
        ctrlIcn.classList.remove("fa-pause");
        ctrlIcn.classList.add("fa-play");
        isPlaying = false;
    } else {
        // Resume from where it was paused, or start from beginning
        song.play().then(function () {
            ctrlIcn.classList.add("fa-pause");
            ctrlIcn.classList.remove("fa-play");
            isPlaying = true;
        }).catch(function (err) {
            console.warn("Playback prevented by browser autoplay policy:", err);
        });
    }
}

// --- Seek bar (progress.onchange via 'input' event for live feedback) ---
progress.addEventListener("input", function () {
    // Update current time while dragging (live scrub preview)
    song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
    // On release, seek to position.
    // If the song was playing before, keep playing from the new position.
    // If it was paused, stay paused (just seek).
    song.currentTime = progress.value;
    if (!isPlaying) {
        song.pause(); // Ensure it stays paused after seek
    }
});

// --- Keyboard support for the seek bar ---
// Range inputs already support arrow keys natively, but we sync the audio when changed via keyboard
progress.addEventListener("keyup", function () {
    song.currentTime = progress.value;
});

// --- Previous track (restart current song if near beginning, else restart) ---
function prevSong() {
    if (song.currentTime > 3) {
        // If more than 3 seconds in, restart the track
        song.currentTime = 0;
        progress.value = 0;
    } else {
        // Already near the beginning, restart
        song.currentTime = 0;
        progress.value = 0;
    }
}

// --- Next track (not applicable for single track; restart for demo) ---
function nextSong() {
    // For a single-track player, restart the track
    // In a full player, this would skip to the next song in a playlist
    song.currentTime = 0;
    progress.value = 0;
    if (!isPlaying) {
        // Optionally start playing if the user hits next
        playpause();
    }
}

// --- Auto-play prevention on page load ---
// Ensure the song does not autoplay when the page loads
// The progress bar interval and play logic have been removed to avoid autoplay issues
console.log("Music player ready. Click play to start.");

// --- End of song handler ---
song.addEventListener("ended", function () {
    // Reset play button when song ends
    ctrlIcn.classList.remove("fa-pause");
    ctrlIcn.classList.add("fa-play");
    isPlaying = false;
    progress.value = 0;
    song.currentTime = 0;
});
