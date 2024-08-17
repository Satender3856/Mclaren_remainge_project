const container = document.querySelector('.container-scollx');
const sections = gsap.utils.toArray('.container-scollx section');
const texts = gsap.utils.toArray('.anim');
const mask = document.querySelector('.mask');

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger:{
        trigger: ".container-scollx",
        pin: true,
        scrub: 1,
        end: "+=3000"
    }
})

gsap.to(mask, {
    width: "100%",
    scrollTrigger:{
        trigger: ".wrapper",
        start: "top left",
        scrub: 1

    }
})

sections.forEach(section => {
    let text = section.querySelectorAll('.anim');

    gsap.from(text, {
        y:-10,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger:{
            trigger: section, 
            containerAnimation: scrollTween,
            start: "left center"
        } 
    })
})

function adjustSvgText() {
    const texts = document.querySelectorAll("#responsive-svg text");
    if (window.innerWidth <= 600) {
      texts[0].setAttribute("x", "5");
      texts[0].setAttribute("y", "30");
      texts[1].setAttribute("x", "223");
      texts[1].setAttribute("y", "30");
      texts[2].setAttribute("x", "450");
      texts[2].setAttribute("y", "30");
      texts[3].setAttribute("x", "677");
      texts[3].setAttribute("y", "30");
      texts[4].setAttribute("x", "845");
      texts[4].setAttribute("y", "30");
    } else if (window.innerWidth <= 400) {
      texts[0].setAttribute("x", "5");
      texts[0].setAttribute("y", "30");
      texts[1].setAttribute("x", "223");
      texts[1].setAttribute("y", "30");
      texts[2].setAttribute("x", "450");
      texts[2].setAttribute("y", "30");
      texts[3].setAttribute("x", "677");
      texts[3].setAttribute("y", "30");
      texts[4].setAttribute("x", "870");
      texts[4].setAttribute("y", "30");
    } else {
      texts[0].setAttribute("x", "5");
      texts[0].setAttribute("y", "30");
      texts[1].setAttribute("x", "223");
      texts[1].setAttribute("y", "30");
      texts[2].setAttribute("x", "450");
      texts[2].setAttribute("y", "30");
      texts[3].setAttribute("x", "677");
      texts[3].setAttribute("y", "30");
      texts[4].setAttribute("x", "840");
      texts[4].setAttribute("y", "30");
    }
  }

  window.addEventListener("resize", adjustSvgText);
  window.addEventListener("load", adjustSvgText);
