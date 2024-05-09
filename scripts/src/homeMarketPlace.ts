let carouselImgTxt = <HTMLSpanElement>document.querySelector(".carousel .text span");
let Imgs = Array.from(document.querySelectorAll(".carousel .image img"));

let carouselNext = 0;

let nextBtn = <HTMLDivElement>document.querySelector(".carousel .image .next");
let prevBtn = <HTMLDivElement>document.querySelector(".carousel .image .prev");

let bullets = <HTMLDivElement>document.querySelector(".carousel .image .bullets");

for (let i = 0; i < Imgs.length; i++) {
  let span = <HTMLSpanElement>document.createElement("span");
  bullets.appendChild(span);
}

let bulletsSpans = document.querySelectorAll(".carousel .image .bullets span");
bulletsSpans.item(carouselNext).classList.add("active");

nextBtn.addEventListener("click", nextClick);
prevBtn.addEventListener("click", prevClick);

function nextClick() {
  carouselNext++;
  theChecker();
}

function prevClick() {
  carouselNext--;
  theChecker();
}

function theChecker() {

  carouselImgTxt.textContent = Imgs[carouselNext].alt;

  removeActive();
  bulletsSpans.item(carouselNext).classList.add("active");
  Imgs[carouselNext].classList.add("active");

  carouselNext === 0
    ? prevBtn.classList.add("hidden")
    : prevBtn.classList.remove("hidden");

  carouselNext === Imgs.length - 1
    ? nextBtn.classList.add("hidden")
    : nextBtn.classList.remove("hidden");
}

function removeActive() {
  bulletsSpans.forEach(span => span.classList.remove("active"));
  Imgs.forEach(img => img.classList.remove("active"));
}