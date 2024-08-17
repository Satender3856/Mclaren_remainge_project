
function toggleMenu(){
    const menu = document.querySelector('.menu')
    const nav = document.querySelector('.nav')
    menu.classList.toggle('active')
    nav.classList.toggle('active')
}


// change bacground image
function changeVideo(name){
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');

    bgVideoList.forEach(video => {
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });

    models.forEach(model => {
        model.classList.remove('active');
        if(model.classList.contains(name)){
            model.classList.add('active');
        }
    });

    trailers.forEach(video => {
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });

    
}


// *************locomotive scroll

function scroller(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there' a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
scroller()

// function cursor(){
// var crsr = document.querySelector(".cursor")
// var main = document.querySelector(".banner")
// main.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x+ 20 +"px"
//     crsr.style.top = dets.y+ 20 +"px"
// })

// var crsr = document.querySelector(".cursor")
// var main = document.querySelector(".main")
// main.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x+20+"px"
//     crsr.style.top = dets.y+20+"px"
// })

// var crsr = document.querySelector(".cursor")
// var header = document.querySelector("header")
// header.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x+20+"px"
//     crsr.style.top = dets.y+20+"px"
// })

// var crsr = document.querySelector(".cursor")
// var page02 = document.querySelector(".page02")
// page02.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x+20+"px"
//     crsr.style.top = dets.y+"px"
// })

// var crsr = document.querySelector(".cursor")
// var page03 = document.querySelector(".page03")
// page03.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x+20+"px"
//     crsr.style.top = dets.y+20+"px"
// })

// var crsr = document.querySelector(".cursor")
// var page04 = document.querySelector(".page04")
// page04.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x+20+"px"
//     crsr.style.top = dets.y+20+"px"
// })
// }
// cursor()

function cursor01(){
    window.addEventListener("mousemove", function (dets){
        document.querySelector(".cursor01").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
cursor01()

function page01(){
    
var tl = gsap.timeline({
    ScrollTrigger:{
        trigger:".page01 text01",
        scroller:".main",
        // markers:true,
        start:"top 0%",
        end:"top 0%",
        scrub:15
    }
})

tl.to(".page01 .text01",{
    x:-80,
    
},"animation")
tl.to(".page01 .text02",{
    x:100,
    
},"animation")

tl.to(".page01 video",{
    width:"90%"
},"animation")

}

page01()

function page02(){
    
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


var tl = gsap.timeline({scrollTrigger:{
    trigger:".page02",
    start:"50% 50%",
    end:"250% 50%",
    scrub:true,
    // markers:true,
    pin:true,

}})
tl.to(".rotate-div",{
    rotate: -15,
    scale:0.8,
},'a')

tl.to("#row-div",{
    marginTop:"5%"
},'a')

tl.to("#row-div-3",{
    marginTop:"%"
},'a')

tl.to("#row-div-4",{
    marginTop:"-9%"
},'a')

tl.to("#row-div-5",{
    marginTop:"-11%"
},'a')

tl.to(".overlay-div h1",{
    opacity:"1",
    delay:0,
},'a')

tl.to(".overlay-div",{
    backgroundColor:"#000000b2",
},'a')



}
page02()

function page03(){
    var tl2 = gsap.timeline({scrollTrigger:{
        trigger:".page03",
        start:"0% 70%",
        end:"50% 50%",
        scrub:true,
        // markers:true,
        // pin:true,
    
    }})
    tl2.to(".rounded-div-wrapper",{
        height:0,
        marginTop:0
    })
    
    
}
page03()

function page03_two(){
    
var tl3 = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"-40% 50%",
    end:"100% 100%",
    scrub:1,
    // markers:true,
    // pin:true,

},
});
tl3.to(".text-area-hover",{
    width:"100%",

})

}
page03_two()


function page04(){
    document.querySelectorAll(".box").forEach(function (elem) {
        var rotate = 0;
        var diffrot = 0;
      
        elem.addEventListener("mouseleave", function (dets) {
          gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
          });
        });
      
        elem.addEventListener("mousemove", function (dets) {
          var diff = dets.clientY - elem.getBoundingClientRect().top;
          diffrot = dets.clientX - rotate;
          rotate = dets.clientX;
          gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
          });
        });
      });
}

page04()


function canvas(){
    const canvas = document.querySelector(".canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const context = canvas.getContext("2d");
  const frameCount = 161;
  
  const currentFrame = (index) => `./Mc_canvas/${(index + 1).toString()}.jpg`;
  
  const images = [];
  let ball = { frame: 0 };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    console.log(currentFrame(i));
    images.push(img);
  }
  
  gsap.to(ball, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 0.5,
      pin: "canvas",
      end: "15%",
    },
    onUpdate: render,
  });
  
  gsap.fromTo(
    ".ball-text",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        scrub: 1,
  
        start: "50%",
        end: "60%",
      },
      onComplete: () => {
        gsap.to(".ball-text", { opacity: 0 });
      },
    }
  );
  
  images[0].onload = render;
  
  function render() {
    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;
  
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[ball.frame], 0, 0);
  }
  }
  canvas()
  