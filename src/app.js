/* --------------------------------------------------------------------------------------------- */

///Hamburger menu
const hamburger = document.querySelector(".open-menu");
const navLinks = document.querySelector(".nav-links");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const front = document.querySelector(".front-character");
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

////------------------nav bar hover states------------------///////////
const totalNavItems = document.querySelector(".nav-links");
totalNavItems.addEventListener("mouseover", function (e) {
  target = e.target;
  if (target.classList.contains("nav__link")) {
    const others = document.querySelectorAll(".nav__item");
    others.forEach((element) => {
      if (element !== target.parentElement) {
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
  if (target.classList.contains("nav__link")) {
    const others = document.querySelectorAll(".nav__item");
    others.forEach((element) => {
      if (element !== target.parentElement) {
        element.classList.remove("opacity-30");
      } else {
        element.classList.remove("underline");
      }
    });
  }
});

//////----------nav bar click to jump---------////////////////////////
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
  box3.classList.add("transition-all");
  box3.classList.add("duration-500");
  box1.classList.add("transition-all");
  box1.classList.add("duration-500");
  box2.classList.add("translate-x-2");
  box2.classList.add("translate-y-2");
  box1.classList.remove("bg-gradient-to-r");
  box1.classList.remove("dark:bg-gradient-to-r");
  box1.classList.add("transition");
  box1.classList.add("duration-500");
});
box1.addEventListener("mouseout", function (e) {
  e.preventDefault();
  box1.classList.add("transition-all");
  box1.classList.add("duration-500");
  box2.classList.add("transition");
  box2.classList.add("duration-500");
  box3.classList.add("transition-all");
  box3.classList.add("duration-500");
  box2.classList.remove("translate-x-2");
  box2.classList.remove("translate-y-2");
  box1.classList.add("bg-gradient-to-r");
  box1.classList.add("dark:bg-gradient-to-r");
});

/* --------------------------------------------------------------------------------------------- */

////exp content animation

const companiesBox = document.querySelector(".exp-line");

companiesBox.addEventListener("click", function (e) {
  e.preventDefault();
  target = e.target;
  if (target.classList.contains("exp__comp")) {
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
///console.log(slides);
const maxSlides = slides.length;
const btnRight = document.querySelector(".button-right");
const btnLeft = document.querySelector(".button-left");
const dotContainer = document.querySelector(".dots");
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
      `<button class="dots__dot h-4 w-4 lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 border border-content dark:border-main-bg mr-7 rounded-full" data-slide="${i}"></button>`
    );
  });
};
const activateDot = function (slide) {
  document.querySelectorAll(".dots__dot").forEach(function (el) {
    el.classList.remove("dots__dot--active");
    const currentDot = document.querySelector(
      `.dots__dot[data-slide="${slide}"]`
    );
    currentDot.classList.add("dots__dot--active");
  });
};

gotoSlide(curSlide);
createDots();
activateDot(curSlide);

///---------Move slides using the Right button----------/////

const nextSlide = function () {
  if (curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  gotoSlide(curSlide);
  activateDot(curSlide);
};

btnRight.addEventListener("click", function () {
  nextSlide();
});

///---------Move slides using the left button----------/////
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }
  gotoSlide(curSlide);
  activateDot(curSlide);
};

btnLeft.addEventListener("click", function () {
  prevSlide();
});

/////---------dots animation------------////////////////////

dotContainer.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("dots__dot")) {
    const slide = target.dataset.slide;
    gotoSlide(slide);
    activateDot(slide);
  }
});

///--------------------Auto Movement of the Slides to the right---///////////
setInterval(function () {
  nextSlide();
}, 12000);

/*-------------------------------------------------------------*/

/// Reveal Sections animations
const sections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    entry.target.classList.add("section--hidden");
  } else {
    entry.target.classList.remove("section--hidden");
  }
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

/*-------------------------------------------------------------*/

///Dark mode enable/disable -- mobile mode
const switchOn = document.querySelector(".light-on");
const toggle = document.querySelector(".top-html");

