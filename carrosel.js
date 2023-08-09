const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function moveCarousel() {
  currentIndex++;
  if (currentIndex > carousel.children.length - 3) {
    currentIndex = 0;
  }
  const translateValue = -currentIndex * (100 / 3.5);
  carousel.style.transform = `translateX(${translateValue}%)`;
}

setInterval(moveCarousel, 5000);
