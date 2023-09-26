const sideBar = document.querySelector(".sidebar");
const button = document.querySelector(".burger");
const crossBtn = document.querySelector(".cross");
const contentContainer = document.querySelector(".main-content");

const linkIds = [
  "classes",
  "objects",
  "component",
  "deploy",
  "packages",
  "composite",
  "profile",
  "useCase",
  "transitionState",
  "activity",
  "sequence",
  "communication",
  "interaction",
  "time",
  "conceptual",
  "logic",
  "physic",
];

function loadContent(linkId) {
  fetch(`${linkId}.html`)
    .then((response) => response.text())
    .then((content) => {
      contentContainer.innerHTML = content;
    });
}

linkIds.forEach((linkId) => {
  const linkElement = document.getElementById(linkId);
  linkElement.addEventListener("click", () => {
    loadContent(linkId);
  });
});

button.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar-visible");
});

crossBtn.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar-visible");
});
