const sideBar = document.querySelector(".sidebar");
const button = document.querySelector(".burger");
const classesLink = document.getElementById("classes");
const objectLink = document.getElementById("objects");
const componentLink = document.getElementById("component");
const deployLink = document.getElementById("deploy");
const packageLink = document.getElementById("packages");
const compositeLink = document.getElementById("composite");
const profileLink = document.getElementById("profile");
const useCaseLink = document.getElementById("useCase");

classesLink.addEventListener("click", () => {
  fetch("classes.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".content").innerHTML = content;
    });
});

objectLink.addEventListener("click", () => {
  fetch("objects.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".content").innerHTML = content;
    });
});

componentLink.addEventListener("click", () => {
  fetch("component.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".content").innerHTML = content;
    });
});

deployLink.addEventListener("click", () => {
  fetch("deploy.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".content").innerHTML = content;
    });
});

packageLink.addEventListener("click", () => {
  fetch("packages.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".content").innerHTML = content;
    });
});

compositeLink.addEventListener("click", () => {
  fetch("composite.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".content").innerHTML = content;
    });
});

profileLink.addEventListener("click", () => {
  fetch("profile.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".content").innerHTML = content;
    });
});

useCaseLink.addEventListener("click", () => {
  fetch("usecase.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".content").innerHTML = content;
    });
});

button.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar-visible");
  sideBar.classList.toggle("sidebar");
});
