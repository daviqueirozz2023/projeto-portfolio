let currentIndex = 0;

function showNextImage() {
    const images = document.querySelectorAll('.carousel-image');
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function showPrevImage() {
    const images = document.querySelectorAll('.carousel-image');
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    const width = carouselImages.clientWidth;
    carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
}
