let expanders = gsap.utils.toArray(".expander");

let activeExpander;
expanders.forEach((expander, index) => {
  let close = expander.querySelector(".close");
  let animation = gsap.timeline({ paused: true });
  animation
    .to(expander, { width: 200, duration: 0.4 })
    .from(close, { opacity: 0, scale: 0.5, duration: 0.2 }, "-=0.1");
  expander.animation = animation;

  expander.addEventListener("click", function () {
    if (activeExpander) {
      activeExpander.animation.reverse();
    }
    expander.animation.play();
    activeExpander = expander;
  });

  close.addEventListener("click", function (event) {
    event.stopPropagation();
    expander.animation.reverse();
  });
});

gsap.set(".expander", {
  backgroundColor: gsap.utils.wrap(["red", "green", "blue"]),
});
