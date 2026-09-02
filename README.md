# Web Music Player Site

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Semantic_&_A11y-E34F26?style=for-the-badge&logo=html5" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-Glassmorphism_&_Theming-1572B6?style=for-the-badge&logo=css3" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES6+_Web_Audio_API-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/Audio_DSP-10--Band_EQ_&_8D_Spatial-8b5cf6?style=for-the-badge&logo=audio-technica" alt="Web Audio">
  <img src="https://img.shields.io/badge/Visualizer-Canvas_60fps-1db954?style=for-the-badge&logo=canvas" alt="Canvas 60fps">
</p>

> A modern, high-performance, studio-grade web music player application built with Vanilla HTML5, modern CSS3 glassmorphism, and the Web Audio API. It transforms a basic audio player into a full-fledged music suite featuring real-time visualizers, a 10-band graphic equalizer with DSP effects, synchronized karaoke lyrics (LRC), a multi-track queue with drag-and-drop audio import, dynamic theme customization, sleep timer, and full Media Session & keyboard integration.

---

## Key Features

### 1. Web Audio DSP & 10-Band Graphic Equalizer
- **10-Band Graphic Equalizer**: Precise frequency shaping across `32Hz`, `64Hz`, `125Hz`, `250Hz`, `500Hz`, `1kHz`, `2kHz`, `4kHz`, `8kHz`, and `16kHz` (-12dB to +12dB).
- **Pro EQ Presets**: 11 factory presets (*Flat, Bass Boost, Treble Boost, Pop, Rock, Electronic, Hip-Hop, Acoustic, Vocal Clarity, Classical, Club/Dance*) + Custom user tweaking.
- **8D / Spatial Surround Audio Simulation**: Smooth automatic stereo panning oscillation for immersive headphone listening.
- **Master Preamp Gain Boost**: Clean signal amplification up to +6dB.
- **Playback Speed Controller**: Adjust playback speed from `0.5x` to `2.0x` with pitch preservation (`preservesPitch = true`).

### 2. Real-Time Audio Visualizer (Canvas 60+ FPS)
- **4 Visualizer Modes**:
  1. **Cyber Neon Bars**: Frequency spectrum analysis with reactive gradients, rounded bars, and dynamic peak bounce caps.
  2. **Oscilloscope Waveform**: Fluid time-domain spline with neon glowing aura.
  3. **Radial Circle Visualizer**: Circular outward-radiating audio spikes centered around the album artwork.
  4. **Beat-Reactive Particles**: Ambient particle physics system that bursts and floats with bass and sub-bass hits.
- High-DPI (Retina) DPR scaling for ultra-crisp rendering on all screens.

### 3. Queue, Playlist & Drag-and-Drop File Import
- **Curated Multi-Track Library**: Features the demo track (*"Reshmi Rumal"* by Arjan Dhillon) alongside high-fidelity curated audio tracks.
- **Custom Audio Importer**: Drag and drop any `.mp3`, `.wav`, `.ogg`, `.m4a`, or `.flac` files directly from your computer to play instantly.
- **Playlist Management**: Real-time search filter, track favorites (heart), track removal, and JSON playlist export.
- **Playback Modes**: True Fisher-Yates random shuffle and 3-state repeat (*Off*, *Repeat All*, *Repeat One*).

### 4. Synchronized Lyrics & Karaoke Engine
- **LRC Parser & Real-Time Sync**: Synchronizes line-by-line lyrics with audio timestamps.
- **Interactive Scrobble**: Click any line of lyrics to jump playback directly to that timestamp.
- **Custom Lyrics Editor**: Easily paste or edit LRC lyrics directly in the browser.

### 5. Dynamic Themes & Glassmorphism Aesthetics
- **6 Dynamic Theme Palettes**:
  - **Rosé Glow** (Neon Magenta & Soft Pink)
  - **Midnight Obsidian** (Deep Purple & Cyan)
  - **Cyberpunk 2077** (Electric Yellow, Cyan & Hot Red)
  - **Spotify Emerald** (Deep Charcoal & Spotify Green)
  - **Solar Amber** (Warm Sunset Coral & Golden Amber)
  - **AMOLED Dark** (Pure Obsidian & High Contrast White)
