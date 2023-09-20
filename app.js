const sideBar = document.querySelector(".sidebar");
const button = document.querySelector(".burger");

button.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar-visible");
  sideBar.classList.toggle("sidebar");
});
