document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lenis
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Page load animations starts
  // Animate the navigation bar
  const tl=gsap.timeline();
  gsap.from(".navbar", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power3.out",
  });

  // Animate the hero section
  tl.from(".hero h1", {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: "power3.out",
  });

  tl.from(".hero p", {
    duration: 0.5,
    x: -50,
    opacity: 0,
    ease: "power3.out",
  },"-=0.3");

  tl.from(".hero .btn", {
    duration: 0.5,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });

  // Animate Services section
  tl.from("#services", {
    duration: 0.5,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  },"-=0.7");
  // Page load animations ends

  // Animate FAQ cards with smooth scrub effect
  gsap.from(".faq-card", {
    scrollTrigger: {
      trigger: ".faq-card",
      start: "top 80%",
      end: "top top",
      scrub: true,
      markers: false,
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Animate Counting Stats
  function animateCounting(element, target) {
    gsap.to(element, {
      innerText: target,
      duration: 0.5,
      snap: { innerText: 10 },
      ease: "power1.out",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "center 20%",
        scrub: false,
        markers: false,
        toggleActions: "play none none reverse",
      },
    });
  }

  // Animate each stat number
  document.querySelectorAll(".stat-number").forEach((element) => {
    const target = parseInt(element.getAttribute("data-target"));
    animateCounting(element, target);
  });

  // Animate process steps with smooth scrub effect
  gsap.from(".process-step", {
    scrollTrigger: {
      trigger: ".process-step",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: false,
    },
    y: 50,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
  });
});
