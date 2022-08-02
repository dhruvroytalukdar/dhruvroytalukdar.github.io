gsap.from(".rocket-image", {
  duration: 2,
  y: 550,
  opacity: 0,
  scale: 1.4,
  ease: Expo.easeOut,
});

gsap.from(".hero-section h1", {
  duration: 2,
  delay: 1.5,
  x: -20,
  opacity: 0,
  ease: Expo.easeOut,
});

gsap.from(".hero-section p", {
  duration: 1.5,
  delay: 1.8,
  opacity: 0,
  y: -20,
  ease: Power3.easeOut,
});

gsap.from(".navbar", {
  duration: 1,
  delay: 2,
  opacity: 0,
  y: -50,
  ease: Power4.easeOut,
});

gsap.from(".about-section", {
  duration: 1,
  delay: 2.5,
  stagger: 1,
  opacity: 0,
  y: -25,
  ease: Expo.easeOut,
});

gsap.from(".image-section button", {
  duration: 1,
  delay: 2.5,
  opacity: 0,
  ease: Power4.easeOut,
});

gsap.from(".image-section p", {
  duration: 1,
  delay: 2.4,
  opacity: 0,
  y: -20,
  ease: Power4.easeOut,
});
