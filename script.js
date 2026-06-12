/* Rapid Acquisition Model — site interactions */

(function () {
  "use strict";

  /* ---------- Sticky header background on scroll ---------- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  mainNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Scroll reveal ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    if (reduceMotion) {
      el.classList.add("visible");
    } else {
      revealObserver.observe(el);
    }
  });

  /* ---------- Metric count-up (triggers once) ---------- */
  const formatCount = (el, value) => {
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    el.textContent = prefix + value + suffix;
  };

  const animateCount = (el) => {
    const target = parseInt(el.dataset.target, 10);
    if (reduceMotion || !target) {
      formatCount(el, target);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      formatCount(el, Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".count").forEach((el) => countObserver.observe(el));

  /* ---------- Model card expand (tap support for touch devices) ---------- */
  document.querySelectorAll(".model-card").forEach((card) => {
    card.addEventListener("click", () => {
      const expanded = card.getAttribute("aria-expanded") === "true";
      card.setAttribute("aria-expanded", String(!expanded));
    });
  });

  /* ---------- Contact form ---------- */
  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("formConfirmation");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    // TODO: wire to a real endpoint (e.g., Formspree, Wix CRM webhook, or
    // a serverless function) before launch. GitHub Pages is static, so the
    // submission currently only confirms client-side.
    form.querySelectorAll("input, select, textarea, button").forEach((el) => {
      el.disabled = true;
    });
    confirmation.hidden = false;
    confirmation.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
  });

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
