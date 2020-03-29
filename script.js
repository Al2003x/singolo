const nav = document.getElementById("main-nav");

let Height = 0;
const sections = document.querySelectorAll("section");
sections.forEach(el => {
  Height += el.offsetHeight;
});
let ScrollOffset =
  document.documentElement.clientHeight - parseInt(Height / sections.length);
ScrollOffset =
  ScrollOffset < 30
    ? document.querySelector("header").offsetHeight
    : ScrollOffset;

document.addEventListener("scroll", event => {
  const curPos = window.scrollY + ScrollOffset;
  const sectionList = document.querySelectorAll("section");
  const Links = nav.querySelectorAll("a");
  sectionList.forEach(el => {
    if (el.offsetTop <= curPos && el.offsetTop + el.offsetHeight > curPos) {
      Links.forEach(a => {
        a.classList.remove("main-nav__link--active");
        if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
          a.classList.add("main-nav__link--active");
        }
      });
    }
  });

  if (
    document.documentElement.scrollTop +
      document.documentElement.clientHeight ===
    document.documentElement.scrollHeight
  ) {
    nav
      .querySelector("a.main-nav__link--active")
      .classList.remove("main-nav__link--active");
    Links[Links.length - 1].classList.add("main-nav__link--active");
  }
  if (nav.querySelector("a.main-nav__link--active") === null) {
    Links[0].classList.add("main-nav__link--active");
  }
});

const portfolioMenu = document.querySelector(".portfolio-breadcrumbs__list");

portfolioMenu.addEventListener("click", event => {
  event.preventDefault();
  portfolioMenu
    .querySelectorAll(".portfolio-breadcrumbs__link")
    .forEach(el => el.classList.remove("portfolio-breadcrumbs__link--active"));
  event.target.classList.add("portfolio-breadcrumbs__link--active");
});

const images = document.querySelector(".catalog-images");

images.addEventListener("click", event => {
  event.preventDefault();
  images
    .querySelectorAll(".catalog-images__img img")
    .forEach(el => el.classList.remove("portfolio-image"));
  event.target.classList.add("portfolio-image");
});

portfolioMenu.addEventListener("click", function() {
  for (var i = images.children.length; i >= 0; i--) {
    if (event.target.classList.contains("portfolio-breadcrumbs__link")) {
      images.appendChild(images.children[(Math.random() * i) | 0]);
    }
  }
});

const screenVer = document.querySelector(".slider__screen-off--ver");
const screenHor = document.querySelector(".slider__screen-off--hor");

let vertScreenOff = false;
let horScreenOff = false;

screenVer.addEventListener("click", () => {
  if (!vertScreenOff) {
    screenVer.style.opacity = 1;
    vertScreenOff = true;
  } else {
    screenVer.style.opacity = 0;
    vertScreenOff = false;
  }
});

screenHor.addEventListener("click", () => {
  if (!horScreenOff) {
    screenHor.style.opacity = 1;
    horScreenOff = true;
  } else {
    screenHor.style.opacity = 0;
    horScreenOff = false;
  }
});

let items = document.querySelectorAll(".slider .slider__wrapper");
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
}

function nextItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}

function previousItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}

document
  .querySelector(".slider__btn--prev")
  .addEventListener("click", function() {
    if (isEnabled) {
      previousItem(currentItem);
    }
  });

document
  .querySelector(".slider__btn--next")
  .addEventListener("click", function() {
    if (isEnabled) {
      nextItem(currentItem);
    }
  });

const BUTTON = document.getElementById("btn");
const CLOSE_BUTTON = document.getElementById("close-btn");
const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];

BUTTON.addEventListener("click", e => {
  e.preventDefault();
  let name = document.getElementById("form-name").validity.valid;
  let mail = document.getElementById("form-mail").validity.valid;
  let subject = document.getElementById("form-subject").value.toString();
  let description = document.getElementById("form-message").value.toString();
  if (!name || !mail) {
    alert("Заполните поле name или mail");
    return;
  } else {
    document.getElementById("modal-subject").innerText = subject
      ? `Тема: ${subject}`
      : "Без темы";
    document.getElementById("modal-describe").innerText = description
      ? `Описание: ${description}`
      : "Без описания";
    modal.classList.remove("hidden");
  }
});

CLOSE_BUTTON.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.getElementById("form").reset();
});

span.onclick = function() {
  modal.classList.add("hidden");
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.add("hidden");
  }
};
