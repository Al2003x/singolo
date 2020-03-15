const nav = document.getElementById("main-nav");

nav.addEventListener("click", event => {
  nav
    .querySelectorAll("a")
    .forEach(el => el.classList.remove("main-nav__link--active"));
  event.target.classList.add("main-nav__link--active");
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
