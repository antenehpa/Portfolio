const translations = {
  en: {
    logo: "Anteneh Kassa",
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-contact": "Contact",
    "profile-title": "Hello, I'm Anteneh",
  
    "profile-id": "ID: GUR/01692/15",
    "about-title": "About Me",
    "about-text":
      "I am a dedicated 3rd-year Computer Science student at Gondar University, passionate about leveraging technology to solve real-world problems. My academic journey has equipped me with strong foundations in programming, web development, and software engineering. I enjoy exploring new technologies, contributing to open-source projects, and building innovative solutions that make a difference. My goal is to become a skilled software developer, specializing in web technologies and cybersecurity",
    "skills-title": "Skills",
    "skill-1": "HTML, CSS, JavaScript",
    "skill-2": "C++, Java, Database",
    "education-title": "Education",
    "education-1":
      "BSc in Computer Science, Gondar University, Expected Graduation: 2026",
    "education-2": "Certified in Web development Udacity EthioCoders Platform",
    "courses-title": "My Completed Courses",
    "course-1": "Advanced Database (SQL, Oracle)",
    "course-2": "Data Structure and Algorithm (C++)",
    "course-3": "Object-Oriented Programming (Java)",
    "course-4": "Data Communication and Networking",
    "course-5": "Computer Organization and Architecture",
    "course-6": "Operating System",
    "course-7": "Web Programming",
    "interests-title": "Interests",
    "interest-1":
      "Web development, open-source contributions, and learning new programming languages and Cybersecurity",
    "contact-title": "Contact Me",
    "contact-text": "Get in touch via email, Telegram, or on GitHub:",
    "contact-name": "Name:",
    "contact-email": "Email:",
    "contact-password": "Password (min 8 characters):",
    "contact-message": "Message:",
    "contact-button": "Send Message",
    "footer-text":
      "Copyright © 2025 Anteneh Kassa (GUR/01692/15). All Rights Reserved.",
  },
  am: {
    logo: "አንተነህ ካሳ",
    "nav-home": "መነሻ",
    "nav-about": "ስለ እኔ",
    "nav-contact": "እኔን ለማግኘት",
    "profile-title": "ሰላም አንተነህ ነኝ",
    "profile-text": "የኮምፒውተር ሳይንስ ተማሪ",
    "profile-id": "መለያ: GUR/01692/15",
    "about-title": "ስለ እኔ",
    "about-text":
      "እኔ በጎንደር ዩኒቨርሲቲ የሶስተኛ ዓመት የኮምፒውተር ሳይንስ ተማሪ ስሆን፣ ቴክኖሎጂን ተጠቅሜ ተግባራዊ ችግሮችን ለመፍታት ከፍተኛ ፍላጎት አለኝ። የትምህርት ጉዞዬ በፕሮግራሚንግ፣ በዌብ ልማት እና በሶፍትዌር ምህንድስና ጠንካራ መሰረት አስታጥቆኛል። አዳዲስ ቴክኖሎጂዎችን መመርመር፣ ለክፍት ምንጭ ፕሮጀክቶች አስተዋፅዖ ማድረግ እና ልዩነት የሚፈጥሩ ፈጠራ መፍትሄዎችን መገንባት እወዳለሁ። ግቤ በዌብ ቴክኖሎጂዎች እና ሳይበር ደህንነት ላይ ያተኮረ ችሎታ ያለው ሶፍትዌር ገንቢ መሆን ነው።",
    "skills-title": "ክህሎቶች",
    "skill-1": "HTML, CSS, JavaScript",
    "skill-2": "C++,java,Database",
    "education-title": "ትምህርት",
    "education-1": "BSc በኮምፒውተር ሳይንስ፣ ጎንደር ዩኒቨርሲቲ፣ መመረቂያ ግምት: 2018S",
    "education-2": "በዌብ ልማት የተረጋገጠ ዩዳሲቲ ኢትዮኮደርስ መድረክ",
    "courses-title": "የተጠናቀቁ ኮርሶች",
    "course-1": "Advanced Database (SQL፣ Oracle)",
    "course-2": "Data Structure and Algorithm (C++)",
    "course-3": "Object-Oriented Programming(ጃቫ)",
    "course-4": "Data Communication and Networking",
    "course-5": "Computer Organization and Architecture",
    "course-6": "Operating System",
    "course-7": "Web Programming",
    "interests-title": "ፍላጎቶች",
    "interest-1":
      "የዌብ ልማት፣ ክፍት ምንጭ አስተዋፅዖዎች፣ እና አዳዲስ የፕሮግራም ቋንቋዎችን እና ሳይበር ደህንነትን መማር",
    "contact-title": "እኔን ያነጋግሩ",
    "contact-text": "በኢሜይል፣ ቴሌግራም ወይም በGitHub በኩል ይገናኙ፡",
    "contact-name": "ስም:",
    "contact-email": "ኢሜይል:",
    "contact-password": "የይለፍ ቃል (ቢያንስ 8 ፊደሎች):",
    "contact-message": "መልእክት:",
    "contact-button": 'መልክት ላክ',
    "footer-text":
      "የቅጂ መብት © 2025 አንተነህ ካሳ (GUR/01692/15) ። ሁሉም መብቶች የተጠበቁ ናቸው።",
  },
};

function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!nav || !icon) {
    console.error("Navigation or hamburger icon not found");
    return;
  }
  nav.classList.toggle("open");
  icon.classList.toggle("open");
  icon.setAttribute("aria-expanded", nav.classList.contains("open"));
}

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    } else {
      console.warn(`Translation missing for key: ${key} in language: ${lang}`);
    }
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "am" ? "ltl" : "ltr";
  localStorage.setItem("language", lang);
}

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme =
    html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  changeLanguage(savedLang);
  const languageSelector = document.querySelector("#language-selector");
  if (languageSelector) {
    languageSelector.value = savedLang;
    languageSelector.addEventListener("change", (e) =>
      changeLanguage(e.target.value)
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bg-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 30;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--particle-color");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
});

  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);


  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = link.getAttribute("href");
      }
    });
  });

  const passwordInput = document.getElementById("password");
  const formError = document.querySelector(".form-error");
  if (passwordInput && formError) {
    passwordInput.addEventListener("input", () => {
      if (passwordInput.value.length < 8) {
        formError.style.display = "block";
        formError.textContent = translations[savedLang]["contact-password"];
      } else {
        formError.style.display = "none";
      }
    });
  }
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message").value;
    const formError = document.querySelector(".form-error");
    const savedLang = localStorage.getItem("language") || "en";

    if (!formError) return;

    if (name && email && password.length >= 8 && message) {
      formError.style.display = "block";
      formError.style.color = "green";
      formError.textContent = "Form submitted successfully!";
      alert  (
        "Form submitted successfully!\n\nName: " +
          name +
          "\nEmail: " +
          email +
          "\nMessage: " +
          message
      );
      formError.setAttribute("aria-live", "polite");
      document.getElementById("contact-form").reset();
      setTimeout(() => {
        formError.style.display = "none";
      }, 3000);
    } else {
      formError.style.display = "block";
      formError.style.color = "red";
      formError.textContent = "Please fill out all fields correctly.";
      formError.setAttribute("aria-live", "assertive");
    }
  });

  
