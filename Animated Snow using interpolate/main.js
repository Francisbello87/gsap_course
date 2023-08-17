let numberOfFlakes = 90;
let width = window.innerWidth;
let height = window.innerHeight;

function createSnowFlakes() {
  let flake = document.createElement("div");
  let flakeClass = "flake flake" + gsap.utils.random(1, 4, 1);
  flake.setAttribute("class", flakeClass);
  document.body.appendChild(flake);
  return flake;
}

function animateFlake(flake) {
  let scaleFactor = Power3.easeIn(Math.random());
  let scale = gsap.utils.interpolate(0.3, 2, scaleFactor);
  let duration = gsap.utils.interpolate(2, 4, 1 - scaleFactor);
  let opacity = gsap.utils.interpolate(0.5, 1, scaleFactor);
  gsap.set(flake, {
    y: -250,
    x: gsap.utils.random(0, width),
    scale: scale,
    opacity: opacity,
  });
  gsap.to(flake, {
    y: height + 200,
    x: "+=200",
    duration: duration,
    delay: "random(0,4)",
    ease: "none",
    rotation: "random(-60, 200)",
    onComplete: animateFlake,
    onCompleteParams: [flake],
  });
}

for (let i = 0; i < numberOfFlakes; i++) {
  let flake = createSnowFlakes();
  animateFlake(flake);
}

document.addEventListener("click", () =>
  gsap.globalTimeline.paused(!gsap.globalTimeline.paused())
);

// let smallScale = 0.2
// let bigScale = 0.8
// let duration = 10

// gsap.set(".small", {scale:smallScale})
// gsap.set(".big", {scale: bigScale})

// let smallDuration = gsap.utils.interpolate(2, 4, 1 - smallScale)
// let bigDuration = gsap.utils.interpolate(2, 4, 1 - bigScale)

// gsap.to(".small", {x:800, duration:smallDuration})
// gsap.to(".big", {x:800, duration:bigDuration})