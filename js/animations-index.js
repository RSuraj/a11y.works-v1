var tl = gsap.timeline();
tl.set("#fact-2", { display: "none", opacity: 0, x: "100%" });

document.querySelectorAll(".fact").forEach(function (fact) {
  fact.addEventListener("click", function () {
    gsap.to("#fact-1", { display: "none" });
    gsap.to("#fact-2", {
      display: "block",
      duration: 1,
      opacity: 1,
      x: 0,
      ease: "back.in",
    });
  });
});

tl.set(".slider-img", {
  opacity: 0,
  backgroundPosition: "50% 50%",
})
  .fromTo(".footer", { y: "-50px", opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo(
    ".slider",
    {
      translateY: "-100%",
    },
    {
      translateY: 0,
      duration: 1,
      ease: "power2.easeInOut",
    }
  )
  .fromTo(
    ".slider-img",
    { scale: 3 },
    {
      duration: 1,
      opacity: 1,
      scale: 1,
      ease: "power2.easeInOut",
      transformOrigin: "center",
    }
  );
if (window.matchMedia("(min-width: 600px)").matches) {
  tl.fromTo(
    ".main-content",
    {
      x: "52%",
      textAlign: "center",
      y: "70px",
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
    }
  )
    .to(".main-content", {
      x: 0,
      duration: 1,
      ease: "slow( 0.7, 0.7,false)",
      textAlign: "left",
    })
    .to(".main-cta", { width: "max-content" }, "-=1")
    .to(
      ".slider-img",
      { backgroundPosition: "10% 50%", duration: 1.5, ease: "circ.out" },
      "-=1"
    );
} else {
  tl.fromTo(
    ".main-content",
    {
      opacity: 0,
      duration: 1,
      y: "50px",
      ease: "power1.out",
    },
    { y: 0, opacity: 1, textAlign: "center" },
    "-=4"
  );
}
tl.from("#fact-1", { x: "100%", duration: 1 }, "-=1.5");
