let loveLevel = 0;

// Fungsi Membuka Amplop
function openEnvelope() {
    const env = document.getElementById('envelope');
    env.classList.add('open');
    
    setTimeout(() => {
        document.getElementById('envelope-stage').style.opacity = '0';
        document.getElementById('envelope-stage').style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            document.getElementById('envelope-stage').style.display = 'none';
            const mainStage = document.getElementById('main-stage');
            mainStage.style.display = 'flex';
            setTimeout(() => {
                mainStage.style.opacity = '1';
            }, 50);
        }, 800);
    }, 600);
}

// Fungsi Love Meter
function increaseLove() {
    if (loveLevel < 100) {
        loveLevel += 20;
        document.getElementById('love-bar').style.width = loveLevel + '%';
        
        const percentText = document.getElementById('love-percent-text');
        percentText.innerText = loveLevel + '%';
        
        percentText.style.transform = 'scale(1.3)';
        setTimeout(() => {
            percentText.style.transform = 'scale(1)';
        }, 100);

        if (loveLevel >= 100) {
            setTimeout(() => {
                document.getElementById('meter-section').style.display = 'none';
                document.getElementById('choice-section').style.display = 'flex';
            }, 500);
        }
    }
}

// Fungsi Tombol Kabur (Runaway Button)
function runaway(btn) {
    btn.style.position = 'fixed';
    const padding = 50;
    const maxX = window.innerWidth - btn.offsetWidth - padding;
    const maxY = window.innerHeight - btn.offsetHeight - padding;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
}

// Fungsi Final Perayaan
function finishCelebration() {
    document.getElementById('main-stage').style.opacity = '0';
    
    setTimeout(() => {
        document.getElementById('main-stage').style.display = 'none';
        const finalStage = document.getElementById('celebration-stage');
        finalStage.style.display = 'flex';
        finalStage.style.flexDirection = 'column';
        finalStage.style.alignItems = 'center';
        
        setTimeout(() => {
            finalStage.style.opacity = '1';
            startConfetti();
            // Efek burst awal
            for(let i=0; i<20; i++) {
                createConfetti(true);
            }
        }, 50);
    }, 800);
}

// Fungsi Konfeti Hati & Variasi
function createConfetti(isBurst = false) {
    const symbols = ['❤️', '💖', '💝', '💕', '🌸', '✨', '🔥'];
    const confetti = document.createElement('div');
    confetti.classList.add('heart-confetti');
    confetti.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    
    const startX = Math.random() * 100;
    confetti.style.left = startX + 'vw';
    
    // Variasi ukuran dan durasi
    const duration = (Math.random() * 2 + 3);
    confetti.style.animationDuration = duration + 's';
    confetti.style.opacity = Math.random() * 0.5 + 0.5;
    confetti.style.fontSize = (Math.random() * 25 + 15) + 'px';
    
    if (isBurst) {
        confetti.style.top = '50vh';
        confetti.style.animation = `burst ${duration}s ease-out forwards`;
    }

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

function startConfetti() {
    // Konfeti berkelanjutan
    setInterval(() => {
        createConfetti();
    }, 250);
}