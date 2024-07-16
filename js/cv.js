document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".toggle-section");

  sections.forEach((section) => {
    section.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector(".toggle-icon");
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.textContent = "-";
      } else {
        content.style.display = "none";
        icon.textContent = "+";
      }
    });
  });
});
