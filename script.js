const nav = document.getElementById("main-nav");

nav.addEventListener("click", event => {
  nav
    .querySelectorAll("a")
    .forEach(el => el.classList.remove("main-nav__link--active"));
  event.target.classList.add("main-nav__link--active");
});
