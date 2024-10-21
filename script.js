let currentSection = 0;

const sections = document.querySelectorAll(".section");

function scrollToSection(index) {
  sections[index].scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    if (currentSection < sections.length - 1) {
      currentSection++;
      scrollToSection(currentSection);
    }
  } else {
    if (currentSection > 0) {
      currentSection--;
      scrollToSection(currentSection);
    }
  }
});

let startY = 0;
let endY = 0;
const swipeThreshold = 50;

window.addEventListener(
  "touchstart",
  (event) => {
    startY = event.touches[0].clientY;
  },
  { passive: false }
);

window.addEventListener(
  "touchmove",
  (event) => {
    event.preventDefault();
    endY = event.touches[0].clientY;
  },
  { passive: false }
);

window.addEventListener(
  "touchend",
  () => {
    const deltaY = startY - endY;

    if (Math.abs(deltaY) > swipeThreshold) {
      if (deltaY > 0) {
        if (currentSection < sections.length - 1) {
          currentSection++;
          scrollToSection(currentSection);
        }
      } else {
        if (currentSection > 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      }
    }
  },
  { passive: false }
);

const burgerMenu = document.getElementById("burger-menu");
const mobileNav = document.getElementById("mobile-nav");

burgerMenu.addEventListener("click", () => {
  mobileNav.style.display =
    mobileNav.style.display === "block" ? "none" : "block";
});
