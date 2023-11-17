const stats = document.querySelector('.stats');
const counters = document.querySelectorAll(".counter");
let bol = false;

const sectionOffset = stats.offsetTop + stats.offsetHeight;

window.addEventListener("scroll", () => {
    const pageOffset = window.innerHeight + pageYOffset;
    if (pageOffset > sectionOffset && bol === false) {
        counters.forEach((counter) => {
            function updateCount() {
                const target = +counter.getAttribute('data-target');
                const speed = +counter.getAttribute('data-speed');
                let count = +counter.innerText;

                if (count < target) {
                    counter.innerText = count + 1;
                    setTimeout(updateCount, speed);
                    count++;
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
            bol = true;
        });
    }
});

let currentImageIndex = 0;
const totalImages = document.querySelectorAll('.imageshow').length;
const imageSlider = document.querySelector('.image-slider');

function showImage(index) {
    currentImageIndex = (index + totalImages) % totalImages;
    const newPosition = -currentImageIndex * 100 + '%';
    imageSlider.style.transform = 'translateX(' + newPosition + ')';
}

function prevImage() {
    showImage(currentImageIndex - 1);
}

function nextImage() {
    showImage(currentImageIndex + 1);
};
  