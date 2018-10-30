let productSlide = document.querySelectorAll(".product");
let sliderLength = productSlide.length;
let arrowRight = document.querySelector("#pp-right-arrow");
let arrowLeft = document.querySelector("#pp-left-arrow");
let slides = 1;

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
  for (let i = 0; i < 3; i++) {
    changeDisplay(productSlide[i]);
  }
  arrowLeft.addEventListener("click", () => {
    if (slides == 0) {
      slides = sliderLength;
    }
    slideLeft();
  });

  arrowRight.addEventListener("click", () => {
    if (slides == sliderLength - 1) {
      slides = -1;
    }
    slideRight();
  });
}

// Show Next
function slideRight() {
  reset();
  changeDisplay(productSlide[slides + 1]);
  changeDisplay(productSlide[slides]);
  changeDisplay(productSlide[slides - 1]);
  slides++;
}

// Show Prev
function slideLeft() {
  reset();
  changeDisplay(productSlide[slides + 1]);
  changeDisplay(productSlide[slides]);
  changeDisplay(productSlide[slides - 1]);
  slides--;
}

// Adding Event Listeners
arrowLeft.addEventListener("click", () => {
  if (slides == 0) {
    slides = sliderLength;
  }
  slideLeft();
});

arrowRight.addEventListener("click", () => {
  if (slides == sliderLength - 1) {
    slides = -1;
  }
  slideRight();
});

startCarousel();
