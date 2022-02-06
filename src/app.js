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

/*------------------------------------------------------------------------------------------*/

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
        element.classList.add("transition");
        element.classList.add("duration-300");
        element.classList.add("opacity-50");
      } else {
        const links = element.parentElement;
        links.classList.add("underline");
        links.classList.add("decoration-4");
        links.classList.add("underline-offset-8");
      }
    });
  }
});
totalNavItems.addEventListener("mouseout", function (e) {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains("nav__link")) {
    const others = target.closest(".nav").querySelectorAll(".nav__link");
    ///console.log(others);
    others.forEach((element) => {
      if (element !== target) {
        element.classList.add("transition");
        element.classList.add("duration-300");
        element.classList.remove("opacity-50");
      } else {
        const links = element.parentElement;
        links.classList.remove("underline");
      }
    });
  }
});

/*-----------------------------------------------------------------------------------------------*/
///about me photo animation
const box1 = document.querySelector(".box-3");
const box2 = document.querySelector(".box-1");
const box3 = document.querySelector(".box-2");

box1.addEventListener("mouseover", function (e) {
  e.preventDefault();
  box2.classList.add("transition");
  box2.classList.add("duration-500");
  box2.classList.add("translate-x-2");
  box2.classList.add("translate-y-2");
  box1.classList.remove("bg-aux");
  box1.classList.add("transition");
  box1.classList.add("duration-500");
});
box1.addEventListener("mouseout", function (e) {
  e.preventDefault();
  box2.classList.add("transition");
  box2.classList.add("duration-500");
  box2.classList.remove("translate-x-2");
  box2.classList.remove("translate-y-2");
  box1.classList.add("bg-aux");
});

/* --------------------------------------------------------------------------------------------- */

////exp content animation

const companiesBox = document.querySelector(".exp-line");

companiesBox.addEventListener("click", function (e) {
  e.preventDefault();
  target = e.target;
  if (target.classList.contains("exp__comp")) {
    const others = target.closest(".exp-line").querySelectorAll(".exp");
    const selectedExp = target.parentElement;
    others.forEach((element) => {
      if (element === selectedExp) {
        element.classList.add("lg:border-l-4");
      } else {
        element.classList.remove("lg:border-l-4");
      }
    });
  }
});
