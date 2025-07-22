// Variables globales
let player;
let isPlaying = false;
let musicEnabled = false;
let currentGalleryImage = 0;

// Imágenes de la galería
const galleryImages = [
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&h=900&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=900&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1600&h=900&fit=crop&crop=center'
];

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar modal de bienvenida
    showWelcomeModal();
    
    // Inicializar iconos de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Inicializar contador regresivo
    initCountdown();
    
    // Inicializar galería
    initGallery();
    
    // Event listeners
    document.getElementById('enterWithMusic').addEventListener('click', enterWithMusic);
    document.getElementById('enterWithoutMusic').addEventListener('click', enterWithoutMusic);
    document.getElementById('musicToggle').addEventListener('click', toggleMusic);
    document.getElementById('prevBtn').addEventListener('click', prevImage);
    document.getElementById('nextBtn').addEventListener('click', nextImage);
    
    // Dots de la galería
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
});

// Funciones del modal de bienvenida
function showWelcomeModal() {
    document.getElementById('welcomeModal').classList.add('show');
}

function hideWelcomeModal() {
    document.getElementById('welcomeModal').classList.remove('show');
}

function enterWithMusic() {
    musicEnabled = true;
    hideWelcomeModal();
    document.getElementById('musicPlayer').style.display = 'block';
    loadYouTubePlayer();
}

function enterWithoutMusic() {
    musicEnabled = false;
    hideWelcomeModal();
}

// YouTube Player API
function onYouTubeIframeAPIReady() {
    if (musicEnabled) {
        loadYouTubePlayer();
    }
}

function loadYouTubePlayer() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'dQw4w9WgXcQ', // Cambiar por el ID del video deseado
        playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            loop: 1,
            playlist: 'dQw4w9WgXcQ' // Mismo ID para loop
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    if (musicEnabled) {
        event.target.playVideo();
        isPlaying = true;
        updateMusicIcon();
    }
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        isPlaying = true;
    } else {
        isPlaying = false;
    }
    updateMusicIcon();
}

function toggleMusic() {
    if (player && typeof player.getPlayerState === 'function') {
        if (isPlaying) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    }
}

function updateMusicIcon() {
    const musicBtn = document.getElementById('musicToggle');
    const icon = musicBtn.querySelector('i');
    
    if (isPlaying) {
        icon.setAttribute('data-lucide', 'volume-2');
    } else {
        icon.setAttribute('data-lucide', 'volume-x');
    }
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Contador regresivo
function initCountdown() {
    const targetDate = new Date('2025-08-25T15:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        } else {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Galería de fotos
function initGallery() {
    showImage(0);
}

function showImage(index) {
    currentGalleryImage = index;
    document.getElementById('galleryImg').src = galleryImages[index];
    
    // Actualizar dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextImage() {
    currentGalleryImage = (currentGalleryImage + 1) % galleryImages.length;
    showImage(currentGalleryImage);
}

function prevImage() {
    currentGalleryImage = (currentGalleryImage - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentGalleryImage);
}

function goToSlide(index) {
    showImage(index);
}

// Funciones de los botones
function scheduleEvent() {
    const event = {
        title: 'XV Años de Rosmery',
        start: '20250825T150000',
        end: '20250825T230000',
        description: 'Celebración de XV años',
        location: 'Salón de eventos Arias, Avenida 27 de febrero esquina núñez'
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, '_blank');
}

function confirmAttendance() {
    const message = "¡Hola! Confirmo mi asistencia a los XV años de Rosmery el 25 de agosto a las 3:00 PM 🎉";
    const whatsappUrl = `https://wa.me/18491234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function viewLocation() {
    const address = "Avenida 27 de febrero esquina núñez";
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
}

function suggestSong() {
    const message = "¡Hola! Me gustaría sugerir una canción para la playlist de los XV años de Rosmery 🎵";
    const whatsappUrl = `https://wa.me/18491234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function showDressCode() {
    document.getElementById('dressCodeModal').classList.add('show');
}

function closeDressCode() {
    document.getElementById('dressCodeModal').classList.remove('show');
}

function showTips() {
    document.getElementById('tipsModal').classList.add('show');
}

function closeTips() {
    document.getElementById('tipsModal').classList.remove('show');
}

function openGifts() {
    window.open('https://amazon.com', '_blank');
}

// Cerrar modales al hacer clic fuera
document.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });
});

// Efectos de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animaciones al hacer scroll
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    const elements = document.querySelectorAll('.celebration-card, .party-card');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.style.animation = 'fade-in 0.6s ease-out forwards';
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);