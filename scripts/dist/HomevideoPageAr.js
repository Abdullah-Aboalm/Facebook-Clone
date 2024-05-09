"use strict";
// video controls
let video = document.querySelector(".media video");
let play = document.querySelector(".media .play");
video.addEventListener("click", () => {
  play.classList.toggle("played");
  if (play.classList.contains("played")) {
    video.setAttribute("controls", "controls");
  } else {
    video.removeAttribute("controls");
    video.pause();
  }
});
play.addEventListener("click", (e) => {
  e.stopPropagation();
  play.classList.add("played");
  video.setAttribute("controls", "controls");
  video.play();
});
// new videos
let newVideosUl = document.querySelector(".new-videos ul");
let prev = document.querySelector(".new-videos .prev");
let next = document.querySelector(".new-videos .next");

next.addEventListener("click", () => {
  newVideosUl.scrollLeft -= 370;
});
prev.addEventListener("click", () => {
  newVideosUl.scrollLeft += 370;
});
// all reactions
let allReactions = document.querySelector("ul.videos .all-reactions");
let chooseReaction = document.querySelector("ul.videos li.choose-reaction");
let chooseReactionSpan = chooseReaction.querySelector("span");
let chooseReactionImg = chooseReaction.querySelector("img");
chooseReaction.addEventListener("mouseover", () => {
  allReactions.classList.add("hovered");
});
chooseReaction.addEventListener("mouseleave", () => {
  allReactions.classList.remove("hovered");
});
allReactions.addEventListener("mouseover", () => {
  allReactions.classList.add("hovered");
});
allReactions.addEventListener("mouseleave", () => {
  allReactions.classList.remove("hovered");
});
// reactions
let reactionCountCont = document.querySelector("ul.videos .reactions-count");
let reactionCountImg = reactionCountCont.querySelector("img");
function ReactionsClickHandler() {
  // add hidden class after click
  removeHoveredClassAfterClick();
  // reactions popup imgs click
  reactionPopupImgClick();
  // main li click
  mainLiClick();
}
ReactionsClickHandler();
function removeHoveredClassAfterClick() {
  allReactions.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", () => {
      allReactions.classList.remove("hovered");
    });
  });
}
function mainLiClick() {
  chooseReaction.addEventListener("click", () => {
    chooseReaction.classList.toggle("clicked");
    if (chooseReaction.classList.contains("clicked")) {
      reactionCountCont.classList.add("clicked");
      chooseReactionSpan.textContent = `${chooseReactionImg.alt}`;
      chooseReactionSpan.style.color = `${chooseReactionImg.dataset.mainColor}`;
      console.log(chooseReactionImg.dataset.mainColor);
      chooseReactionImg.src = "imgs/reaction/like reaction.png";
      reactionCountImg.src = "imgs/reaction/reactions_like.png";
    } else {
      chooseReactionImg.src = "imgs/reaction/like.png";
      chooseReactionSpan.removeAttribute("style");
      reactionCountCont.classList.remove("clicked");
      chooseReactionSpan.textContent = `${chooseReactionImg.alt}`;
    }
  });
}
function reactionPopupImgClick() {
  allReactions.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", () => {
      reactionCountCont.classList.add("clicked");
      chooseReaction.classList.add("clicked");
      chooseReactionSpan.textContent = `${img.alt}`;
      chooseReactionSpan.style.color = `${img.dataset.color}`;
      img.alt !== "Like"
        ? (chooseReactionImg.src = `${img.src}`)
        : (chooseReactionImg.src = "imgs/reaction/like reaction.png");
      reactionCountImg.src = `${img.src}`;
    });
  });
}
//# sourceMappingURL=HomevideoPageAr.js.map
