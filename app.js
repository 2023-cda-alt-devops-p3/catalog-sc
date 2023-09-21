const sideBar = document.querySelector(".sidebar");
const button = document.querySelector(".burger");
const crossBtn = document.querySelector(".cross");

const classesLink = document.getElementById("classes");
const objectLink = document.getElementById("objects");
const componentLink = document.getElementById("component");
const deployLink = document.getElementById("deploy");
const packageLink = document.getElementById("packages");
const compositeLink = document.getElementById("composite");
const profileLink = document.getElementById("profile");
const useCaseLink = document.getElementById("useCase");
const transitionStateLink = document.getElementById("transitionState");
const activityLink = document.getElementById("activity");
const sequenceLink = document.getElementById("sequence");
const communicationLink = document.getElementById("communication");
const interactionLink = document.getElementById("interaction");

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

transitionStateLink.addEventListener("click", () => {
  fetch("transitionstate.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".content").innerHTML = content;
    });
});

activityLink.addEventListener("click", () => {
  fetch("activity.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".content").innerHTML = content;
    });
});

sequenceLink.addEventListener("click", () => {
  fetch("sequence.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".content").innerHTML = content;
    });
});

communicationLink.addEventListener("click", () => {
  fetch("communication.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".content").innerHTML = content;
    });
});

interactionLink.addEventListener("click", () => {
  fetch("interaction.html")
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(".content").innerHTML = content;
    });
});

button.addEventListener("click", () => {
  if (window.innerWidth <= 600) {
    sideBar.classList.add("sidebar-visible");
  } else {
    sideBar.classList.toggle("sidebar-visible");
    crossBtn.classList.add("hidden");
  }
});

crossBtn.addEventListener("click", () => {
  sideBar.style.marginLeft = "-500px";
  sideBar.style.transition = "0.5s";
});
