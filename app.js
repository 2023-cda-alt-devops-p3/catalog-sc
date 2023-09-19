const sideBar = document.querySelector(".sidebar");
const button = document.querySelector(".burger");
const crossBtn = document.querySelector(".cross");

button.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar-visible");
});

crossBtn.addEventListener("click", () => {
  sideBar.style.marginLeft = "-400px";
  sideBar.style.transition = "0.5s";
});
