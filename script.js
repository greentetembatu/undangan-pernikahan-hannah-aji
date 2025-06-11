// Countdown Timer
const countdownElement = document.getElementById('countdown');
const weddingDate = new Date('June 21, 2025 09:00:00').getTime(); // Ganti dengan tanggal dan waktu pernikahan Anda

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Kami Telah Menikah!";
    } else {
        countdownElement.innerHTML = `
            <div>${days}<span>Hari</span></div>
            <div>${hours}<span>Jam</span></div>
            <div>${minutes}<span>Menit</span></div>
            <div>${seconds}<span>Detik</span></div>
        `;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Call immediately to avoid delay

// ... (kode JavaScript lainnya) ...

// Kontrol Musik Latar
const backgroundMusic = document.getElementById('background-music');
const playMusicBtn = document.getElementById('play-music-btn');
const musicIcon = document.getElementById('music-icon');

let isPlaying = false; // Status musik

playMusicBtn.addEventListener('click', function() {
    if (isPlaying) {
        backgroundMusic.pause();
        musicIcon.textContent = '🔇'; // Ganti ikon menjadi muted
        playMusicBtn.innerHTML = '<span id="music-icon">🔇</span> Putar Musik';
        isPlaying = false;
    } else {
        backgroundMusic.play().then(() => {
            musicIcon.textContent = '🔊'; // Ganti ikon menjadi volume
            playMusicBtn.innerHTML = '<span id="music-icon">🔊</span> Hentikan Musik';
            isPlaying = true;
        }).catch(error => {
            console.error("Gagal memutar musik:", error);
            alert("Musik tidak dapat diputar. Pastikan interaksi pengguna telah dilakukan.");
        });
    }
});




function getGuestNameFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    let name = urlParams.get('to');
    if (name) {
        name = decodeURIComponent(name.replace(/\+/g, ' '));
    }
    return name;
}

function displayGuestName() {
    const guestName = getGuestNameFromUrl();
    const guestNameElement = document.getElementById('guest-name-display');
    if (guestNameElement && guestName) {
        guestNameElement.textContent = `${guestName}`;
        guestNameElement.style.display = 'block';
    } else if (guestNameElement) {
        guestNameElement.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', displayGuestName);



const backToTop = document.createElement('div');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '↑ATAS';
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 300);
});
