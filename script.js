const images = document.querySelectorAll('.img-container img');

function checkScroll() {
    const windowBottom = window.innerHeight;

    images.forEach((img) => {
        const imgTop = img.getBoundingClientRect().top;
        if (imgTop < windowBottom) {
            img.classList.add('img-visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll();
