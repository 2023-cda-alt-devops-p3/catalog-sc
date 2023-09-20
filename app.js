const sideBar = document.querySelector(".sidebar");
const button = document.querySelector(".burger");
const classesLink = document.getElementById("classes");
const objectLink = document.getElementById("objects");
const componentLink = document.getElementById("component");
const deployLink = document.getElementById("deploy");

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

button.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar-visible");
  sideBar.classList.toggle("sidebar");
});
