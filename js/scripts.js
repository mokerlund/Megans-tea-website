let productSlide = document.querySelectorAll(".product");
let arrowRight = document.querySelector("#pp-right-arrow");
let arrowLeft = document.querySelector("#pp-left-arrow");
let sliderLength = productSlide.length;
let item1 = 0;
let item2 = 1;
let item3 = 2;

// Clear all images
function reset(dir) {
  if (dir == "right") {
    productSlide[item1].classList.remove("active");
  } else {
    productSlide[item3].classList.remove("active");
  }
}

function changeDisplay(item) {
  item[item1].classList.add("active");
  item[item2].classList.add("active");
  item[item3].classList.add("active");
}

// Init Slider (Showing 3)
function startCarousel() {
  changeDisplay(productSlide);
}

// Show Next
function slideRight() {
  reset("right");
  item1++;
  item2++;
  item3++;
  changeDisplay(productSlide);
}

// Show Prev
function slideLeft() {
  reset("left");
  item1--;
  item2--;
  item3--;
  changeDisplay(productSlide);
}

// Adding Event Listeners
arrowLeft.addEventListener("click", () => {
  if (item1 == 0) {
    item1 = sliderLength;
  } else if (item2 == 0) {
    item2 = sliderLength;
  } else if (item3 == 0) {
    item3 = sliderLength;
  }
  slideLeft();
});

arrowRight.addEventListener("click", () => {
  if (item1 == sliderLength - 1) {
    item1 = -1;
  } else if (item2 == sliderLength - 1) {
    item2 = -1;
  } else if (item3 == sliderLength - 1) {
    item3 = -1;
  }
  slideRight();
});

startCarousel();
