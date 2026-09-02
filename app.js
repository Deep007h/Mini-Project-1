/**
 * Web Music Player Site
 * Professional Web Audio DSP, Visualizer, Playlist Engine, Synced Lyrics & Theming
 */

// ==========================================================================
// 1. Initial State & Track Library
// ==========================================================================

const DEFAULT_PLAYLIST = [
    {
        id: "track-1",
        title: "Reshmi Rumal",
        artist: "Arjan Dhillon",
        album: "Single Release",
        genre: "Punjabi Folk / Pop",
        format: "MP3 Audio (320kbps)",
        src: "Reshmi Rumal - Arjan Dhillon (DJJOhAL.Com).mp3",
        art: "arjan.jpg",
        duration: 225,
        isCustom: false,
        lyrics: `[00:00.00] Reshmi Rumal - Arjan Dhillon
[00:05.00] Music Beat Starts...
[00:12.00] Ho reshmi rumal utte naap le leya
[00:16.50] Dil vich sohneya ve thaap le leya
[00:21.00] Nakhra ae mehanga sadi taur vakhri
[00:25.50] Gallan vich mithiyan te lor vakhri
[00:30.00] Arjan de geetan wangu vajje gaddi ch
[00:34.50] Tere piche auna jatt shonk vakhri
[00:39.00] Ho reshmi rumal utte naap le leya
[00:43.50] Dil vich sohneya ve thaap le leya
[00:48.00] Instrumental Groove & Drop
[00:58.00] Charche ne hunde jithe pair dharida
[01:03.00] Rabb di raza de vich raazi rahi da
[01:07.50] Chhad de tu fikar bana li jodi aan
[01:12.00] Yaariyan de vich na hisaab kari da
[01:16.50] Arjan Dhillon on the track!
[01:21.00] Ho reshmi rumal utte naap le leya
[01:25.50] Dil vich sohneya ve thaap le leya
[01:30.00] Hook Melody Reprise
[01:45.00] Gabru di taur dekh vekh dunya
[01:49.50] Tere nal laike poora saanh bunya
[01:54.00] Reshmi rumal sada chete rakhin tu
[01:58.50] Akhiyan ch surma saja ke rakhin tu
[02:03.00] Dil vich sohneya ve thaap le leya
[02:08.00] Reshmi Rumal &bull; Outro Fade`
    },
    {
        id: "track-2",
        title: "Midnight City Lights",
        artist: "Synthwave Sunset",
        album: "Neon Dreams EP",
        genre: "Retrowave / Synthwave",
        format: "High-Fi Audio",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        art: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
        duration: 372,
        isCustom: false,
        lyrics: `[00:00.00] Midnight City Lights &bull; Synthwave Sunset
[00:08.00] Cruising down the neon highway
[00:15.50] Digital horizon in the rear view
[00:23.00] Analog synthesizers echo through the night
[00:30.00] Cyberpunk vibes and retro lights
[00:38.00] (Synth Solo & Bassline)
[00:52.00] Speeding through the midnight rain
[01:05.00] Glowing grid under the hood
[01:20.00] Reaching the neon dawn`
    },
    {
        id: "track-3",
        title: "Lo-Fi Study Cafe",
        artist: "Chillhop Dreams",
        album: "Coffee & Code Vol. 1",
        genre: "Lo-Fi Hip-Hop / Chill",
        format: "High-Fi Audio",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        art: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80",
        duration: 423,
        isCustom: false,
        lyrics: `[00:00.00] Lo-Fi Study Cafe &bull; Chillhop Dreams
[00:10.00] Warm coffee on a rainy morning
[00:20.00] Gentle vinyl crackle in the background
[00:35.00] Deep focus, relaxed mind
[00:50.00] Smooth Rhodes chords cascading
[01:05.00] Calming chill beats for deep work
[01:20.00] Peaceful fade-out`
    },
    {
        id: "track-4",
        title: "Neon Cyber Drive",
        artist: "Neon Overdrive",
        album: "Night City Anthems",
        genre: "Cyberpunk / Darksynth",
        format: "High-Fi Audio",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        art: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80",
        duration: 346,
        isCustom: false,
        lyrics: `[00:00.00] Neon Cyber Drive &bull; Neon Overdrive
[00:06.00] Neural network handshake confirmed
[00:14.00] High voltage bassline incoming
[00:26.00] Maximum overdrive engaged
[00:40.00] Cybernetic beats taking over
[00:58.00] Drop the bass!
[01:15.00] System overclocked`
    },
    {
        id: "track-5",
        title: "Serene Horizon",
        artist: "Acoustic Horizon",
        album: "Earth & Strings",
        genre: "Acoustic / Ambient Folk",
        format: "High-Fi Audio",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        art: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        duration: 302,
        isCustom: false,
        lyrics: `[00:00.00] Serene Horizon &bull; Acoustic Horizon
[00:08.00] Gentle acoustic fingerpicking
[00:18.00] Mountain morning breeze
[00:30.00] Warm sunset over open fields
[00:45.00] Organic harmony and calm spirit
[01:05.00] Sweet melodic peaceful outro`
    }
];

