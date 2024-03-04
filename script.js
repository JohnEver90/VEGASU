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

/*efecto carousel de logo de marcas*/
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');

    // Clona el contenido del carrusel para el efecto infinito
    carousel.innerHTML += carousel.innerHTML;
    carousel.innerHTML += carousel.innerHTML;
    carousel.innerHTML += carousel.innerHTML;
    carousel.innerHTML += carousel.innerHTML;
    carousel.innerHTML += carousel.innerHTML;
    carousel.innerHTML += carousel.innerHTML;
    carousel.innerHTML += carousel.innerHTML;
    carousel.innerHTML += carousel.innerHTML;
    carousel.innerHTML += carousel.innerHTML;
    carousel.innerHTML += carousel.innerHTML;

    // Función para detener el desplazamiento infinito al pasar el ratón sobre el carrusel
    carousel.addEventListener('mouseenter', () => {
        carousel.style.animationPlayState = 'paused';
    });

    carousel.addEventListener('mouseleave', () => {
        carousel.style.animationPlayState = 'running';
    });
});