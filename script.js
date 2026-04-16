/* ===========================
   Portfolio JavaScript
   Handles: nav scroll, mobile menu, scroll animations
   =========================== */

(function () {
  "use strict";

  /* --- Navigation scroll shadow --- */
  const nav = document.getElementById("nav");

  function updateNavShadow() {
    nav.classList.toggle("nav--scrolled", window.scrollY > 10);
  }

  window.addEventListener("scroll", updateNavShadow, { passive: true });

  /* --- Mobile menu toggle --- */
  const toggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");

  toggle.addEventListener("click", function () {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("nav__links--open", !isOpen);
  });

  // Close mobile menu when a link is clicked
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      toggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("nav__links--open");
    }
  });

  /* --- Scroll-triggered fade-in --- */
  const faders = document.querySelectorAll(
    ".section__heading, .timeline__item, .card, .skills__group, .education__item, .education__certs, .about__content, .contact__text, .contact__links"
  );

  faders.forEach(function (el) {
    el.classList.add("fade-in");
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  faders.forEach(function (el) {
    observer.observe(el);
  });
})();
