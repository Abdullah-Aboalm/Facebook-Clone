let navUlIcons = document.querySelectorAll("ul.icons li");
let asideLeft = document.querySelector(".main .aside-left");

navUlIcons.forEach((li) => {
  li.addEventListener("click", () => {
    navUlIcons.forEach((li) => li.classList.remove("active"));
    li.classList.add("active");
    if (li.classList.contains("active") && li.classList.contains("home")) {
      location.href = "homepageAr.html";
    } else if (
      li.classList.contains("active") &&
      li.classList.contains("watch")
    ) {
      location.href = "videoPageAr.html";
    } else if (
      li.classList.contains("active") &&
      li.classList.contains("market")
    ) {
      location.href = "marketPageAr.html";
    } else if (
      li.classList.contains("active") &&
      li.classList.contains("users")
    ) {
      location.href = "groupsPageAr.html";
    } else if (
      li.classList.contains("active") &&
      li.classList.contains("game")
    ) {
      location.href = "gamesPageAr.html";
    } else if (
      li.classList.contains("active") &&
      li.classList.contains("menu")
    ) {
      asideLeft.style.left = "0";
    } else if (
      li.classList.contains("active") &&
      li.classList.contains("logout")
    ) {
      location.href =
        document.querySelector("ul.icons li.logout").dataset.outto;
    }
  });
});

// end ul icons

// profile lis

let ulProfile = document.querySelectorAll("ul.profile li.main");
let notifPop = document.querySelector(".notif-popup");
let messengerPop = document.querySelector(".messenger-popup");
let menuPopup = document.querySelector(".menu-popup");
let allStoriesNext = document.querySelector(".pre-next .next");
let profilePopup = document.querySelector(".profile-popup");

ulProfile.forEach((li) => {
  li.addEventListener("click", () => {
    li.classList.toggle("active");
    if (li.classList.contains("active") && li.classList.contains("bell")) {
      ulProfile.forEach((li) => li.classList.remove("active"));
      li.classList.add("active");
      // menu
      notifPop.style.top = "56.5px";
    } else {
      notifPop.style.top = "-550px";
    }
    if (li.classList.contains("active") && li.classList.contains("messenger")) {
      ulProfile.forEach((li) => li.classList.remove("active"));
      li.classList.add("active");
      // menu
      messengerPop.style.top = "56.5px";
    } else {
      messengerPop.style.top = "-550px";
    }
    if (li.classList.contains("active") && li.classList.contains("menu")) {
      ulProfile.forEach((li) => li.classList.remove("active"));
      li.classList.add("active");
      // menu
      menuPopup.style.top = "56.5px";
    } else {
      menuPopup.style.top = "-800px";
    }
    if (li.classList.contains("active") && li.classList.contains("profile")) {
      ulProfile.forEach((li) => li.classList.remove("active"));
      li.classList.add("active");
      // menu
      profilePopup.style.top = "56.5px";
    } else {
      profilePopup.style.top = "-800px";
    }
  });
});

// log out

let liLogout = document.querySelector(".logOut");

liLogout.addEventListener("click", () => {
  location.replace("loginAr.html");
});

// input focus logo

let inputSer = document.querySelector("#searchInput");
let logo = document.querySelector("#logo");
let arrow = document.querySelector("#arrow");
let searchIcon = document.querySelector("#searchIcon");
let searchPop = document.querySelector(".search-pop");
let ulSearchIcons = document.querySelectorAll(".ul-search li .closeIcon");
let ulSearchLis = document.querySelectorAll(".ul-search li");
let ulSearchLisLength = document.querySelectorAll(".ul-search li").length;

let ulSearch = document.querySelector(".ul-search");
let noSearch = document.querySelector(".noSearch");