- **Vinyl Disc Spin Animation**: Album artwork seamlessly rotates like a vinyl turntable during playback.
- **Scrubber Tooltip & Buffer Indicator**: Displays time preview on hover and tracks buffered audio stream chunks.

### 6. Sleep Timer & Utilities
- **Smart Sleep Timer**: Set auto-pause for 5, 15, 30, 45, 60 minutes, End of Song, or a custom duration with a gentle 15-second fade-out.
- **Track Inspector**: View track metadata, audio format, bit depth, channel configuration, and duration.
- **Local Storage Persistence**: Automatically remembers your favorite tracks, custom theme preference, volume, and EQ settings.

---

## Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| <kbd>Space</kbd> or <kbd>K</kbd> | Play / Pause |
| <kbd>&larr;</kbd> or <kbd>J</kbd> | Seek backward 5s (Hold <kbd>Shift</kbd> for 10s) |
| <kbd>&rarr;</kbd> or <kbd>L</kbd> | Seek forward 5s (Hold <kbd>Shift</kbd> for 10s) |
| <kbd>&uarr;</kbd> / <kbd>&darr;</kbd> | Volume up / down (5%) |
| <kbd>M</kbd> | Mute / Unmute audio |
| <kbd>N</kbd> | Next track in queue |
| <kbd>P</kbd> | Previous track in queue |
| <kbd>S</kbd> | Toggle Shuffle mode |
| <kbd>R</kbd> | Cycle Repeat mode (Off &rarr; All &rarr; One) |
| <kbd>E</kbd> | Toggle 10-Band Equalizer modal |
| <kbd>V</kbd> | Cycle Visualizer mode |
| <kbd>Q</kbd> | Toggle Playlist / Queue drawer |
| <kbd>Y</kbd> | Toggle Synchronized Lyrics drawer |
| <kbd>F</kbd> | Toggle Fullscreen mode |
| <kbd>?</kbd> | Show Keyboard Shortcuts cheat sheet |

---

## Project Structure

```
Mini-Project-1/
├── index.html                       # Semantic HTML5 UI, modals, drawers & visualizer canvas
├── main-css.css                     # Glassmorphism styling, themes, animations & responsive layout
├── app.js                           # Modular ES6 Web Audio DSP, Visualizers, Lyrics & Queue logic
├── arjan.jpg                        # Featured album art
├── Reshmi Rumal - Arjan Dhillon (DJJOhAL.Com).mp3  # Featured demo track
├── CONTRIBUTIONS.md                 # Contribution history
├── bug_report.txt                   # Automated test & bug tracker log
└── README.md                        # Documentation
```

---

## How to Run

### Option 1: Open Directly
Simply double-click `index.html` or open it in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari).

### Option 2: Local HTTP Server (Recommended for Web Audio features)
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js npx
npx serve .
```
Navigate to `http://localhost:8000` in your browser.

---

## Technologies Used

- **HTML5**: Semantic document layout, accessible `<dialog>` modals, `<canvas>`, `<audio>`.
- **CSS3**: CSS Custom Properties (Theming), CSS Grid, Flexbox, Glassmorphism (`backdrop-filter`), CSS Animations.
- **JavaScript (ES6+)**: Web Audio API (`AudioContext`, `BiquadFilterNode`, `StereoPannerNode`, `GainNode`, `AnalyserNode`), Canvas 2D Rendering Context, MediaSession API, LocalStorage API.
- **Font Awesome 6**: Vector icons for playback, DSP controls, and navigation.
- **Google Fonts**: Outfit & JetBrains Mono typography.

---

<p align="center">Crafted with ❤️ by <a href="https://github.com/Deep007h">Deep007h</a></p>
