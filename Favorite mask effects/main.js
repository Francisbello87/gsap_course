gsap.registerPlugin(SplitText);

function init() {
  gsap.set(".wrapper", { autoAlpha: 1 });
  let taglineSplit = new SplitText("h2", { type: "chars, words" });
  let animation = gsap
    .timeline()
    // .from(".logo", { width: 0, ease: "power1.in", duration: 0.3 })
    // .from(taglineSplit.words, { yPercent: -100, stagger: 0.08 });

    // // Animate from the center code
    // .from("h1", { yPercent: 100 })
    // .from("h2", { yPercent: -100 }, 0);

    // // Animate from the right code
    // .from("h1", { xPercent: 100 })
    // .from("h2", { xPercent: -100 }, 0);
    // Wipe from the right animation code
    .from(".logo", { width: 0, x: 584 })
    .from("h1", { x: -584 }, 0)
    .from(".tagline", { width: 0 }, 0);
}

window.addEventListener("load", init)

// SplitText is not available in Free version