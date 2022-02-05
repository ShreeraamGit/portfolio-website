//// Hamburger menu

const hamburgerOpen = document.querySelector(".hamburger__open");
const hamburgerClose = document.querySelector(".hamburger__close");
const navLinks = document.querySelector(".nav__links");
////console.log(navLinks);
hamburgerOpen.addEventListener("click", function (e) {
  ////console.log("open");
  hamburgerClose.classList.remove("invisible");
  hamburgerOpen.classList.remove("visible");
  hamburgerOpen.classList.add("invisible");
});

hamburgerClose.addEventListener("click", function (e) {
  ////console.log("close");
  hamburgerClose.classList.add("invisible");
  hamburgerOpen.classList.remove("invisible");
  hamburgerOpen.classList.add("visible");
});

////hover states in nav bar implementation;
const totalNavItems = document.querySelector(".nav");

totalNavItems.addEventListener("mouseover", function (e) {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains("nav__link")) {
    const others = target.closest(".nav").querySelectorAll(".nav__link");
    ///console.log(others);
    others.forEach((element) => {
      if (element !== target) {
        element.classList.add("opacity-50");
      }
    });
  }
});
totalNavItems.addEventListener("mouseout", function (e) {
  e.preventDefault();
  const target = e.target;
  ///console.log(target);
  if (target.classList.contains("nav__link")) {
    const others = target.closest(".nav").querySelectorAll(".nav__link");
    ///console.log(others);
    others.forEach((element) => {
      if (element !== target) {
        element.classList.remove("opacity-50");
      }
    });
  }
});
