
let tl = gsap.timeline({ defaults: { duration: 1 } });
let imgTl = gsap.timeline({ defaults: { duration: 2 } });


tl.from(".hero__title", {
  x: -100,
  stagger: .6,
  opacity: 0,
  delay: 0.5
})
  .from(".hero__subtitle", {
    x: -100,
    stagger: .6,
    opacity: 0
  })
  .from(".hero__btn-link", {
    x: -100,
    // stagger: 2,
    opacity: 0,
    ease: "elastic.out(1,1)",
    duration: 2
  });

imgTl.from(".hero__img", {
  z: 100,
  scale: 1.2,
  opacity: 0
})
