console.log("Prince Portfolio Loaded 🚀");


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 6, 6, 0.92)";

    } else {

        navbar.style.background =
            "rgba(5, 6, 6, 0.75)";

    }

});document.querySelectorAll('.work-image').forEach(card => {
    const video = card.querySelector('video');
    const playBtn = card.querySelector('.play-button');

    if (video && playBtn) {
        // Play button ya video par click karne se video play/pause ho
        const togglePlay = () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        };

        playBtn.addEventListener('click', togglePlay);
        video.addEventListener('click', togglePlay);

        // Video play hone par button gayab ho jayega
        video.addEventListener('play', () => {
            playBtn.classList.add('hidden');
        });

        // Video pause ya khatam hone par button wapas aa jayega
        video.addEventListener('pause', () => {
            playBtn.classList.remove('hidden');
        });

        video.addEventListener('ended', () => {
            playBtn.classList.remove('hidden');
        });
    }
});const globalGlow = document.querySelector('.global-mouse-glow');

window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    globalGlow.style.left = `${x}px`;
    globalGlow.style.top = `${y}px`;
});