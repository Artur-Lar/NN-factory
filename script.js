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

window.addEventListener("touchstart", (event) => {
  startY = event.touches[0].clientY;
});

window.addEventListener("touchmove", (event) => {
  endY = event.touches[0].clientY;
});

window.addEventListener("touchend", () => {
  if (startY > endY + 50) {
    if (currentSection < sections.length - 1) {
      currentSection++;
      scrollToSection(currentSection);
    }
  } else if (startY < endY - 50) {
    if (currentSection > 0) {
      currentSection--;
      scrollToSection(currentSection);
    }
  }
});

const burgerMenu = document.getElementById("burger-menu");
const mobileNav = document.getElementById("mobile-nav");

burgerMenu.addEventListener("click", () => {
  mobileNav.style.display =
    mobileNav.style.display === "block" ? "none" : "block";
});
