// start login

let email = <HTMLInputElement>document.querySelector("#em");
let password = <HTMLInputElement>document.querySelector("#pas");
let submit = <HTMLInputElement>document.querySelector("#submit");
let copyright = <HTMLParagraphElement>document.querySelector(".copyright");
let date = new Date();

copyright.innerHTML = `Meta &copy; ${date.getFullYear()}`;

var regEm =
  /(?:^(?:010|011|012|015)\d{8}$)|(?:^[a-z1-9_]+@[a-z1-9_]+\.[a-z1-9_]{2,10}$)/i;
var regPas = /\w{4,15}/i;

submit.addEventListener("click", () => {
  if (regEm.test(email.value) == false) {
    email.classList.add("err");
  }
  if (regPas.test(password.value) == false) {
    password.classList.add("err");
  }
  if (regPas.test(password.value) && regEm.test(email.value)) {
    email.value = "";
    location.href = `${document.body.dataset.lang}`;
  }
});
email.addEventListener("input", () => {
  email.classList.remove("err");
});

password.addEventListener("input", () => {
  password.classList.remove("err");
});

// mob langs

// main div
let langsMob = <HTMLParagraphElement>document.querySelector(".langs-pop");

// popup
let mobLangs = <HTMLDivElement>document.querySelector(".langs-mob");
let overlay = <HTMLDivElement>document.querySelector(".overlay");

let closeIcon = <HTMLDivElement>document.querySelector(".icon");

langsMob.addEventListener("click", () => {
  mobLangs.style.bottom = "0";
  overlay.style.display = "block";
});

closeIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  mobLangs.style.bottom = "-60vh";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  mobLangs.style.bottom = "-60vh";
  overlay.style.display = "none";
});

//  end login
