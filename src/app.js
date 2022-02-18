///// height

const h = window.innerHeight;
const mainSection = document.querySelector(".first-section");
mainSection.classList.add(`h-${h}px`);

/* --------------------------------------------------------------------------------------------- */

///Hamburger menu
const hamburger = document.querySelector(".open-menu");
const navLinks = document.querySelector(".nav-links");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const front = document.querySelector(".front-character");
////console.log(front);
///console.log(navLinks);
hamburger.addEventListener("click", function (e) {
  navLinks.classList.add("transition");
  navLinks.classList.add("duration-700");
  navLinks.classList.remove("translate-x-full");
  navLinks.classList.add("translate-x-0");
  openMenu.classList.add("invisible");
  closeMenu.classList.remove("invisible");
});

closeMenu.addEventListener("click", function (e) {
  navLinks.classList.remove("translate-x-0");
  navLinks.classList.add("translate-x-full");
  openMenu.classList.remove("invisible");
  closeMenu.classList.add("invisible");
});

//// nav bar hover states
const totalNavItems = document.querySelector(".nav-links");
///console.log(totalNavItems);
totalNavItems.addEventListener("mouseover", function (e) {
  target = e.target;
  ///console.log(target.parentElement);
  if (target.classList.contains("nav__link")) {
    const others = document.querySelectorAll(".nav__item");
    ///console.log(others);
    others.forEach((element) => {
      if (element !== target.parentElement) {
        ///console.log(element.children);
        element.classList.add("transition");
        element.classList.add("duration-500");
        element.classList.add("opacity-30");
      } else {
        element.classList.add("underline");
        element.classList.add("underline-offset-8");
        element.classList.add("decoration-2");
      }
    });
  }
});
totalNavItems.addEventListener("mouseout", function (e) {
  target = e.target;
  ///console.log(target.parentElement);
  if (target.classList.contains("nav__link")) {
    const others = document.querySelectorAll(".nav__item");
    ///console.log(others);
    others.forEach((element) => {
      if (element !== target.parentElement) {
        ///console.log(element.children);
        element.classList.remove("opacity-30");
      } else {
        element.classList.remove("underline");
      }
    });
  }
});

totalNavItems.addEventListener("click", function (e) {
  if (target.classList.contains("nav__link")) {
    navLinks.classList.remove("translate-x-0");
    navLinks.classList.add("translate-x-full");
    openMenu.classList.remove("invisible");
    closeMenu.classList.add("invisible");
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
    ///console.log(target.dataset.tab);
    const others = target.closest(".exp-line").querySelectorAll(".exp");
    const selectedCompany = target.parentElement;
    const expContent = document.querySelectorAll(".exp__content");
    const jazeera = document.querySelector(".jazeera");
    const kpas = document.querySelector(".kpas");
    others.forEach((element) => {
      if (element === selectedCompany) {
        element.classList.add("lg:border-l-4");
        element.classList.add("border-b-4");
        jazeera.classList.add("hidden");
        kpas.classList.remove("hidden");
      } else {
        element.classList.remove("lg:border-l-4");
        element.classList.remove("border-b-4");
        jazeera.classList.remove("hidden");
        kpas.classList.add("hidden");
      }
    });
  }
});

/* --------------------------------------------------------------------------------------------- */

///slider animation

const slides = document.querySelectorAll(".slide");
const maxSlides = slides.length;
///console.log(maxSlides);
const btnRight = document.querySelector(".button-right");
const btnLeft = document.querySelector(".button-left");
const dotContainer = document.querySelector(".dots");
//console.log(dotContainer);
let curSlide = 0;

const gotoSlide = function (slideNum) {
  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${100 * (index - slideNum)}%)`;
  });
};

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot h-3 w-3 border-2 border-content mr-7 rounded-full" data-slide="${i}"></button>`
    );
  });
};
const activateDot = function (slide) {
  document.querySelectorAll(".dots__dot").forEach(function (el) {
    el.classList.remove("dots__dot--active");
  });
};

gotoSlide(curSlide);
activateDot(curSlide);
createDots();

btnRight.addEventListener("click", function () {
  if (curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  gotoSlide(curSlide);
});

btnLeft.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }
  gotoSlide(curSlide);
});

///// dots animation
////console.log(dotContainer);

dotContainer.addEventListener("click", function (e) {
  const target = e.target;
  ///console.log(target);
  if (target.classList.contains("dots__dot")) {
    const slide = target.dataset.slide;
    gotoSlide(slide);
  }
});

/*-------------------------------------------------------------*/

/// Reveal Sections animations
const sections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.remove("section--hidden");
  }
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
