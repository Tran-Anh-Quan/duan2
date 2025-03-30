// let currentIndex = 0;
// const slides = document.querySelector(".slides");
// const dots = document.querySelectorAll(".dot");
// const totalSlides = document.querySelectorAll(".slide");
// function updateSlide(index){
//     if(index>=totalSlides){
//         currentIndex = 0;
//     }
//     else if(index<0){
//         currentIndex = totalSlides - 1
//     }
// }
let currentIndex = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const totalSlides = document.querySelectorAll(".slide").length;

function updateSlide(index) {
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function moveSlide(step) {
  updateSlide(currentIndex + step);
}

function currentSlide(index) {
  updateSlide(index);
}

setInterval(() => moveSlide(1), 5000); // Tự động chuyển slide
