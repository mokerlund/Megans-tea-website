let productSlide = document.querySelectorAll(".product");
let sliderLength = productSlide.length;
let arrowRight = document.querySelector("#pp-right-arrow");
let arrowLeft = document.querySelector("#pp-left-arrow");
let current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderLength; i++) {
    productSlide[i].style.display = "none";
  }
}

// Init Slider (Showing 3)
function startCarousel() {
  reset();
  for (let i = 0; i < 3; i++) {
    productSlide[i].style.display = "inline-block";
  }
}

// Show Next
function slideRight() {
  reset();
  productSlide[current + 1].style.display = "block";
  current++;
}

// Show Prev
function slideLeft() {
  reset();
  productSlide[current - 1].style.display = "block";
  current--;
}

// Adding Event Listeners
arrowLeft.addEventListener("click", () => {
  if (current == 0) {
    current = sliderLength;
  }
  slideLeft();
});

arrowRight.addEventListener("click", () => {
  if (current == sliderLength - 1) {
    current = -1;
  }
  slideRight();
});

startCarousel();
