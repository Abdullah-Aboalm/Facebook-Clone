// all reactions
let allReactionsGroups = <HTMLDivElement>document.querySelector("ul.medias .all-reactions");
let chooseReactionGroups = <HTMLLIElement>document.querySelector("ul.medias li.choose-reaction");
let chooseReactionSpanGroups = <HTMLSpanElement>chooseReactionGroups.querySelector("span");
let chooseReactionImgGroups = <HTMLImageElement>chooseReactionGroups.querySelector("img");

chooseReactionGroups.addEventListener("mouseover", () => {
  allReactionsGroups.classList.add("hovered");
})

chooseReactionGroups.addEventListener("mouseleave", () => {
  allReactionsGroups.classList.remove("hovered");
})

allReactionsGroups.addEventListener("mouseover", () => {
  allReactionsGroups.classList.add("hovered");
})

allReactionsGroups.addEventListener("mouseleave", () => {
  allReactionsGroups.classList.remove("hovered");
})

// reactions
let reactionCountContGroups = <HTMLDivElement>document.querySelector("ul.medias .reactions-count");
let reactionCountImgGroups = <HTMLImageElement>reactionCountContGroups.querySelector("img");

function ReactionsClickHandlerGroups() {

  // add hidden class after click
  removeHoveredClassAfterClickGroups();

  // reactions popup imgs click
  reactionPopupImgClickGroups();

  // main li click
  mainLiClickGroups();

}

ReactionsClickHandlerGroups();

function removeHoveredClassAfterClickGroups() {
  allReactionsGroups.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
      allReactionsGroups.classList.remove("hovered");
    })
  })
}

function mainLiClickGroups() {
  chooseReactionGroups.addEventListener("click", () => {
    chooseReactionGroups.classList.toggle("clicked");
    if (chooseReactionGroups.classList.contains("clicked")) {
      reactionCountContGroups.classList.add("clicked");
      chooseReactionSpanGroups.textContent = `${chooseReactionImgGroups.alt}`;
      chooseReactionSpanGroups.style.color = `${chooseReactionImgGroups.dataset.mainColor}`;
      chooseReactionImgGroups.src = "imgs/reaction/like reaction.png";
      reactionCountImgGroups.src = "imgs/reaction/reactions_like.png";
    } else {
      chooseReactionImgGroups.src = "imgs/reaction/like.png";
      chooseReactionSpanGroups.removeAttribute("style");
      reactionCountContGroups.classList.remove("clicked");
      chooseReactionSpanGroups.textContent = `${chooseReactionImgGroups.alt}`;

    }
  })
}

function reactionPopupImgClickGroups() {
  allReactionsGroups.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
      reactionCountContGroups.classList.add("clicked");
      chooseReactionGroups.classList.add("clicked");
      chooseReactionSpanGroups.textContent = `${img.alt}`;
      chooseReactionSpanGroups.style.color = `${img.dataset.color}`;
      img.alt !== "Like" ? chooseReactionImgGroups.src = `${img.src}` : chooseReactionImgGroups.src = "imgs/reaction/like reaction.png";
      reactionCountImgGroups.src = `${img.src}`;
    })
  })
}