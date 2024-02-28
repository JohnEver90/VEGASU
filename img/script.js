/*efecto slider inicio*/
const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        image.style.opacity = i === index ? 1 : 0;
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(nextImage, 4000);