// EQ Presets Definition
const EQ_PRESETS = {
    flat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    bass: [6, 5.5, 4, 2, 0, 0, 0, 1, 2, 3],
    treble: [-1.5, -1, 0, 1, 2, 3.5, 5, 6, 7, 7],
    pop: [-1.5, -1, 1, 2.5, 4, 3.5, 2, 0, 1.5, 2],
    rock: [5, 4, 2.5, 1, -1, -0.5, 2, 3.5, 4.5, 5],
    electronic: [5.5, 5, 3, 0, -1, 1, 2, 4, 5.5, 6],
    hiphop: [6.5, 6, 4, 1.5, -0.5, 0.5, 1.5, 2.5, 4, 4.5],
    acoustic: [3, 2.5, 1.5, 1, 1.5, 2, 2.5, 3, 3.5, 3],
    vocal: [-2, -2, -1, 1, 3.5, 4.5, 4, 2.5, 1, 0],
    classical: [4, 3.5, 2.5, 2, -1, -1, 1.5, 3, 3.5, 4],
    club: [4.5, 4, 3, 2, 0, 0, 2, 3.5, 4, 4.5],
    custom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

const EQ_FREQUENCIES = [32, 64, 125, 250, 500, 1000, 2000, 4000, 8000, 16000];
const VIS_MODES = ["Bars", "Wave", "Radial", "Particles", "Off"];

// ==========================================================================
// 2. Application Core Class
// ==========================================================================

class WebMusicPlayerApp {
    constructor() {
        // State
        this.playlist = this.loadPlaylist();
        this.currentTrackIndex = 0;
        this.isPlaying = false;
        this.isMuted = false;
        this.previousVolume = 0.9;
        this.currentVolume = 0.9;
        this.isShuffle = false;
        this.repeatMode = 0; // 0: Off, 1: Repeat All, 2: Repeat One
        this.favorites = this.loadFavorites();
        this.currentTab = "all";
        this.currentFilterQuery = "";
        this.visModeIndex = 0; // Bars
        this.showRemainingTime = false;
        this.currentSpeed = 1.0;
        this.spatialAudioActive = false;
        this.spatialAngle = 0;
        this.spatialSpeed = 0.15;
        this.sleepTimerId = null;
        this.sleepTimerEndTimestamp = null;
        this.parsedLyrics = [];
        this.activeLyricIndex = -1;

        // DOM Element Cache
        this.initDOMElements();

        // Audio & Web Audio API
        this.initAudioNodes();

        // Initialize UI & Events
        this.initVisualizer();
        this.initEventListeners();
        this.initKeyboardShortcuts();
        this.initTheme();
        this.initMediaSession();

        // Set initial volume
        this.setVolume(this.currentVolume);

        // Load Initial Track
        this.loadTrack(0, false);
        this.renderQueueList();

        console.log("Web Music Player Site initialized successfully.");
    }

    // ----------------------------------------------------------------------
    // Storage Helpers
    // ----------------------------------------------------------------------
    loadPlaylist() {
        const savedCustom = localStorage.getItem("web_music_player_custom_tracks") || localStorage.getItem("music_player_custom_tracks");
        if (savedCustom) {
            try {
                const parsed = JSON.parse(savedCustom);
                return [...DEFAULT_PLAYLIST, ...parsed];
            } catch (e) {
                console.error("Failed to parse saved custom tracks:", e);
            }
        }
        return [...DEFAULT_PLAYLIST];
    }

    saveCustomTracks() {
        const customOnly = this.playlist.filter(t => t.isCustom);
        localStorage.setItem("web_music_player_custom_tracks", JSON.stringify(customOnly));
    }

    loadFavorites() {
        const saved = localStorage.getItem("web_music_player_favorites") || localStorage.getItem("music_player_favorites");
        if (saved) {
            try { return JSON.parse(saved); } catch (e) {}
        }
        return ["track-1"];
    }

    saveFavorites() {
        localStorage.setItem("web_music_player_favorites", JSON.stringify(this.favorites));
    }

    // ----------------------------------------------------------------------
    // DOM Elements Mapping
    // ----------------------------------------------------------------------
    initDOMElements() {
        this.audio = document.getElementById("song");
        this.playerCard = document.getElementById("playerCard");
        this.playBtn = document.getElementById("playBtn");
        this.ctrlIcn = document.getElementById("ctrlIcn");
        this.artPlayOverlay = document.getElementById("artPlayOverlay");
        this.artPlayIcn = document.getElementById("artPlayIcn");
        this.prevBtn = document.getElementById("prevBtn");
        this.nextBtn = document.getElementById("nextBtn");
        this.rewind10Btn = document.getElementById("rewind10Btn");
        this.forward10Btn = document.getElementById("forward10Btn");
        this.shuffleBtn = document.getElementById("shuffleBtn");
        this.shuffleDot = document.getElementById("shuffleDot");
        this.repeatBtn = document.getElementById("repeatBtn");
        this.repeatIcn = document.getElementById("repeatIcn");
        this.repeatBadge = document.getElementById("repeatBadge");
        
        // Progress & Time
        this.progress = document.getElementById("progress");
        this.progressFill = document.getElementById("progressFill");
        this.bufferBar = document.getElementById("bufferBar");
        this.progressContainer = document.getElementById("progressContainer");
        this.currentTimeEl = document.getElementById("currentTime");
        this.durationTimeEl = document.getElementById("durationTime");
        this.scrubTooltip = document.getElementById("scrubTooltip");

        // Track Artwork & Info
        this.artworkWrapper = document.getElementById("artworkWrapper");
        this.albumArt = document.getElementById("albumArt");
        this.trackTitle = document.getElementById("trackTitle");
        this.trackArtist = document.getElementById("trackArtist");
        this.trackAlbum = document.getElementById("trackAlbum");
        this.favBtn = document.getElementById("favBtn");
        this.favIcn = document.getElementById("favIcn");
        this.techPill = document.getElementById("techPill");
        this.trackInfoBtn = document.getElementById("trackInfoBtn");

        // Volume & Tools
        this.muteBtn = document.getElementById("muteBtn");
        this.volumeIcn = document.getElementById("volumeIcn");
        this.volumeSlider = document.getElementById("volumeSlider");
        this.volumeFill = document.getElementById("volumeFill");
        this.volumeVal = document.getElementById("volumeVal");
        this.speedBtn = document.getElementById("speedBtn");
        this.speedVal = document.getElementById("speedVal");
        this.spatialBtn = document.getElementById("spatialBtn");
        this.spatialVal = document.getElementById("spatialVal");
        this.fullscreenBtn = document.getElementById("fullscreenBtn");
        this.fullscreenIcn = document.getElementById("fullscreenIcn");

        // Visualizer & Canvas
        this.canvas = document.getElementById("visualizerCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.visModeBtn = document.getElementById("visModeBtn");
        this.visModeBadge = document.getElementById("visModeBadge");
        this.ambientGlow = document.getElementById("ambientGlow");

        // Drawers & Modals
        this.queueToggleBtn = document.getElementById("queueToggleBtn");
        this.queueDrawer = document.getElementById("queueDrawer");
        this.closeQueueBtn = document.getElementById("closeQueueBtn");
        this.queueCountBadge = document.getElementById("queueCountBadge");
        this.queueList = document.getElementById("queueList");
        this.queueSearchInput = document.getElementById("queueSearchInput");
        this.clearSearchBtn = document.getElementById("clearSearchBtn");
        this.fileInput = document.getElementById("fileInput");
        this.dropZone = document.getElementById("dropZone");
        this.clearCustomTracksBtn = document.getElementById("clearCustomTracksBtn");
        this.exportPlaylistBtn = document.getElementById("exportPlaylistBtn");

        this.lyricsToggleBtn = document.getElementById("lyricsToggleBtn");
        this.lyricsDrawer = document.getElementById("lyricsDrawer");
        this.closeLyricsBtn = document.getElementById("closeLyricsBtn");
        this.lyricsScrollBox = document.getElementById("lyricsScrollBox");
        this.lyricsContainer = document.getElementById("lyricsContainer");
        this.lyricsTrackTitle = document.getElementById("lyricsTrackTitle");
        this.lyricsTrackArtist = document.getElementById("lyricsTrackArtist");
        this.customLyricsBtn = document.getElementById("customLyricsBtn");

        this.eqToggleBtn = document.getElementById("eqToggleBtn");
        this.eqModal = document.getElementById("eqModal");
        this.closeEqBtn = document.getElementById("closeEqBtn");
        this.eqEnableSwitch = document.getElementById("eqEnableSwitch");
        this.eqStatusLabel = document.getElementById("eqStatusLabel");
        this.eqPresetSelect = document.getElementById("eqPresetSelect");
        this.resetEqBtn = document.getElementById("resetEqBtn");
        this.preampSlider = document.getElementById("preampSlider");
        this.preampVal = document.getElementById("preampVal");
        this.spatialSwitch = document.getElementById("spatialSwitch");
        this.spatialSpeedSlider = document.getElementById("spatialSpeedSlider");

        this.sleepTimerBtn = document.getElementById("sleepTimerBtn");
        this.sleepTimerModal = document.getElementById("sleepTimerModal");
        this.closeSleepBtn = document.getElementById("closeSleepBtn");
        this.sleepTimerBadge = document.getElementById("sleepTimerBadge");
        this.customTimerMinutes = document.getElementById("customTimerMinutes");
        this.setCustomTimerBtn = document.getElementById("setCustomTimerBtn");
        this.timerActiveStatus = document.getElementById("timerActiveStatus");
        this.timerCountdown = document.getElementById("timerCountdown");
        this.cancelTimerBtn = document.getElementById("cancelTimerBtn");

        this.shortcutsBtn = document.getElementById("shortcutsBtn");
        this.shortcutsModal = document.getElementById("shortcutsModal");
        this.closeShortcutsBtn = document.getElementById("closeShortcutsBtn");

        this.trackInfoModal = document.getElementById("trackInfoModal");
        this.closeTrackInfoBtn = document.getElementById("closeTrackInfoBtn");
        this.infoTitle = document.getElementById("infoTitle");
        this.infoArtist = document.getElementById("infoArtist");
        this.infoAlbum = document.getElementById("infoAlbum");
        this.infoDuration = document.getElementById("infoDuration");
        this.infoFormat = document.getElementById("infoFormat");

        this.themeBtn = document.getElementById("themeBtn");
        this.themeMenu = document.getElementById("themeMenu");
        this.toastContainer = document.getElementById("toastContainer");
    }

    // ----------------------------------------------------------------------
    // 3. Web Audio API Engine & Equalizer Setup
    // ----------------------------------------------------------------------
    initAudioNodes() {
        this.audioCtx = null;
        this.sourceNode = null;
        this.eqFilters = [];
        this.preampGain = null;
        this.stereoPanner = null;
        this.masterGain = null;
        this.analyser = null;
        this.audioNodesReady = false;
    }

    ensureAudioContext() {
        // In local file mode (file://), Chrome/Safari block MediaElementAudioSourceNode for security reasons,
        // which silences the audio. So on file:// we let native <audio> play directly through hardware speakers!
        if (window.location.protocol === "file:") {
            return;
        }

        if (this.audioNodesReady) {
            if (this.audioCtx && this.audioCtx.state === "suspended") {
                this.audioCtx.resume();
            }
            return;
        }

        try {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextClass) return;

            this.audioCtx = new AudioContextClass();
            if (this.audioCtx.state === "suspended") {
                this.audioCtx.resume();
            }

            // Create media element source
            this.sourceNode = this.audioCtx.createMediaElementSource(this.audio);

            // 10-Band Biquad Filters
            let prevNode = this.sourceNode;
            this.eqFilters = EQ_FREQUENCIES.map((freq, idx) => {
                const filter = this.audioCtx.createBiquadFilter();
                if (idx === 0) {
                    filter.type = "lowshelf";
                } else if (idx === EQ_FREQUENCIES.length - 1) {
                    filter.type = "highshelf";
                } else {
                    filter.type = "peaking";
                    filter.Q.value = 1.4;
                }
                filter.frequency.value = freq;
                filter.gain.value = 0;

                prevNode.connect(filter);
                prevNode = filter;
                return filter;
            });

            // Preamp Gain Node
            this.preampGain = this.audioCtx.createGain();
            this.preampGain.gain.value = 1.0;
            prevNode.connect(this.preampGain);
            prevNode = this.preampGain;

            // Stereo Panner Node for 8D Spatial Audio
            if (this.audioCtx.createStereoPanner) {
                this.stereoPanner = this.audioCtx.createStereoPanner();
                this.stereoPanner.pan.value = 0;
                prevNode.connect(this.stereoPanner);
                prevNode = this.stereoPanner;
            }

            // Master Gain Node (Volume + Boost)
            this.masterGain = this.audioCtx.createGain();
            this.masterGain.gain.value = this.currentVolume;
            prevNode.connect(this.masterGain);

            // Analyser Node
            this.analyser = this.audioCtx.createAnalyser();
            this.analyser.fftSize = 256;
            this.analyser.smoothingTimeConstant = 0.85;
            this.masterGain.connect(this.analyser);

            // Connect to output destination
            this.analyser.connect(this.audioCtx.destination);

            this.audioNodesReady = true;
            this.updateVolumeFill(this.currentVolume);
        } catch (e) {
            console.warn("Web Audio API routing fallback to native audio:", e);
            this.audioNodesReady = false;
        }
    }

    setEqGain(bandFreq, gainValue) {
        if (!this.audioNodesReady) return;
        const filter = this.eqFilters.find(f => f.frequency.value === bandFreq);
        if (filter) {
            filter.gain.setTargetAtTime(gainValue, this.audioCtx.currentTime, 0.05);
        }
    }

    applyEqPreset(presetKey) {
        const gains = EQ_PRESETS[presetKey];
        if (!gains) return;

        EQ_FREQUENCIES.forEach((freq, idx) => {
            const val = gains[idx];
            this.setEqGain(freq, val);

            // Update UI Slider & Badge
            const slider = document.querySelector(`.eq-slider[data-band="${freq}"]`);
            const badge = document.getElementById(`eqVal_${freq}`);
            if (slider) slider.value = val;
            if (badge) badge.textContent = `${val > 0 ? "+" : ""}${val}dB`;
        });

        if (this.eqPresetSelect) {
            this.eqPresetSelect.value = presetKey;
        }

        this.showToast(`Applied EQ Preset: ${presetKey.toUpperCase()}`, "fa-sliders");
    }

    // ----------------------------------------------------------------------
    // 4. Real-time Visualizer Engine (Canvas 60+ FPS)
    // ----------------------------------------------------------------------
    initVisualizer() {
        this.dpr = window.devicePixelRatio || 1;
        this.canvas.width = 320 * this.dpr;
        this.canvas.height = 320 * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);

        // Particle mode pool
        this.particles = Array.from({ length: 45 }, () => ({
            x: 160,
            y: 160,
            radius: Math.random() * 3 + 1,
            color: '#8b5cf6',
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3,
            alpha: Math.random() * 0.8 + 0.2
        }));

        this.renderVisualizer = this.renderVisualizer.bind(this);
        requestAnimationFrame(this.renderVisualizer);
    }

    renderVisualizer() {
        requestAnimationFrame(this.renderVisualizer);

        const width = 320;
        const height = 320;
        const ctx = this.ctx;

        ctx.clearRect(0, 0, width, height);

        // Run 8D Spatial Panner Animation if active
        if (this.spatialAudioActive && this.stereoPanner && this.isPlaying && this.audioCtx) {
            this.spatialAngle += this.spatialSpeed * 0.05;
            const panVal = Math.sin(this.spatialAngle);
            this.stereoPanner.pan.setTargetAtTime(panVal, this.audioCtx.currentTime, 0.05);
        }

        if (VIS_MODES[this.visModeIndex] === "Off") return;

        let dataArray = new Uint8Array(64);
        if (this.analyser && this.isPlaying) {
            if (VIS_MODES[this.visModeIndex] === "Wave") {
                dataArray = new Uint8Array(this.analyser.fftSize);
                this.analyser.getByteTimeDomainData(dataArray);
            } else {
                dataArray = new Uint8Array(this.analyser.frequencyBinCount);
                this.analyser.getByteFrequencyData(dataArray);
            }
        } else if (this.isPlaying) {
            // Simulated energetic wave when playing (works on file:// mode too!)
            for (let i = 0; i < dataArray.length; i++) {
                dataArray[i] = 75 + Math.sin(Date.now() * 0.008 + i * 0.35) * 55;
            }
        } else {
            // Idle subtle synthetic wave
            for (let i = 0; i < dataArray.length; i++) {
                dataArray[i] = 10 + Math.sin(Date.now() * 0.003 + i * 0.2) * 8;
            }
        }

        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#f53192';
        const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim() || '#ff70a6';

        const mode = VIS_MODES[this.visModeIndex];

        // Mode 1: Neon Spectrum Bars
        if (mode === "Bars") {
            const barCount = 32;
            const barWidth = 6;
            const spacing = 3.5;
            const totalWidth = barCount * (barWidth + spacing);
            const startX = (width - totalWidth) / 2;

            for (let i = 0; i < barCount; i++) {
                const rawVal = dataArray[i * 2] || 0;
                const barHeight = Math.max(4, (rawVal / 255) * 110);
                const x = startX + i * (barWidth + spacing);
                const y = height - barHeight - 15;

                const grad = ctx.createLinearGradient(0, y, 0, y + barHeight);
                grad.addColorStop(0, primaryColor);
                grad.addColorStop(1, secondaryColor);

                ctx.fillStyle = grad;
                ctx.shadowColor = primaryColor;
                ctx.shadowBlur = this.isPlaying ? 8 : 2;

                ctx.beginPath();
                ctx.roundRect(x, y, barWidth, barHeight, 3);
                ctx.fill();

                // Peak Cap
                ctx.fillStyle = "#ffffff";
                ctx.shadowBlur = 4;
                ctx.beginPath();
                ctx.roundRect(x, y - 4, barWidth, 2, 1);
                ctx.fill();
            }
            ctx.shadowBlur = 0;
        }

        // Mode 2: Oscilloscope Waveform
        else if (mode === "Wave") {
            ctx.lineWidth = 3;
            ctx.strokeStyle = primaryColor;
            ctx.shadowColor = primaryColor;
            ctx.shadowBlur = this.isPlaying ? 12 : 4;

            ctx.beginPath();
            const sliceWidth = width / dataArray.length;
            let x = 0;

            for (let i = 0; i < dataArray.length; i++) {
                const v = dataArray[i] / 128.0;
                const y = (v * height) / 2;

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
                x += sliceWidth;
            }
            ctx.stroke();
            ctx.shadowBlur = 0;
        }

        // Mode 3: Radial Circle
        else if (mode === "Radial") {
            const centerX = width / 2;
            const centerY = height / 2;
            const baseRadius = 108;
            const points = 48;

            ctx.save();
            ctx.translate(centerX, centerY);

            for (let i = 0; i < points; i++) {
                const angle = (i / points) * Math.PI * 2;
                const freqVal = dataArray[i % 32] || 0;
                const spike = (freqVal / 255) * 35;

                const x1 = Math.cos(angle) * baseRadius;
                const y1 = Math.sin(angle) * baseRadius;
                const x2 = Math.cos(angle) * (baseRadius + spike);
                const y2 = Math.sin(angle) * (baseRadius + spike);

                ctx.strokeStyle = i % 2 === 0 ? primaryColor : secondaryColor;
                ctx.lineWidth = 2.5;
                ctx.shadowColor = primaryColor;
                ctx.shadowBlur = this.isPlaying ? 6 : 0;

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
            ctx.restore();
            ctx.shadowBlur = 0;
        }

        // Mode 4: Beat-Reactive Particles
        else if (mode === "Particles") {
            const bassEnergy = (dataArray[0] + dataArray[1] + dataArray[2] + dataArray[3]) / 4;
            const boost = bassEnergy > 120 ? 2.2 : 1;

            this.particles.forEach(p => {
                p.x += p.vx * boost;
                p.y += p.vy * boost;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.fillStyle = primaryColor;
                ctx.globalAlpha = p.alpha;
                ctx.shadowColor = primaryColor;
                ctx.shadowBlur = boost > 1 ? 10 : 3;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius * (boost > 1 ? 1.5 : 1), 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.globalAlpha = 1.0;
            ctx.shadowBlur = 0;
        }
    }

    cycleVisualizerMode() {
        this.visModeIndex = (this.visModeIndex + 1) % VIS_MODES.length;
        const newMode = VIS_MODES[this.visModeIndex];
        this.visModeBadge.textContent = newMode;
        this.showToast(`Visualizer: ${newMode}`, "fa-chart-simple");
    }

    // ----------------------------------------------------------------------
    // 5. Playback Controls & Track Navigation
    // ----------------------------------------------------------------------
    loadTrack(index, autoPlay = true) {
        if (index < 0 || index >= this.playlist.length) return;

        this.currentTrackIndex = index;
        const track = this.playlist[index];

        // Check if src is already set to avoid reload loop
        const currentSrc = this.audio.getAttribute("src") || this.audio.src;
        if (!currentSrc || !currentSrc.endsWith(track.src)) {
            this.audio.src = track.src;
            this.audio.load();
        }

        this.albumArt.src = track.art;
        this.albumArt.alt = `${track.title} album art by ${track.artist}`;
        this.trackTitle.textContent = track.title;
        this.trackArtist.textContent = track.artist;
        this.trackAlbum.textContent = `${track.album} &bull; ${track.genre}`;
        this.techPill.innerHTML = `<i class="fa-solid fa-bolt"></i> ${track.format.split(' ')[0] || 'AUDIO'}`;

        // Reset Scrubber
        this.progress.value = 0;
        this.progressFill.style.width = "0%";
        this.currentTimeEl.textContent = "0:00";
        this.durationTimeEl.textContent = this.formatTime(track.duration || 0);

        // Update Lyrics
        this.parseLRC(track.lyrics || "");
        this.lyricsTrackTitle.textContent = track.title;
        this.lyricsTrackArtist.textContent = track.artist;

        // Update Favorite status
        this.updateFavButton();

        // Update Queue UI Active Item
        this.renderQueueList();

        // Update Media Session
        this.updateMediaSessionMetadata();

        if (autoPlay) {
            this.play();
        } else {
            this.pause();
        }
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        this.ensureAudioContext();
        if (this.audioCtx && this.audioCtx.state === "suspended") {
            this.audioCtx.resume();
        }

        // Set native audio volume
        this.audio.volume = Math.min(1.0, this.currentVolume);

        const playPromise = this.audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                this.isPlaying = true;
                this.ctrlIcn.classList.remove("fa-play");
                this.ctrlIcn.classList.add("fa-pause");
                this.artPlayIcn.classList.remove("fa-play");
                this.artPlayIcn.classList.add("fa-pause");
                this.artworkWrapper.classList.add("playing");
                this.artworkWrapper.classList.remove("paused");
                this.playerCard.classList.add("playing");

                if ('mediaSession' in navigator) {
                    navigator.mediaSession.playbackState = 'playing';
                }
            }).catch(err => {
                console.warn("Playback error or browser autoplay policy:", err);
                this.showToast("Click play to start audio playback", "fa-circle-info");
            });
        }
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.ctrlIcn.classList.remove("fa-pause");
        this.ctrlIcn.classList.add("fa-play");
        this.artPlayIcn.classList.remove("fa-pause");
        this.artPlayIcn.classList.add("fa-play");
        this.artworkWrapper.classList.remove("playing");
        this.artworkWrapper.classList.add("paused");
        this.playerCard.classList.remove("playing");

        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = 'paused';
        }
    }

    nextTrack() {
        if (this.isShuffle) {
            let nextIdx;
            if (this.playlist.length > 1) {
                do {
                    nextIdx = Math.floor(Math.random() * this.playlist.length);
                } while (nextIdx === this.currentTrackIndex);
            } else {
                nextIdx = 0;
            }
            this.loadTrack(nextIdx, true);
        } else {
            let nextIdx = this.currentTrackIndex + 1;
            if (nextIdx >= this.playlist.length) {
                if (this.repeatMode === 1) { // Repeat All
                    nextIdx = 0;
                } else {
                    this.pause();
                    this.progress.value = 0;
                    this.progressFill.style.width = "0%";
                    return;
                }
            }
            this.loadTrack(nextIdx, true);
        }
    }

    prevTrack() {
        if (this.audio.currentTime > 3) {
            this.audio.currentTime = 0;
            this.progress.value = 0;
            this.progressFill.style.width = "0%";
        } else {
            let prevIdx = this.currentTrackIndex - 1;
            if (prevIdx < 0) {
                prevIdx = this.playlist.length - 1;
            }
            this.loadTrack(prevIdx, true);
        }
    }

    seekRelative(seconds) {
        if (!this.audio.duration) return;
        this.audio.currentTime = Math.min(Math.max(0, this.audio.currentTime + seconds), this.audio.duration);
        this.updateProgressUI();
        this.showToast(`${seconds > 0 ? "+" : ""}${seconds}s`, seconds > 0 ? "fa-rotate-right" : "fa-rotate-left");
    }

    toggleShuffle() {
        this.isShuffle = !this.isShuffle;
        this.shuffleBtn.classList.toggle("active", this.isShuffle);
        this.showToast(`Shuffle: ${this.isShuffle ? "ON" : "OFF"}`, "fa-shuffle");
    }

    cycleRepeatMode() {
        this.repeatMode = (this.repeatMode + 1) % 3;
        if (this.repeatMode === 0) {
            this.repeatBtn.classList.remove("active");
            this.repeatBadge.style.display = "none";
            this.showToast("Repeat: OFF", "fa-repeat");
        } else if (this.repeatMode === 1) {
            this.repeatBtn.classList.add("active");
            this.repeatBadge.style.display = "none";
            this.showToast("Repeat: ALL", "fa-repeat");
        } else if (this.repeatMode === 2) {
            this.repeatBtn.classList.add("active");
            this.repeatBadge.style.display = "flex";
            this.repeatBadge.textContent = "1";
            this.showToast("Repeat: ONE", "fa-repeat");
        }
    }

    // ----------------------------------------------------------------------
    // 6. Volume & Speed Controls
    // ----------------------------------------------------------------------
    setVolume(vol) {
        vol = Math.max(0, Math.min(1.5, parseFloat(vol)));
        this.currentVolume = vol;
        this.volumeSlider.value = vol;
        this.updateVolumeFill(vol);

        // ALWAYS set native audio volume directly
        this.audio.volume = Math.min(1.0, vol);

        // If Web Audio master gain is active, set gain value
        if (this.masterGain && this.audioNodesReady && this.audioCtx) {
            this.masterGain.gain.setTargetAtTime(vol, this.audioCtx.currentTime, 0.05);
        }

        if (vol === 0) {
            this.isMuted = true;
            this.volumeIcn.className = "fa-solid fa-volume-xmark";
        } else if (vol < 0.5) {
            this.isMuted = false;
            this.volumeIcn.className = "fa-solid fa-volume-low";
        } else {
            this.isMuted = false;
            this.volumeIcn.className = "fa-solid fa-volume-high";
        }

        this.volumeVal.textContent = `${Math.round(vol * 100)}%`;
    }

    toggleMute() {
        if (this.isMuted) {
            this.setVolume(this.previousVolume || 0.9);
        } else {
            this.previousVolume = this.currentVolume || 0.9;
            this.setVolume(0);
        }
    }

    updateVolumeFill(vol) {
        const percent = (vol / 1.5) * 100;
        this.volumeFill.style.width = `${percent}%`;
    }

    cyclePlaybackSpeed() {
        const speeds = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];
        const currentIdx = speeds.indexOf(this.currentSpeed);
        const nextIdx = (currentIdx + 1) % speeds.length;
        this.currentSpeed = speeds[nextIdx];

        this.audio.playbackRate = this.currentSpeed;
        this.audio.preservesPitch = true;
        this.speedVal.textContent = `${this.currentSpeed.toFixed(2).replace(/\.00$/, '')}x`;
        this.showToast(`Playback Speed: ${this.currentSpeed}x`, "fa-gauge-high");
    }

    toggleSpatialAudio() {
        this.ensureAudioContext();
        this.spatialAudioActive = !this.spatialAudioActive;
        this.spatialBtn.classList.toggle("active", this.spatialAudioActive);
        this.spatialSwitch.checked = this.spatialAudioActive;
        this.spatialVal.textContent = this.spatialAudioActive ? "8D ON" : "8D OFF";

        if (!this.spatialAudioActive && this.stereoPanner && this.audioCtx) {
            this.stereoPanner.pan.setTargetAtTime(0, this.audioCtx.currentTime, 0.05);
        }

        this.showToast(`8D Spatial Surround: ${this.spatialAudioActive ? "ON" : "OFF"}`, "fa-headphones");
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                this.fullscreenIcn.className = "fa-solid fa-compress";
            }).catch(e => console.warn(e));
        } else {
            document.exitFullscreen().then(() => {
                this.fullscreenIcn.className = "fa-solid fa-expand";
            }).catch(e => console.warn(e));
        }
    }

    // ----------------------------------------------------------------------
    // 7. Scrubber & Time Updates
    // ----------------------------------------------------------------------
    updateProgressUI() {
        if (!this.audio.duration) return;
        const current = this.audio.currentTime;
        const total = this.audio.duration;
        const progressPercent = (current / total) * 100;

        this.progress.value = progressPercent;
        this.progressFill.style.width = `${progressPercent}%`;
        this.currentTimeEl.textContent = this.formatTime(current);

        if (this.showRemainingTime) {
            const remaining = total - current;
            this.durationTimeEl.textContent = `-${this.formatTime(remaining)}`;
        } else {
            this.durationTimeEl.textContent = this.formatTime(total);
        }

        // Buffer bar
        if (this.audio.buffered && this.audio.buffered.length > 0) {
            const bufferedEnd = this.audio.buffered.end(this.audio.buffered.length - 1);
            const bufferPercent = (bufferedEnd / total) * 100;
            this.bufferBar.style.width = `${bufferPercent}%`;
        }

        // Update Lyrics Sync
        this.updateActiveLyric(current);
    }

    formatTime(sec) {
        if (isNaN(sec) || sec < 0) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    }

    // ----------------------------------------------------------------------
    // 8. Synchronized Lyrics Engine (LRC Parser & Scroller)
    // ----------------------------------------------------------------------
    parseLRC(lrcText) {
        this.parsedLyrics = [];
        this.activeLyricIndex = -1;

        if (!lrcText || !lrcText.trim()) {
            this.lyricsScrollBox.innerHTML = `<div class="lyric-line active">No synchronized lyrics available for this track.</div>`;
            return;
        }

        const lines = lrcText.split("\n");
        const timeRegex = /\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/;

        lines.forEach(line => {
            const match = timeRegex.exec(line);
            if (match) {
                const minutes = parseInt(match[1], 10);
                const seconds = parseInt(match[2], 10);
                const millis = match[3] ? parseInt(match[3].padEnd(3, '0'), 10) : 0;
                const timestamp = minutes * 60 + seconds + millis / 1000;
                const text = line.replace(timeRegex, "").trim();

                if (text) {
                    this.parsedLyrics.push({ timestamp, text });
                }
            }
        });

        this.parsedLyrics.sort((a, b) => a.timestamp - b.timestamp);
        this.renderLyricsDOM();
    }

    renderLyricsDOM() {
        this.lyricsScrollBox.innerHTML = "";
        this.parsedLyrics.forEach((lyric, idx) => {
            const div = document.createElement("div");
            div.className = "lyric-line";
            div.textContent = lyric.text;
            div.dataset.index = idx;
            div.addEventListener("click", () => {
                this.audio.currentTime = lyric.timestamp;
                this.play();
            });
            this.lyricsScrollBox.appendChild(div);
        });
    }

    updateActiveLyric(currentTime) {
        if (!this.parsedLyrics || this.parsedLyrics.length === 0) return;

        let newIdx = -1;
        for (let i = 0; i < this.parsedLyrics.length; i++) {
            if (currentTime >= this.parsedLyrics[i].timestamp) {
                newIdx = i;
            } else {
                break;
            }
        }

        if (newIdx !== this.activeLyricIndex && newIdx >= 0) {
            this.activeLyricIndex = newIdx;
            const lines = this.lyricsScrollBox.querySelectorAll(".lyric-line");
            lines.forEach((l, idx) => {
                l.classList.toggle("active", idx === newIdx);
            });

            // Smooth Auto-scroll
            const activeEl = lines[newIdx];
            if (activeEl) {
                const containerHeight = this.lyricsContainer.clientHeight;
                const elTop = activeEl.offsetTop;
                const targetScroll = elTop - containerHeight / 2 + activeEl.clientHeight / 2;
                this.lyricsContainer.scrollTo({
                    top: targetScroll,
                    behavior: "smooth"
                });
            }
        }
    }

    // ----------------------------------------------------------------------
    // 9. Playlist, Queue & Drag/Drop Importer
    // ----------------------------------------------------------------------
    renderQueueList() {
        this.queueList.innerHTML = "";
        const allTracks = this.playlist;
        const favs = this.favorites;

        let filtered = allTracks.filter(track => {
            if (this.currentTab === "favorites" && !favs.includes(track.id)) return false;
            if (this.currentTab === "custom" && !track.isCustom) return false;
            if (this.currentFilterQuery) {
                const q = this.currentFilterQuery.toLowerCase();
                return track.title.toLowerCase().includes(q) || track.artist.toLowerCase().includes(q);
            }
            return true;
        });

        // Update counts
        document.getElementById("allCount").textContent = allTracks.length;
        document.getElementById("favCount").textContent = favs.length;
        document.getElementById("customCount").textContent = allTracks.filter(t => t.isCustom).length;
        this.queueCountBadge.textContent = allTracks.length;

        if (filtered.length === 0) {
            this.queueList.innerHTML = `<p style="text-align:center;color:var(--text-muted);font-size:0.85rem;padding:2rem 0;">No tracks found.</p>`;
            return;
        }

        filtered.forEach(track => {
            const originalIdx = this.playlist.findIndex(t => t.id === track.id);
            const isActive = originalIdx === this.currentTrackIndex;
            const isFav = favs.includes(track.id);

            const item = document.createElement("div");
            item.className = `queue-item ${isActive ? "active" : ""}`;
            item.role = "listitem";
            item.innerHTML = `
                <img src="${track.art}" class="queue-item-art" alt="${track.title}">
                <div class="queue-item-info">
                    <div class="queue-item-title">${track.title}</div>
                    <div class="queue-item-artist">${track.artist}</div>
                </div>
                <div class="queue-item-actions">
                    <button class="queue-item-btn item-fav-btn" title="Favorite">
                        <i class="${isFav ? 'fa-solid text-primary' : 'fa-regular'} fa-heart"></i>
                    </button>
                    ${track.isCustom ? `<button class="queue-item-btn item-del-btn" title="Remove track"><i class="fa-solid fa-trash-can"></i></button>` : ''}
                </div>
            `;

            // Click to Play
            item.addEventListener("click", (e) => {
                if (e.target.closest(".item-fav-btn") || e.target.closest(".item-del-btn")) return;
                this.loadTrack(originalIdx, true);
            });

            // Toggle Favorite
            const favBtn = item.querySelector(".item-fav-btn");
            favBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                this.toggleFavorite(track.id);
            });

            // Delete Custom Track
            const delBtn = item.querySelector(".item-del-btn");
            if (delBtn) {
                delBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    this.removeTrack(track.id);
                });
            }

            this.queueList.appendChild(item);
        });
    }

    toggleFavorite(trackId) {
        const idx = this.favorites.indexOf(trackId);
        if (idx > -1) {
            this.favorites.splice(idx, 1);
            this.showToast("Removed from Favorites", "fa-heart-broken");
        } else {
            this.favorites.push(trackId);
            this.showToast("Added to Favorites", "fa-heart");
        }
        this.saveFavorites();
        this.updateFavButton();
        this.renderQueueList();
    }

    updateFavButton() {
        const currentTrack = this.playlist[this.currentTrackIndex];
        const isFav = currentTrack && this.favorites.includes(currentTrack.id);
        this.favBtn.classList.toggle("active", isFav);
        this.favIcn.className = isFav ? "fa-solid fa-heart" : "fa-regular fa-heart";
    }

    removeTrack(trackId) {
        const idx = this.playlist.findIndex(t => t.id === trackId);
        if (idx > -1) {
            const isCurrent = idx === this.currentTrackIndex;
            this.playlist.splice(idx, 1);
            this.saveCustomTracks();
            if (isCurrent) {
                this.loadTrack(Math.max(0, idx - 1), this.isPlaying);
            } else if (idx < this.currentTrackIndex) {
                this.currentTrackIndex--;
            }
            this.renderQueueList();
            this.showToast("Track removed from queue", "fa-trash-can");
        }
    }

    handleFileUpload(files) {
        Array.from(files).forEach(file => {
            if (!file.type.startsWith("audio/")) return;

            const objectUrl = URL.createObjectURL(file);
            const cleanName = file.name.replace(/\.[^/.]+$/, "");
            const newTrack = {
                id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
                title: cleanName,
                artist: "Local User Upload",
                album: "My Audio Collection",
                genre: "Custom Audio",
                format: `${file.type.split('/')[1]?.toUpperCase() || 'AUDIO'} &bull; ${(file.size / (1024 * 1024)).toFixed(1)}MB`,
                src: objectUrl,
                art: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
                duration: 0,
                isCustom: true,
                lyrics: `[00:00.00] ${cleanName}\n[00:05.00] Custom imported audio file playing.\n[00:15.00] Enjoy the high-fidelity sound!`
            };

            // Probe duration
            const tempAudio = new Audio(objectUrl);
            tempAudio.addEventListener("loadedmetadata", () => {
                newTrack.duration = tempAudio.duration;
                this.renderQueueList();
            });

            this.playlist.push(newTrack);
            this.showToast(`Imported: ${cleanName}`, "fa-file-audio");
        });

        this.saveCustomTracks();
        this.renderQueueList();
    }

    // ----------------------------------------------------------------------
    // 10. Sleep Timer Engine
    // ----------------------------------------------------------------------
    setSleepTimer(minutes) {
        this.clearSleepTimer();

        if (minutes === "end") {
            this.sleepTimerBadge.style.display = "flex";
            this.sleepTimerBadge.textContent = "Track";
            this.timerActiveStatus.style.display = "flex";
            this.timerCountdown.textContent = "End of track";
            this.showToast("Sleep timer set for End of Track", "fa-moon");
            return;
        }

        const mins = parseInt(minutes, 10);
        if (isNaN(mins) || mins <= 0) return;

        this.sleepTimerEndTimestamp = Date.now() + mins * 60 * 1000;
        this.sleepTimerBadge.style.display = "flex";
        this.sleepTimerBadge.textContent = `${mins}m`;
        this.timerActiveStatus.style.display = "flex";

        this.sleepTimerId = setInterval(() => {
            const remainingSec = Math.max(0, Math.floor((this.sleepTimerEndTimestamp - Date.now()) / 1000));
            this.timerCountdown.textContent = this.formatTime(remainingSec);

            // Gentle fade out in last 15 seconds
            if (remainingSec <= 15 && remainingSec > 0 && this.audio.volume > 0.05) {
                this.audio.volume = Math.max(0, this.audio.volume - 0.05);
            }

            if (remainingSec <= 0) {
                this.pause();
                this.clearSleepTimer();
                this.showToast("Sleep timer paused playback", "fa-moon");
            }
        }, 1000);

        this.showToast(`Sleep timer set to ${mins} minutes`, "fa-moon");
    }

    clearSleepTimer() {
        if (this.sleepTimerId) {
            clearInterval(this.sleepTimerId);
            this.sleepTimerId = null;
        }
        this.sleepTimerEndTimestamp = null;
        this.sleepTimerBadge.style.display = "none";
        this.timerActiveStatus.style.display = "none";
        document.querySelectorAll(".timer-chip").forEach(c => c.classList.remove("active"));
    }

    // ----------------------------------------------------------------------
    // 11. Theme & Customization Engine
    // ----------------------------------------------------------------------
    initTheme() {
        const savedTheme = localStorage.getItem("web_music_player_theme") || localStorage.getItem("music_player_theme") || "midnight";
        this.setTheme(savedTheme);
    }

    setTheme(themeKey) {
        document.documentElement.setAttribute("data-theme", themeKey);
        localStorage.setItem("web_music_player_theme", themeKey);

        document.querySelectorAll(".theme-opt").forEach(opt => {
            opt.classList.toggle("active", opt.dataset.setTheme === themeKey);
        });

        this.themeMenu.classList.remove("active");
        this.themeBtn.setAttribute("aria-expanded", "false");
    }

    // ----------------------------------------------------------------------
    // 12. Media Session & Toast System
    // ----------------------------------------------------------------------
    initMediaSession() {
        if (!('mediaSession' in navigator)) return;

        navigator.mediaSession.setActionHandler('play', () => this.play());
        navigator.mediaSession.setActionHandler('pause', () => this.pause());
        navigator.mediaSession.setActionHandler('previoustrack', () => this.prevTrack());
        navigator.mediaSession.setActionHandler('nexttrack', () => this.nextTrack());
        navigator.mediaSession.setActionHandler('seekbackward', () => this.seekRelative(-10));
        navigator.mediaSession.setActionHandler('seekforward', () => this.seekRelative(10));
        navigator.mediaSession.setActionHandler('seekto', (details) => {
            if (details.seekTime !== undefined) {
                this.audio.currentTime = details.seekTime;
                this.updateProgressUI();
            }
        });
    }

    updateMediaSessionMetadata() {
        if (!('mediaSession' in navigator)) return;
        const track = this.playlist[this.currentTrackIndex];
        navigator.mediaSession.metadata = new MediaMetadata({
            title: track.title,
            artist: track.artist,
            album: track.album,
            artwork: [
                { src: track.art, sizes: '512x512', type: 'image/jpeg' }
            ]
        });
    }

    showToast(message, icon = "fa-circle-info") {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
        this.toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // ----------------------------------------------------------------------
    // 13. Event Listeners Setup
    // ----------------------------------------------------------------------
    initEventListeners() {
        // Audio Element Events
        this.audio.addEventListener("loadedmetadata", () => {
            this.progress.max = 100;
            this.durationTimeEl.textContent = this.formatTime(this.audio.duration);
        });

        this.audio.addEventListener("timeupdate", () => {
            this.updateProgressUI();
        });

        this.audio.addEventListener("ended", () => {
            if (this.repeatMode === 2) { // Repeat One
                this.audio.currentTime = 0;
                this.play();
            } else if (this.sleepTimerBadge.textContent === "Track") {
                this.pause();
                this.clearSleepTimer();
            } else {
                this.nextTrack();
            }
        });

        this.audio.addEventListener("error", (e) => {
            console.error("Audio playback error event:", e);
        });

        // Controls
        this.playBtn.addEventListener("click", () => this.togglePlayPause());
        this.artPlayOverlay.addEventListener("click", () => this.togglePlayPause());
        this.prevBtn.addEventListener("click", () => this.prevTrack());
        this.nextBtn.addEventListener("click", () => this.nextTrack());
        this.rewind10Btn.addEventListener("click", () => this.seekRelative(-10));
        this.forward10Btn.addEventListener("click", () => this.seekRelative(10));
        this.shuffleBtn.addEventListener("click", () => this.toggleShuffle());
        this.repeatBtn.addEventListener("click", () => this.cycleRepeatMode());
        this.favBtn.addEventListener("click", () => {
            const track = this.playlist[this.currentTrackIndex];
            if (track) this.toggleFavorite(track.id);
        });

        // Scrubber
        this.progress.addEventListener("input", () => {
            if (this.audio.duration) {
                const targetTime = (this.progress.value / 100) * this.audio.duration;
                this.audio.currentTime = targetTime;
                this.progressFill.style.width = `${this.progress.value}%`;
                this.currentTimeEl.textContent = this.formatTime(targetTime);
            }
        });

        this.progressContainer.addEventListener("mousemove", (e) => {
            if (!this.audio.duration) return;
            const rect = this.progressContainer.getBoundingClientRect();
            const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            const hoverTime = pos * this.audio.duration;
            this.scrubTooltip.textContent = this.formatTime(hoverTime);
            this.scrubTooltip.style.left = `${pos * 100}%`;
        });

        this.durationTimeEl.addEventListener("click", () => {
            this.showRemainingTime = !this.showRemainingTime;
            this.updateProgressUI();
        });

        // Volume & Quick Tools
        this.muteBtn.addEventListener("click", () => this.toggleMute());
        this.volumeSlider.addEventListener("input", (e) => this.setVolume(e.target.value));
        this.speedBtn.addEventListener("click", () => this.cyclePlaybackSpeed());
        this.spatialBtn.addEventListener("click", () => this.toggleSpatialAudio());
        this.fullscreenBtn.addEventListener("click", () => this.toggleFullscreen());
        this.visModeBtn.addEventListener("click", () => this.cycleVisualizerMode());

        // Theme Switcher Popover
        this.themeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = this.themeMenu.classList.contains("active");
            this.themeMenu.classList.toggle("active", !isOpen);
            this.themeBtn.setAttribute("aria-expanded", !isOpen);
        });

        document.addEventListener("click", (e) => {
            if (!this.themeDropdownWrapper?.contains(e.target)) {
                this.themeMenu.classList.remove("active");
                this.themeBtn.setAttribute("aria-expanded", "false");
            }
        });

        this.themeMenu.querySelectorAll(".theme-opt").forEach(opt => {
            opt.addEventListener("click", () => {
                this.setTheme(opt.dataset.setTheme);
            });
        });

        // Drawers
        this.queueToggleBtn.addEventListener("click", () => this.toggleDrawer(this.queueDrawer));
        this.closeQueueBtn.addEventListener("click", () => this.closeDrawer(this.queueDrawer));
        this.lyricsToggleBtn.addEventListener("click", () => this.toggleDrawer(this.lyricsDrawer));
        this.closeLyricsBtn.addEventListener("click", () => this.closeDrawer(this.lyricsDrawer));

        // Queue Tabs & Search
        document.querySelectorAll(".queue-tabs .tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".queue-tabs .tab-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                this.currentTab = btn.dataset.tab;
                this.renderQueueList();
            });
        });

        this.queueSearchInput.addEventListener("input", (e) => {
            this.currentFilterQuery = e.target.value;
            this.clearSearchBtn.style.display = this.currentFilterQuery ? "block" : "none";
            this.renderQueueList();
        });

        this.clearSearchBtn.addEventListener("click", () => {
            this.queueSearchInput.value = "";
            this.currentFilterQuery = "";
            this.clearSearchBtn.style.display = "none";
            this.renderQueueList();
        });

        // File Import & Drag and Drop
        this.fileInput.addEventListener("change", (e) => this.handleFileUpload(e.target.files));
        this.dropZone.addEventListener("click", () => this.fileInput.click());

        this.dropZone.addEventListener("dragover", (e) => {
            e.preventDefault();
            this.dropZone.classList.add("dragover");
        });

        this.dropZone.addEventListener("dragleave", () => {
            this.dropZone.classList.remove("dragover");
        });

        this.dropZone.addEventListener("drop", (e) => {
            e.preventDefault();
            this.dropZone.classList.remove("dragover");
            if (e.dataTransfer.files.length) {
                this.handleFileUpload(e.dataTransfer.files);
            }
        });

        this.clearCustomTracksBtn.addEventListener("click", () => {
            this.playlist = this.playlist.filter(t => !t.isCustom);
            this.saveCustomTracks();
            this.renderQueueList();
            this.showToast("Cleared custom imported tracks", "fa-trash-can");
        });

        this.exportPlaylistBtn.addEventListener("click", () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.playlist, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "playlist.json");
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            this.showToast("Playlist JSON exported", "fa-download");
        });

        // Modals & Dialogs
        this.eqToggleBtn.addEventListener("click", () => this.openModal(this.eqModal));
        this.closeEqBtn.addEventListener("click", () => this.closeModal(this.eqModal));
        this.sleepTimerBtn.addEventListener("click", () => this.openModal(this.sleepTimerModal));
        this.closeSleepBtn.addEventListener("click", () => this.closeModal(this.sleepTimerModal));
        this.shortcutsBtn.addEventListener("click", () => this.openModal(this.shortcutsModal));
        this.closeShortcutsBtn.addEventListener("click", () => this.closeModal(this.shortcutsModal));
        this.trackInfoBtn.addEventListener("click", () => {
            const track = this.playlist[this.currentTrackIndex];
            if (track) {
                this.infoTitle.textContent = track.title;
                this.infoArtist.textContent = track.artist;
                this.infoAlbum.textContent = track.album;
                this.infoDuration.textContent = this.formatTime(this.audio.duration || track.duration);
                this.infoFormat.textContent = track.format;
            }
            this.openModal(this.trackInfoModal);
        });
        this.closeTrackInfoBtn.addEventListener("click", () => this.closeModal(this.trackInfoModal));

        // Equalizer Controls
        this.eqPresetSelect.addEventListener("change", (e) => this.applyEqPreset(e.target.value));
        this.resetEqBtn.addEventListener("click", () => this.applyEqPreset("flat"));
        this.eqEnableSwitch.addEventListener("change", (e) => {
            const enabled = e.target.checked;
            this.eqStatusLabel.textContent = enabled ? "Equalizer ON" : "Equalizer BYPASS";
            EQ_FREQUENCIES.forEach(freq => this.setEqGain(freq, enabled ? parseFloat(document.querySelector(`.eq-slider[data-band="${freq}"]`).value) : 0));
            this.showToast(enabled ? "Equalizer Enabled" : "Equalizer Bypassed", "fa-sliders");
        });

        document.querySelectorAll(".eq-slider").forEach(slider => {
            slider.addEventListener("input", (e) => {
                const freq = parseInt(e.target.dataset.band, 10);
                const val = parseFloat(e.target.value);
                const badge = document.getElementById(`eqVal_${freq}`);
                if (badge) badge.textContent = `${val > 0 ? "+" : ""}${val}dB`;
                this.setEqGain(freq, val);
                this.eqPresetSelect.value = "custom";
            });
        });

        this.preampSlider.addEventListener("input", (e) => {
            this.ensureAudioContext();
            const gainVal = parseFloat(e.target.value);
            this.preampVal.textContent = `+${gainVal.toFixed(1)} dB`;
            if (this.preampGain && this.audioCtx) {
                const linearGain = Math.pow(10, gainVal / 20);
                this.preampGain.gain.setTargetAtTime(linearGain, this.audioCtx.currentTime, 0.05);
            }
        });

        this.spatialSwitch.addEventListener("change", () => this.toggleSpatialAudio());
        this.spatialSpeedSlider.addEventListener("input", (e) => {
            this.spatialSpeed = parseFloat(e.target.value);
        });

        // Sleep Timer Chips
        document.querySelectorAll(".timer-chip").forEach(chip => {
            chip.addEventListener("click", () => {
                document.querySelectorAll(".timer-chip").forEach(c => c.classList.remove("active"));
                chip.classList.add("active");
                this.setSleepTimer(chip.dataset.timer);
            });
        });

        this.setCustomTimerBtn.addEventListener("click", () => {
            const mins = this.customTimerMinutes.value;
            if (mins) this.setSleepTimer(mins);
        });

        this.cancelTimerBtn.addEventListener("click", () => {
            this.clearSleepTimer();
            this.showToast("Sleep timer cancelled", "fa-stop");
        });

        // Custom Lyrics Editor
        this.customLyricsBtn.addEventListener("click", () => {
            const track = this.playlist[this.currentTrackIndex];
            const customText = prompt("Paste or edit synchronized LRC lyrics for this track:", track.lyrics || "");
            if (customText !== null) {
                track.lyrics = customText;
                this.parseLRC(customText);
                this.showToast("Lyrics updated", "fa-check");
            }
        });
    }

    toggleDrawer(drawer) {
        const isOpen = drawer.classList.contains("open");
        document.querySelectorAll(".drawer-panel").forEach(d => this.closeDrawer(d));
        if (!isOpen) {
            drawer.classList.add("open");
            drawer.setAttribute("aria-hidden", "false");
        }
    }

    closeDrawer(drawer) {
        drawer.classList.remove("open");
        drawer.setAttribute("aria-hidden", "true");
    }

    openModal(modal) {
        if (modal && typeof modal.showModal === "function") {
            modal.showModal();
        }
    }

    closeModal(modal) {
        if (modal && typeof modal.close === "function") {
            modal.close();
        }
    }

    // ----------------------------------------------------------------------
    // 14. Comprehensive Keyboard Shortcuts
    // ----------------------------------------------------------------------
    initKeyboardShortcuts() {
        window.addEventListener("keydown", (e) => {
            // Ignore if typing in input fields
            if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;

            switch (e.key) {
                case " ":
                case "k":
                case "K":
                    e.preventDefault();
                    this.togglePlayPause();
                    break;
                case "ArrowLeft":
                case "j":
                case "J":
                    e.preventDefault();
                    this.seekRelative(e.shiftKey ? -10 : -5);
                    break;
                case "ArrowRight":
                case "l":
                case "L":
                    e.preventDefault();
                    this.seekRelative(e.shiftKey ? 10 : 5);
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    this.setVolume(this.currentVolume + 0.05);
                    break;
                case "ArrowDown":
                    e.preventDefault();
                    this.setVolume(this.currentVolume - 0.05);
                    break;
                case "m":
                case "M":
                    this.toggleMute();
                    break;
                case "n":
                case "N":
                    this.nextTrack();
                    break;
                case "p":
                case "P":
                    this.prevTrack();
                    break;
                case "s":
                case "S":
                    this.toggleShuffle();
                    break;
                case "r":
                case "R":
                    this.cycleRepeatMode();
                    break;
                case "v":
                case "V":
                    this.cycleVisualizerMode();
                    break;
                case "e":
                case "E":
                    if (this.eqModal.open) this.closeModal(this.eqModal);
                    else this.openModal(this.eqModal);
                    break;
                case "q":
                case "Q":
                    this.toggleDrawer(this.queueDrawer);
                    break;
                case "y":
                case "Y":
                    this.toggleDrawer(this.lyricsDrawer);
                    break;
                case "f":
                case "F":
                    this.toggleFullscreen();
                    break;
                case "?":
                    if (this.shortcutsModal.open) this.closeModal(this.shortcutsModal);
                    else this.openModal(this.shortcutsModal);
                    break;
                case "Escape":
                    document.querySelectorAll(".drawer-panel").forEach(d => this.closeDrawer(d));
                    break;
            }
        });
    }
}

// Instantiate on DOM Load
document.addEventListener("DOMContentLoaded", () => {
    window.musicPlayerApp = new WebMusicPlayerApp();
});
