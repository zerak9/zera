document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var preloader = document.getElementById("preloader");
    preloader.classList.add("hide");
  }, 0);
});
// Elementi seçer
const mainContent = document.getElementById("main-content");

// 1500 milisaniye (1.5 saniye) sonra işlem gerçekleştirir
setTimeout(() => {
  mainContent.classList.add("fade-in");
}, 0);

// Tüm .cbar öğelerini seçer
document.querySelectorAll(".cbar").forEach((cbar) => {
  // Her öğeye mouse olayı ekler
  cbar.addEventListener("mouseenter", () => {
    // İlgili öğenin üstündeki .tl-name öğesini gizler
    cbar.parentElement.querySelector(".tl-name").classList.add("hidden");
  });

  cbar.addEventListener("mouseleave", () => {
    // İlgili öğenin üstündeki .tl-name öğesini gösterir
    cbar.parentElement.querySelector(".tl-name").classList.remove("hidden");
  });
});

// Elementi seçer
const interestsElement = document.querySelector(".detail-section.interests");

// Tıklandığında olay ekler
interestsElement.addEventListener("click", () => {
  // Sayfayı yönlendirir
  window.location.href = "interests.html";
});
