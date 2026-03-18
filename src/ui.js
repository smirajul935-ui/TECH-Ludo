export const UI = {
    landingPanel: document.getElementById('landingPanel'),
    videoPanel: document.getElementById('videoPanel'),
    btnRandom: document.getElementById('btnRandom'),
    btnCreateRoom: document.getElementById('btnCreateRoom'),
    btnJoinRoom: document.getElementById('btnJoinRoom'),
    roomCodeInput: document.getElementById('roomCodeInput'),
    localVideo: document.getElementById('localVideo'),
    remoteVideo: document.getElementById('remoteVideo'),
    btnToggleAudio: document.getElementById('btnToggleAudio'),
    btnToggleVideo: document.getElementById('btnToggleVideo'),
    btnNext: document.getElementById('btnNext'),
    btnEndCall: document.getElementById('btnEndCall'),
    navStatusText: document.getElementById('navStatusText'),
    videoStatusText: document.getElementById('videoStatusText'),
    roomCodeDisplay: document.getElementById('roomCodeDisplay'),
    codeSpan: document.getElementById('codeSpan'),

    showVideoPanel(isRandom = false) {
        // Landing panel hide karo aur video panel show karo (Fullscreen)
        this.landingPanel.classList.add('hidden');
        this.videoPanel.classList.remove('hidden');
        
        if(isRandom) {
            this.btnNext.classList.remove('hidden');
            this.roomCodeDisplay.classList.add('hidden');
        } else {
            this.btnNext.classList.add('hidden');
            this.roomCodeDisplay.classList.remove('hidden');
        }
    },

    showLandingPanel() {
        // Video Panel hatao, Landing page wapas lao
        this.videoPanel.classList.add('hidden');
        this.landingPanel.classList.remove('hidden');
        this.remoteVideo.srcObject = null;
    },

    setStatus(text) {
        // Status text dono jagah update karo (Navbar me aur Video ke upar)
        if(this.navStatusText) this.navStatusText.innerText = text;
        if(this.videoStatusText) this.videoStatusText.innerText = text;
    }
};