switchOn.addEventListener("change", function () {
  if (switchOn.checked) {
    toggle.classList.remove("dark");
  } else {
    toggle.classList.add("dark");
  }
});

///Dark mode enable/disable -- desktop mode
const toggleDesktop = document.querySelector(".toggle-lg");
const textChange = document.querySelector(".dark-text");
const iconChangeLight = document.querySelector(".moon");
const iconChangeDark = document.querySelector(".sun");

toggleDesktop.addEventListener("click", function (e) {
  target = e.target;
  if (target.classList.contains("dark-mode")) {
    toggle.classList.toggle("dark");
    if (toggle.classList.contains("dark")) {
      textChange.innerHTML = "Light Mode";
      iconChangeLight.classList.add("hidden");
      iconChangeDark.classList.remove("hidden");
    } else {
      textChange.innerHTML = "Dark Mode";
      iconChangeLight.classList.remove("hidden");
      iconChangeDark.classList.add("hidden");
    }
  }
});

/*----------------------------------------------------------------*/

////projects section buttons animation

const allSectionsButtons = document.querySelectorAll(".code");

allSectionsButtons.forEach((element) => {
  element.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("visit-link")) {
      allButtons = document.querySelectorAll(".visit-button");
      allButtons.forEach((element) => {
        if (element !== e.target.parentElement) {
          element.classList.add("underline");
          element.classList.add("decoration-solid");
          element.classList.add("underline-offset-8");
          element.classList.add("decoration-1");
          element.classList.add("opacity-30");
        } else {
          element.classList.add("bg-gradient-to-r");
          element.classList.add("from-aux-1");
          element.classList.add("to-aux");
        }
      });
    }
  });

  element.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("visit-link")) {
      allButtons = document.querySelectorAll(".visit-button");
      allButtons.forEach((element) => {
        if (element !== e.target.parentElement) {
          element.classList.remove("underline");
          element.classList.remove("opacity-30");
        } else {
          element.classList.remove("bg-gradient-to-r");
          element.classList.remove("from-aux-1");
          element.classList.remove("to-aux");
        }
      });
    }
  });
});

/*------------------------------------------------------------------*/
///hire me section animations

const allBoxes = document.querySelector(".content-hire");
const boxes = document.querySelectorAll(".content-box");
//const readMore = document.querySelectorAll(".readmore");
allBoxes.addEventListener("mouseover", function (e) {
  e.preventDefault();
  const hoverTab = e.target.closest(".content-box");
  if (!hoverTab) return;
  const hoverTitle = e.target
    .closest(".content-box")
    .querySelector(".image-title");
  const hoverContent = e.target
    .closest(".content-box")
    .querySelector(".content");
  boxes.forEach((element) => {
    element.classList.remove("hover:-translate-y-5");
    element.classList.remove("hover:scale-110");
    hoverTab.classList.add("-translate-y-5");
    hoverTab.classList.add("scale-110");
    hoverTitle.classList.remove("movedown--img_title");
    hoverContent.classList.remove("hide--hireme_content");
    hoverTitle.classList.add("moveup--img_title");
    hoverContent.classList.add("show--hireme_content");
    if (element !== hoverTab) {
      element.classList.add("opacity-20");
    }
  });
});

allBoxes.addEventListener("mouseout", function (e) {
  e.preventDefault();
  const hoverTab = e.target.closest(".content-box");
  ///guard clause
  if (!hoverTab) return;
  const hoverTitle = e.target
    .closest(".content-box")
    .querySelector(".image-title");
  const hoverContent = e.target
    .closest(".content-box")
    .querySelector(".content");
  boxes.forEach((element) => {
    hoverTab.classList.remove("-translate-y-5");
    hoverTab.classList.remove("scale-110");
    hoverTitle.classList.add("movedown--img_title");
    hoverContent.classList.add("hide--hireme_content");
    hoverTitle.classList.remove("moveup--img_title");
    hoverContent.classList.remove("show--hireme_content");

    if (element !== hoverTab) {
      element.classList.remove("opacity-20");
    }
  });
});

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
