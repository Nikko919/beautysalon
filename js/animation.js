// gsap.from('.hero__text-box', {
//   opacity: 0, duration: 2, x: -100,
// })
// gsap.from('.hero__title', {
//   opacity: 0, duration: 2, x: -100, delay: .5
// })
// gsap.from('.hero__subtitle', {
//   opacity: 0, duration: 2, x: -100, delay: 1
// })
// gsap.from('.hero__btn-link', {
//   opacity: 0, duration: 2, x: -100, delay: 1.2, ease: "elastic.out(.5,0.3)"
// })

// gsap.from('.hero__img', {
//   opacity: 0, duration: 3, z: 100, scale: 1.2
// })

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
