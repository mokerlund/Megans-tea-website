let productSlide = document.querySelectorAll(".product");
let arrowRight = document.querySelector("#pp-right-arrow");
let arrowLeft = document.querySelector("#pp-left-arrow");
let sliderLength = productSlide.length;
let item1 = 0;
let item2 = 1;
let item3 = 2;

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
  changeDisplay(productSlide[0]);
  changeDisplay(productSlide[1]);
  changeDisplay(productSlide[2]);
}

// Show Next
function slideRight() {
  reset();
  item1++;
  item2++;
  item3++;
  changeDisplay(productSlide[item1]);
  changeDisplay(productSlide[item2]);
  changeDisplay(productSlide[item3]);
}

// Show Prev
function slideLeft() {
  reset();
  item1--;
  item2--;
  item3--;
  console.log(item1);
  console.log(item2);
  console.log(item3);
  changeDisplay(productSlide[item3]);
  changeDisplay(productSlide[item2]);
  changeDisplay(productSlide[item1]);
}

// Adding Event Listeners
arrowLeft.addEventListener("click", () => {
  if (item1 == 0) {
    item1 = sliderLength;
  }
  if (item2 == 0) {
    item2 = sliderLength;
  }
  if (item3 == 0) {
    item3 = sliderLength;
  }
  slideLeft();
});

arrowRight.addEventListener("click", () => {
  if (item1 == sliderLength - 1) {
    item1 = -1;
  }
  slideRight();
});

startCarousel();
