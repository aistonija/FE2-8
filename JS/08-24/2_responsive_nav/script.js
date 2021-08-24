const button = document.querySelector(".navbar__toggle-btn");
const menuItems = document.querySelector(".menu-items");

button.addEventListener("click", function () {
  menuItems.classList.toggle("active");
});
