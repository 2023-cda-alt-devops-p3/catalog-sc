const sideBar = document.querySelector(".sidebar");
const button = document.querySelector(".burger");
const crossBtn = document.querySelector(".cross");

button.addEventListener("click", () => {
  sideBar.classList.add("sidebar-visible");
  sideBar.classList.remove("sidebar-hidden");
});

crossBtn.addEventListener("click", () => {
  sideBar.style.marginLeft = "-400px";
  sideBar.style.transition = "0.5s";
});