inputSer.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && inputSer.value.length > 0) {
    event.preventDefault();
    let li = document.createElement("li");

    let img = document.createElement("img");
    img.setAttribute("src", "imgs/clock-1.png");

    let text = document.createElement("div");
    text.className = "text";

    let h4 = document.createElement("h4");
    h4.innerHTML = inputSer.value;
    text.appendChild(h4);

    let close = document.createElement("div");
    close.className = "closeIcon";

    let i = document.createElement("i");
    i.className = "fa-solid fa-x";
    close.appendChild(i);

    li.appendChild(img);
    li.appendChild(text);
    li.appendChild(close);

    ulSearch.prepend(li);
    ulSearchLisLength += 1;
    if (ulSearchLisLength === 0) {
      noSearch.style.display = "block";
    } else {
      noSearch.style.display = "none";
    }
    inputSer.value = "";

    close.addEventListener("click", () => {
      li.remove();
      ulSearchLisLength -= 1;
      if (ulSearchLisLength === 0) {
        noSearch.style.display = "block";
      } else {
        noSearch.style.display = "none";
      }
    });
  }
});

inputSer.addEventListener("focus", (event) => {
  arrow.nextElementSibling.style.display = "none";
  arrow.style.display = "flex";
  searchPop.style.top = "70px";
  event.target.style.textIndent = "5px";
  event.target.nextElementSibling.style.right = "-20px";
});

inputSer.addEventListener("blur", (event) => {
  event.target.style.textIndent = "25px";
  event.target.nextElementSibling.style.right = "15px";
});

arrow.addEventListener("click", () => {
  arrow.nextElementSibling.style.display = "block";
  arrow.style.display = "none";
  searchPop.style.top = "-500px";
});

ulSearchIcons.forEach((close) => {
  close.addEventListener("click", () => {
    close.parentElement.remove();
    ulSearchLisLength -= 1;
    if (ulSearchLisLength === 0) {
      noSearch.style.display = "block";
    } else {
      noSearch.style.display = "none";
    }
  });
});

ulSearchLis.forEach((li) => {
  li.addEventListener("click", () => {
    let p = li.querySelector("p");
    p.remove();
  });
});

// notifications popup

let seeAll = document.querySelector(".seeAll");
let ulNotifLis = document.querySelectorAll("ul.noti li");
let ulNotifP = document.querySelectorAll("ul.noti li p");
let ulNotifH5 = document.querySelectorAll("ul.noti li h5");
let ulNotifspan = document.querySelectorAll("ul.noti li span");
let allLisDone = document.querySelectorAll("ul.noti li.done").length;

seeAll.addEventListener("click", () => {
  ulNotifLis.forEach((li) => li.classList.add("done"));
  ulNotifH5.forEach((h5) => {
    h5.style.color = "#96989b";
  });
  ulNotifP.forEach((p) => {
    p.style.color = "#76787c";
  });
  ulNotifspan.forEach((span) => {
    span.remove();
  });
  allLisDone += ulNotifLis.length;
});

ulNotifLis.forEach((li) => {
  let p = li.querySelector("p");
  let span = li.querySelector("span");
  let h5 = li.querySelector("h5");
  li.addEventListener("click", () => {
    li.classList.add("done");
    h5.style.color = "#96989b";
    p.style.color = "#76787c";
    span.remove();
    allLisDone = allLisDone += 1;
  });
});

// notifications buttons

let allBtn = document.querySelectorAll(".buttons button");
let noNoti = document.querySelector(".notif-popup .noNoti");

allBtn.forEach((button) => {
  button.addEventListener("click", () => {
    allBtn.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
    if (
      button.classList.contains("active") &&
      button.classList.contains("unread")
    ) {
      ulNotifLis.forEach((li) => {
        li.classList.contains("done")
          ? (li.style.display = "none")
          : (li.style.display = "flex");
      });
    }
    if (
      button.classList.contains("active") &&
      button.classList.contains("unread") &&
      allLisDone >= ulNotifLis.length
    ) {
      noNoti.style.display = "block";
    } else {
      noNoti.style.display = "none";
    }
    if (
      button.classList.contains("active") &&
      button.classList.contains("all")
    ) {
      ulNotifLis.forEach((li) => {
        li.style.display = "flex";
      });
    }
  });
});

