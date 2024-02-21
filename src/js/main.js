const cube = document.querySelector(".cube");
const navButtons = document.querySelector(".buttons");
const allNavButtons = document.querySelectorAll(".button-menu");
const navBtn = document.querySelector(".burger-btn");
const navBtnBars = document.querySelector(".burger-btn__bars");
let classCube = "front-active";

const showSection = (className) => {
  cube.classList.remove(classCube);
  cube.classList.add(className);

  classCube = className;

  const currentActiveButton = document.querySelector(
    `[data-id="${className}"]`
  );

  const allActiveButtons = document.querySelectorAll(".button-menu-active");
  allActiveButtons.forEach((button) => {
    button.classList.remove("button-menu-active");
  });

  currentActiveButton.classList.add("button-menu-active");
};

const handleNav = () => {
  navButtons.classList.toggle("buttons--isactive");

  allNavButtons.forEach((button) => {
    button.addEventListener("click", () => {
      navButtons.classList.remove("buttons--isactive");
      handleNavItemsAnimation();
    });
  });

  handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
  let delayTime = 5;

  allNavButtons.forEach((button) => {
    button.classList.toggle("button-animation");
    // animation-delay: .3s;
    button.style.animationDelay = "." + delayTime + "s";
    delayTime++;
  });
};

const handleNavClick = () => {
  cube.classList.add("cube-small");

  setTimeout(() => {
    cube.classList.remove("cube-small");
  }, 500);
};

navBtn.addEventListener("click", () => {
  // Najpierw odsuń kostkę
  cube.classList.add("move-away");

  // Po zakończeniu animacji odsunięcia, obróć kostkę
  cube.addEventListener(
    "transitionend",
    () => {
      cube.classList.remove("move-away");
      cube.classList.add("rotate");
    },
    { once: true }
  ); // once: true sprawia, że nasłuchiwanie zdarzenia jest jednorazowe
});

// Nasłuchujemy kliknięcia w każdy przycisk nawigatora
navButtons.addEventListener("click", handleNavClick);
cube.addEventListener("transitionend", () => {
  console.log("Animation ended");
});
navBtn.addEventListener("click", handleNav);
console.log("allNavButtons", allNavButtons);
