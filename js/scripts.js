let productSlide = document.querySelectorAll(".product");
let sliderLength = productSlide.length;
let arrowRight = document.querySelector("#pp-right-arrow");
let arrowLeft = document.querySelector("#pp-left-arrow");
let start = 0;
let end = 3;

// Clear all images
function reset() {
  for (let i = 0; i < sliderLength; i++) {
    productSlide[i].style.display = "none";
  }
}

function changeDisplay(item) {
  return (item.style.display = "inline-block");
}

// Init Slider (Showing 3)
function startCarousel() {
  reset();
  for (let i = 0; i < end; i++) {
    changeDisplay(productSlide[i]);
  }
}

// Show Next
function slideRight() {
  reset();
  changeDisplay(productSlide[current + 1]);
  current++;
}

// Show Prev
function slideLeft() {
  reset();
  changeDisplay(productSlide[current - 1]);
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
