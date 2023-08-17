let display = document.querySelector("#scholarsCount");
gsap.registerEffect({
  name: "scholarCounter",
  extendTimeline: true,
  defaults: {
    end: 0,
    duration: 5,
    ease: "power1",
    increment: 1,
  },
  effect: (targets, config) => {
    let tl = gsap.timeline();
    tl.to(targets, {
      duration: config.duration,
      snap:{innerText:config.increment},
      innerText: config.end,
      ease: config.ease
    });
    return tl;
  }
});

let tl = gsap.timeline() 
let num = targets[0].innerText.replace(/\,/g,'')
tragets[0].innerText = num
tl.scholarCounter(display, {end:1000, increment:5})