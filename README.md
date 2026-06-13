# Basic Music Player

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge" alt="Status">
</p>

> A clean, simple music player web app built with vanilla HTML, CSS, and JavaScript. Features a single-track demo player with play/pause, seek bar, and track navigation controls.

---

## Features

- **Audio Playback** -- Play and pause a demo MP3 track ("Reshmi Rumal" by Arjan Dhillon).
- **Seek Bar** -- Drag or click the progress bar to jump to any point in the song.
- **Track Controls** -- Previous and Next buttons (restart the track for this single-song demo).
- **Visual Feedback** -- Play/pause button icon toggles; progress bar updates in real time.
- **Responsive Design** -- Centered player card works on desktop, tablet, and mobile.
- **Keyboard Accessible** -- Controls are focusable and operable via keyboard.
- **Error Handling** -- Graceful fallbacks for unsupported audio formats and autoplay restrictions.

---

## How to Use

### Option 1: Open Directly
1. Clone or download this repository.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
3. Click the **play button** (center, pink circle) to start playback.
4. Drag the **progress bar** to seek through the track.
5. Use the **previous / next** buttons to restart the track.

### Option 2: Live Server (Recommended for Development)
```bash
# Using VS Code Live Server
npx live-server
```
Or use any local HTTP server of your choice. While the player works when opened directly via `file://`, using a local server avoids potential CORS and autoplay issues.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Styling, layout, hover effects, and responsive design |
| **JavaScript (ES6)** | Audio control logic, event handling, DOM manipulation |
| **Font Awesome 6** | Icon set for playback controls (play, pause, skip, nav) |

---

## Project Structure

```
Mini-Project-1/
├── .github/
│   └── workflows/
│       ├── daily-contribution.yml   # Scheduled daily commit workflow
│       └── bug-tracker.yml          # Automated bug & fix tracking
├── index.html                       # Main HTML page (music player UI)
├── main-css.css                     # All stylesheets
├── app.js                           # JavaScript audio control logic
├── arjan.jpg                        # Album art / artist image
├── Reshmi Rumal - Arjan Dhillon (DJJOhAL.Com).mp3  # Demo audio track
├── CONTRIBUTIONS.md                 # Auto-generated contribution log
├── bug_report.txt                   # Auto-generated bug tracking log
└── README.md                        # This file
```

---

## Track Details

| Track | Artist | Duration |
|-------|--------|----------|
| Reshmi Rumal | Arjan Dhillon | ~3:45 |

---

## Bug Fixes & Improvements

This project underwent a thorough code review and cleanup. The following issues were identified and fixed:

### JavaScript Fixes
- **Removed autoplay on page load** -- Original code used `if(song.play()) {...}` which attempted to auto-play the song. This is blocked by modern browsers and created an unreliable interval. Replaced with a proper `timeupdate` event listener.
- **Replaced `setInterval` with `timeupdate` event** -- The progress bar now updates via the native audio `timeupdate` event, which is more efficient and accurate than a polling interval.
- **Fixed seek bar behavior** -- The `progress.onchange` handler no longer forces playback on seek. The song stays paused if it was paused before the user dragged the slider.
- **Added forward/backward button handlers** -- `prevSong()` and `nextSong()` functions were missing. They now restart the track (or skip in a multi-track player).
- **Added audio error handling** -- A fallback error listener reports if the MP3 fails to load.
- **End-of-song reset** -- The play button and progress bar are properly reset when the track finishes.
- **Improved `Promise` handling for `song.play()`** -- The return value of `play()` is a Promise; `.then()` / `.catch()` are now used for proper handling.

### HTML Fixes
- **Fixed broken asset paths** -- Removed leading `/` from `src` attributes (`/arjan.jpg`, `/app.js`, `/Reshmi Rumal...mp3`) so the files resolve correctly when opened locally.
- **Added audio fallback text** -- "Your browser does not support the audio element" for unsupported browsers.
- **Improved accessibility** -- Added `aria-label`, `role="button"`, and `tabindex="0"` to all icon-only control buttons. Changed `alt` text from `"song_img"` to a descriptive `"Reshmi Rumal album art by Arjan Dhillon"`.

### CSS Fixes
- **Fixed typo** -- Changed `border: 8px solod #fff` to `border: 8px solid #fff` so the album art border renders correctly.
- **Added `box-sizing: border-box`** -- Global reset for consistent box model.
- **Added `appearance: none`** -- Full cross-browser support for range input styling.
- **Added `::-moz-range-thumb`** -- Firefox-specific thumb styling for the progress slider.
- **Added hover/focus states** -- Better visual feedback and keyboard focus indicators for interactive elements.

---

## Accessibility

- All icon-only buttons have `aria-label` attributes describing their function.
- Buttons have `role="button"` and `tabindex="0"` for keyboard navigation.
- The progress slider has a descriptive `aria-label`.
- Focus-visible outlines are provided for keyboard users.

---

## Browser Compatibility

| Browser | Status |
|---------|--------|
| Chrome | Fully supported |
| Firefox | Fully supported |
| Safari | Fully supported |
| Edge | Fully supported |

---

## License

This project is for educational purposes.

---

<p align="center">Made with ❤️ by <a href="https://github.com/Deep007h">Deep007h</a></p>

