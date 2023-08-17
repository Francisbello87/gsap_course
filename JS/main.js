let display = document.querySelector("#scholarsCount");
gsap.registerEffect({
  name: "schoolCounter",
  extendTimeline: true,
  defaults: {
    end: 0,
    duration: 3,
    ease: "power1",
    increment: 1,
  },
  effect: (targets, config) => {
    let tl = gsap.timeline();
    tl.to(targets, {
      duration: config.duration,
      modifiers:{
        innerText:function (innerText) {
            return gsap.utils.snap(config.increment, innerText).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
      },
    //   snap:{innerText:config.increment},
      innerText: config.end,
      ease: config.ease
    });
    return tl;
  }
});

let tl = gsap.timeline() 
tl.from('#stat2', {opacity:0})
tl.schoolCounter('#lessonsCount', {end:45, increment: 1}, '-=0.5')
tl.from('#stat1', {opacity:0})
tl.schoolCounter(display, {end:1000}, '-=0.5')
tl.from('#stat3', {opacity:0})
tl.schoolCounter('#lecturersCount', {end:200, increment:1}, '-=0.5')