// new notification popup

let notificationPopup = document.querySelector(".notification-float");
let notificationPopupClose = document.querySelector(
  ".notification-float .close-new-noti"
);
let notificationPopupSpan = document.querySelector(".notification-float span");
let notificationPopupLi = document.querySelector(".notification-float li");
let notificationPopupP = document.querySelector(".notification-float p");
let notificationPopupH5 = document.querySelector(".notification-float h5");
let iBill = document.querySelector("#bell");

notificationPopupClose.addEventListener("click", () => {
  notificationPopup.remove();
});

notificationPopupLi.addEventListener("click", () => {
  notificationPopupH5.style.color = "#96989b";
  notificationPopupP.style.color = "#76787c";
  notificationPopupSpan.remove();
  notificationPopup.remove();
  iBill.click();
});

setTimeout(() => {
  notificationPopup.remove();
}, 4000);

let liSeeMore = document.querySelector("li.seeMore");
let liHidden = document.querySelectorAll(".aside-left .hidden");

liSeeMore.addEventListener("click", () => {
  let liSeeMoreH4 = liSeeMore.querySelector("h4");
  liSeeMore.classList.toggle("active");
  if (liSeeMore.classList.contains("active")) {
    liHidden.forEach((li) => (li.style.display = "flex"));
    liSeeMoreH4.innerHTML = "القليل";
  } else {
    liHidden.forEach((li) => (li.style.display = "none"));
    liSeeMoreH4.innerHTML = "المزيد";
  }
});

let copyRight = document.querySelectorAll("#copyRight");
let date = new Date();

copyRight.forEach((copyRight) => {
  copyRight.innerHTML = `Meta © ${date.getFullYear()}`;
});

// stories

let allStories = document.querySelectorAll(".stories .story");
let allStoriesCont = document.querySelector(".stories");
let allStoriesPre = document.querySelector(".pre-next .prev");

allStoriesCont.addEventListener("scroll", () => {
  let maxScroll = allStoriesCont.scrollWidth - allStoriesCont.clientWidth - 24;

  if (allStoriesCont.scrollLeft <= 24) {
    allStoriesPre.classList.add("active");
  } else {
    allStoriesPre.classList.remove("active");
  }

  if (allStoriesCont.scrollLeft <= maxScroll) {
    allStoriesNext.classList.add("active");
  } else {
    allStoriesNext.classList.remove("active");
  }
});

allStoriesNext.addEventListener("click", () => {
  allStoriesCont.scrollLeft -= 300;
});

allStoriesPre.addEventListener("click", () => {
  allStoriesCont.scrollLeft += 300;
});

allStories.forEach((story) => {
  story.addEventListener("click", () => {
    let storyProfImg = story.querySelector(".prof-float-cont");
    storyProfImg.style.outlineColor = "black";
  });
});

// messenger popup

let messengerUlLis = document.querySelectorAll("ul.persons li");

messengerUlLis.forEach((li) => {
  let lip = li.querySelector("p");
  let lispan = li.querySelector("span.circle");
  li.addEventListener("click", () => {
    lispan.remove();
    lip.style.color = "gray";
  });
});

// comments counter

let ulPostsLis = document.querySelectorAll("ul.posts li");

ulPostsLis.forEach((li) => {
  let commentBtn = li.querySelector("button.comments");
  let commentsCont = li.querySelector("button.comments-cont");
  commentBtn.addEventListener("click", () => {
    commentsCont.style.display = "block";
    let counter = commentsCont.querySelector("span");
    let convert = counter.innerHTML;
    counter.innerHTML = +(++convert);
  });
});

// shares counter

ulPostsLis.forEach((li) => {
  let shares = li.querySelector("button.shares");
  let sharesCont = li.querySelector("button.shares-cont");
  shares.addEventListener("click", () => {
    sharesCont.style.display = "block";
    let counter = sharesCont.querySelector("span");
    let convert = counter.innerHTML;
    counter.innerHTML = +(++convert);
  });
});

