document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const audio = document.getElementById('audio');
    const media = document.getElementById('writing');

    function playAudio() {
        audio.play();
        playButton.style.display = 'none';
        
        const writingAnimation = new Typewriter(media, {
            loop: false,
            delay: 100
        })
        .typeString('Aku.....')
        .pauseFor(3750) // Jeda selama 1 detik setelah penulisan selesai
        .typeString('yang jatuh cinta')
        .pauseFor(1650)
        .deleteAll(20)
        .typeString('Haruskah kau ku beri kesempatan')
        .start();
    }

    function checkAutoplay() {
        audio.play().then(() => {
            // Autoplay started successfully
            playAudio();
        }).catch(() => {
            // Autoplay was prevented
            playButton.style.display = 'block';
        });
    }

    checkAutoplay();

    
});