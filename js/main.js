document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var preloader = document.getElementById("preloader");
    preloader.classList.add("hide");
  }, 1500);
});
const mainContent = document.getElementById("main-content");

setTimeout(() => {
  mainContent.classList.add("fade-in");
}, 1500);

document.querySelectorAll(".cbar").forEach((cbar) => {
  cbar.addEventListener("mouseenter", () => {
    cbar.parentElement.querySelector(".tl-name").classList.add("hidden");
  });

  cbar.addEventListener("mouseleave", () => {
    cbar.parentElement.querySelector(".tl-name").classList.remove("hidden");
  });
});

document.querySelectorAll(".flag-icon").forEach((flagIcon) => {
  flagIcon.addEventListener("mouseenter", () => {
    flagIcon.parentElement.querySelector(".tl-name").classList.add("hidden");
  });

  flagIcon.addEventListener("mouseleave", () => {
    flagIcon.parentElement.querySelector(".tl-name").classList.remove("hidden");
  });
});


