// Dil metinlerini tanımla
const translate = {
  tr: {
    name: "Zehra AK",
    profession: "Öğrenci • Geliştirici",
    about: "Hakkımda",
    info: "Merhaba, ben Zehra. Şu anda Saint Joseph French Lisesi son sınıf öğrencisiyim. Teknoloji, mekatronik, havacılık gibi dallara ilgiliyim. Gelecekte uzay ve havacılık mühendisliği okumak istiyorum.",
    contact: "İletişim",
    follow: "Takip",
    education: "Eğitim",
    "education-1": "İstanbul Saint-Joseph French Lisesi",
    "education-2": "Bilfen Çamlıca İlkokulu",
    "education-3": "İTÜ GVO",
    languages: "Dil Becerileri",
    tr: "Ana Dil",
    en: "C1",
    fr: "B2",
    jp: "Öğrenme aşamasında",
    kr: "Öğrenme aşamasında",
    exams: "Sınav Sonuçları",
    bc: "AP Calculus BC",
    csa: "AP Computer Science A",
    macro: "AP Macro-economics",
    micro: "AP Micro-economics",
    mechanics: "AP Physics C: Mechanics",
    interest: "İlgi Alanlarım",
    sports: "Spor",
    develop: "Geliştirme",
    music: "Müzik",
    selflearn: "Kendi kendine öğrenme",
    work: "Sosyal Yardım",
  },
  en: {
    name: "Zehra AK",
    profession: "Student • Developer",
    about: "About me",
    info: "Hi everyone, I’m Zehra. I am currently a senior at Saint Joseph French High School. I love mechatronics, aerospace and technology. As for my future, I really hope to study aerospace engineering.",
    contact: "Contact",
    follow: "Follow",
    education: "Education",
    "education-1": "Istanbul Saint-Joseph French High School",
    "education-2": "Bilfen College Çamlıca",
    "education-3": "ITU GVO",
    languages: "Language Skills",
    tr: "Mother Tongue",
    en: "C1",
    fr: "B2",
    jp: "Learning",
    kr: "Learning",
    exams: "Exam Scores",
    bc: "AP Calculus BC",
    csa: "AP Computer Science A",
    macro: "AP Macro-economics",
    micro: "AP Micro-economics",
    mechanics: "AP Physics C: Mechanics",
    interest: "Interests",
    sports: "Sports",
    develop: "Developing",
    music: "Music",
    selflearn: "Self-learning",
    work: "Volunteer Work",
  },
  fr: {
    name: "Zehra AK",
    profession: "Étudiante • Développeure",
    about: "À propos de moi",
    info: "Bonjour à tous, je m'appelle Zehra. Je suis actuellement terminale au lycée français Saint-Joseph d'Istanbul. J'adore la mécatronique, l'aérospatiale et la technologie. Pour mon avenir, j'espère vraiment étudier le génie aérospatial.",
    contact: "Contact",
    follow: "Suivre",
    education: "Éducation",
    "education-1": "Lycée Français Saint-Joseph d'Istanbul",
    "education-2": "Collège Bilfen Çamlıca",
    "education-3": "ITU GVO",
    languages: "Compétences linguistiques",
    tr: "Langue maternelle",
    en: "C1",
    fr: "B2",
    jp: "en phase d'apprentissage",
    kr: "en phase d'apprentissage",
    exams: "Résultats des examens",
    bc: "AP Calculus BC",
    csa: "AP Computer Science A",
    macro: "AP Macro-economics",
    micro: "AP Micro-economics",
    mechanics: "AP Physics C: Mechanics",
    interest: "Intérêts",
    sports: "Sports",
    develop: "Développement",
    music: "Musique",
    selflearn: "Autoapprentissage",
    work: "Travail bénévole",
  },
};

function translatePage(language) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.textContent = translate[language][key] || key;
  });
}

// Dil değiştirme butonlarına olay dinleyicileri ekle
document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", function () {
    // Aktif olan butonun sınıfını kaldır
    document
      .querySelector(".language-button.active")
      .classList.remove("active");
    // Yeni seçilen butona aktif sınıfı ekle
    button.classList.add("active");
    // Sayfayı seçilen dile göre çevir
    translatePage(button.textContent.toLowerCase());
  });
});

// Sayfa yüklendiğinde varsayılan dili ayarla (örneğin İngilizce)
document.addEventListener("DOMContentLoaded", () => {
  translatePage("en");
});
