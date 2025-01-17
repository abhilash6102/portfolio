document.querySelectorAll("li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector(".phone").addEventListener("click", function (e) {
  e.preventDefault();
  const targetId = this.closest("a").getAttribute("href");
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: "smooth" });
});

function showBlock(blockId, element) {
  document.querySelectorAll(".block").forEach((block) => {
    block.classList.remove("active");
  });
  document.getElementById(blockId).classList.add("active");

  document.querySelectorAll(".slide div").forEach((div) => {
    div.classList.remove("active");
  });
  element.classList.add("active");
}

window.addEventListener("load", function () {
  if (location.hash !== "#home") {
    location.hash = "#home";
  }
  const homeElement = document.getElementById("home");
  homeElement.scrollIntoView({ behavior: "smooth" });
});

let dark = document.getElementById("dark");
let bright = document.getElementById("brightness");
let black_images = document.querySelectorAll(".black-image");
let white_images = document.querySelectorAll(".white-image");
let body = document.body;

dark.onclick = () => {
  dark.style.display = "none";
  bright.style.display = "block";

  black_images.forEach((image) => {
    image.style.display = "none";
  });

  white_images.forEach((image) => {
    image.style.display = "block";
  });
  body.classList.add("dark-mode");
};

bright.onclick = () => {
  bright.style.display = "none";
  dark.style.display = "block";

  white_images.forEach((image) => {
    image.style.display = "none";
  });

  black_images.forEach((image) => {
    image.style.display = "block";
  });
  body.classList.remove("dark-mode");
};

ScrollReveal({
  reset: true,
  duration: 2000,
  distance: "50px",
  delay: 100,
});

ScrollReveal().reveal(".photo img", {
  distance: "30px",
  origin: "top",
});
ScrollReveal().reveal(".title p", {
  origin: "left",
});
ScrollReveal().reveal(".caption", {
  origin: "right",
});
ScrollReveal().reveal(".caption3", {
  origin: "left",
});
ScrollReveal().reveal(".contact-btn", {
  origin: "left",
});
ScrollReveal().reveal(".resume", {
  origin: "right",
});
ScrollReveal().reveal(".aboutme", {
  distance: "20px",
  origin: "left",
});
ScrollReveal().reveal(".image img", {
  origin: "left",
});
ScrollReveal().reveal(".about-container", {
  origin: "right",
});
ScrollReveal().reveal(".project-heading", {
  distance: "20px",
  origin: "left",
});
ScrollReveal().reveal(".project-title", {
  distance: "30px",
  origin: "bottom",
});

ScrollReveal().reveal(".project-img", {
  interval: 250,
  origin: "bottom",
});
ScrollReveal().reveal(".showmore", {
  origin: "bottom",
});
ScrollReveal().reveal(".contact-heading", {
  distance: "20px",
  origin: "left",
});
ScrollReveal().reveal(".contact-info", {
  origin: "left",
});
ScrollReveal().reveal(".message", {
  origin: "right",
});