// reactions

ulPostsLis.forEach((li) => {
  let reaction = li.querySelector("label.reaction");
  let reactions = li.querySelectorAll(".reactions-pop span");
  let likesP = li.querySelector(".likes p");
  let likesImg = li.querySelector(".likes img");
  let i = li.querySelector(".reaction i");
  let reactionName = li.querySelector(".reaction-name");
  let img = document.createElement("img");
  img.className = "animation";
  likesP.style.display = "none";

  reactions.forEach((span) => {
    span.addEventListener("click", () => {
      likesP.style.display = "block";
      reaction.classList.add("active");
      i.style.display = "none";
      if (span.classList.contains("love")) {
        reactionName.style.color = "red";
        img.src = "imgs/reaction/reactions_love.png";
        likesImg.src = "imgs/reaction/reactions_love.png";
        reactionName.innerHTML = "Love";
      } else if (span.classList.contains("care")) {
        reactionName.style.color = "#f1cc24";
        img.src = "imgs/reaction/care.png";
        likesImg.src = "imgs/reaction/care.png";
        reactionName.innerHTML = "Care";
      } else if (span.classList.contains("laugh")) {
        reactionName.style.color = "#f4c314";
        reactionName.innerHTML = "Laugh";
        img.src = "imgs/reaction/Laughing Emoji.png";
        likesImg.src = "imgs/reaction/Laughing Emoji.png";
      } else if (span.classList.contains("wow")) {
        reactionName.style.color = "#f4e914";
        reactionName.innerHTML = "WoW";
        img.src = "imgs/reaction/reactions_wow.png";
        likesImg.src = "imgs/reaction/reactions_wow.png";
      } else if (span.classList.contains("sad")) {
        reactionName.style.color = "#f4e914";
        img.src = "imgs/reaction/reactions_sad.png";
        likesImg.src = "imgs/reaction/reactions_sad.png";
        reactionName.innerHTML = "Sad";
      } else if (span.classList.contains("angry")) {
        reactionName.style.color = "#f49714";
        img.src = "imgs/reaction/reactions_Angry.png";
        likesImg.src = "imgs/reaction/reactions_Angry.png";
        reactionName.innerHTML = "Angry";
      } else {
        reactionName.style.color = "#1c6df0";
        img.src = "imgs/reaction/reactions_like.png";
        likesImg.src = "imgs/reaction/reactions_like.png";
        reactionName.innerHTML = "Like";
      }
      reaction.prepend(img);
    });
  });

  reaction.addEventListener("click", () => {
    if (reaction.classList.contains("active")) {
      reaction.classList.remove("active");
      i.style.display = "block";
      img.remove();
      reactionName.innerHTML = "Like";
      reactionName.style.color = "white";
      likesP.style.display = "none";
    } else {
      reaction.classList.add("active");
      reactionName.style.color = "#1c6df0";
      reactionName.innerHTML = "Like";
      i.style.display = "none";
      img.style.display = "block";
      img.src = "imgs/reaction/reactions_like.png";
      reaction.prepend(img);
      likesP.style.display = "block";
      likesImg.src = "imgs/reaction/reactions_like.png";
    }
  });
});

let ulPostsHeads = document.querySelectorAll("ul.posts .head");

ulPostsLis.forEach((li) => {
  let Close = li.querySelectorAll(".icons .icon.close");
  Close.forEach((icon) => {
    icon.addEventListener("click", () => {
      li.remove();
    });
  });
});

// end main page

function myFunction(x) {
  if (x.matches) {
    inputSer.addEventListener("focus", (event) => {
      searchPop.style.top = "132px";
    });
    let asideRight = document.querySelector(".main .aside-right");
    let Friends = document.querySelector(".main .aside-left li.contacts");
    Friends.addEventListener("click", () => {
      asideRight.style.left = "0";
    });
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 768px)");

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});
