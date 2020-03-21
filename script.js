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
