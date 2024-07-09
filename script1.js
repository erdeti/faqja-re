document.addEventListener('DOMContentLoaded', () => {
    const tulipsContainer = document.querySelector('.tulips-container');
    const starsContainer = document.querySelector('.stars');

    // Function to create tulip element
    const createTulip = (left, top) => {
        const tulip = document.createElement('div');
        tulip.classList.add('tulip');
        tulip.style.left = `${left}%`;
        tulip.style.top = `${top}%`;
        tulip.style.backgroundImage = `url('https://media.tenor.com/nvUx2zO_wE8AAAAi/raf-rafs.gif-${Math.floor(Math.random() * 5) + 1}.png')`; // Change this URL to your tulip images
        tulip.style.animationDuration = `${Math.random() * 5 + 5}s`;
        tulipsContainer.appendChild(tulip);
    };

    // Function to create star element
    const createStar = (left, top) => {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        star.style.animationDuration = `${Math.random() * 5 + 2}s`;
        starsContainer.appendChild(star);
    };

    // Create multiple tulips
    for (let i = 0; i < 50; i++) {
        createTulip(Math.random() * 100, Math.random() * 100);
    }

    // Create multiple stars
    for (let i = 0; i < 100; i++) {
        createStar(Math.random() * 100, Math.random() * 100);
    }
});
