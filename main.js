document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var preloader = document.getElementById("preloader");
    preloader.classList.add("hide");
  }, 0);
});
const mainContent = document.getElementById("main-content");

setTimeout(() => {
  mainContent.classList.add("fade-in");
}, 0);

document.querySelectorAll(".cbar").forEach((cbar) => {
  cbar.addEventListener("mouseenter", () => {
    cbar.parentElement.querySelector(".tl-name").classList.add("hidden");
  });

  cbar.addEventListener("mouseleave", () => {
    cbar.parentElement.querySelector(".tl-name").classList.remove("hidden");
  });
});

const interestsElement = document.querySelector(".detail-section.interests");

interestsElement.addEventListener("click", () => {
  window.location.href = "interests.html";
});
