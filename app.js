const sideBar = document.querySelector(".sidebar");
const button = document.querySelector(".burger");
const crossBtn = document.querySelector(".cross");

button.addEventListener("click", () => {
  sideBar.style.marginLeft = "0px";
  sideBar.style.transition = "0.5s";
  button.classList.add("hidden");
});

crossBtn.addEventListener("click", () => {
  sideBar.style.marginLeft = "-250px";
  sideBar.style.transition = "0.5s";
});
