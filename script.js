// //Display Text Animation
// function display_text_animation() {
//   let tl = gsap.timeline();

//   tl.from(".display-title h1", {
//     opacity: 0,
//     y: 50,
//     stagger: 0.5,
//     delay: 0,
//   });
//   tl.from(".display-title h2", {
//     opacity: 0,
//     y: 50,
//     stagger: 0.5,
//     delay: 0,
//   });
//   tl.from(".display-title p", {
//     opacity: 0,
//     y: 50,
//     stagger: 0.5,
//     delay: 0,
//   });
//   tl.from(".project1", {
//     opacity: 0,
//     y: 50,
//     stagger: 0.5,
//     delay: 0,
//   });

//   tl.from(".navbar", {
//     opacity: 0,
//     y: -50,
//     stagger: 0.5,
//     delay: 0,
//   });
// }

// display_text_animation();

// Display Text Animation
function display_text_animation() {
  let tl = gsap.timeline();

  tl.from(".display-title h1", {
    opacity: 0,
    y: 50,
    stagger: 0.5,
    delay: 0,
  });
  tl.from(".display-title h2", {
    opacity: 0,
    y: 50,
    stagger: 0.5,
    delay: 0,
  });
  tl.from(".display-title p", {
    opacity: 0,
    y: 50,
    stagger: 0.5,
    delay: 0,
  });
  tl.from(".project-1", {
    opacity: 0,
    y: 50,
    stagger: 0.5,
    delay: 0.2,
  });
  tl.from(".navbar", {
    opacity: 0,
    y: -50,
    stagger: 0.5,
    delay: 0,
  });
}

display_text_animation();

// Project 1
const project1_container = document.querySelector(".project-1-images");
const project1_front = document.querySelector("#project-1-front-img");
const project1_front_video = document.querySelector(
  "#project-1-front-img video"
);
const project1_back = document.querySelector("#project-1-back-img");

project1_container.addEventListener("mouseenter", () => {
  project1_front_video.play();
  gsap.to(project1_front, {
    scale: 1.1,
    ease: "power1.out",
    duration: 0.5,
  });
  gsap.to(project1_back, {
    scale: 0.6,
    ease: "power1.out",
    duration: 0.5,
  });
});
project1_container.addEventListener("mouseleave", () => {
  project1_front_video.pause();
  project1_front_video.currentTime = 0;
  gsap.to(project1_front, {
    scale: 1,
    ease: "power1.out",
    duration: 0.5,
  });
  gsap.to(project1_back, {
    scale: 1,
    ease: "power1.out",
    duration: 0.5,
  });
});

// Project 2
const project2_container = document.querySelector("#project-2-front-img");
const project2_video = document.querySelector("#project-2-front-img video");
const project2_img = document.querySelector("#project-2-back-img img");

project2_container.addEventListener("mouseenter", () => {
  project2_video.play();
  gsap.to(project2_container, {
    scale: 1.2,
    ease: "power1.out",
    duration: 0.5,
  });
  gsap.to(project2_img, {
    scale: 0.9,
    ease: "power1.out",
    duration: 0.5,
  });
});
project2_container.addEventListener("mouseleave", () => {
  project2_video.pause();
  project2_video.currentTime = 0;
  gsap.to(project2_container, {
    scale: 1,
    ease: "power1.out",
    duration: 0.5,
  });
  gsap.to(project2_img, {
    scale: 1,
    ease: "power1.out",
    duration: 0.5,
  });
});

// Project 3
const project3_container = document.querySelector("#project-3-front-img");
const project3_video = document.querySelector("#project-3-front-img video");
const project3_img = document.querySelector("#project-3-back-img img");

project3_container.addEventListener("mouseenter", () => {
  project3_video.play();
  gsap.to(project3_container, {
    scale: 1.2,
    ease: "power1.out",
    duration: 0.5,
  });
  gsap.to(project3_img, {
    scale: 0.6,
    ease: "power1.out",
    duration: 0.5,
  });
});
project3_container.addEventListener("mouseleave", () => {
  project3_video.pause();
  project3_video.currentTime = 0;
  gsap.to(project3_container, {
    scale: 1,
    ease: "power1.out",
    duration: 0.5,
  });
  gsap.to(project3_img, {
    scale: 1,
    ease: "power1.out",
    duration: 0.5,
  });
});

gsap.from("#getintouch", {
  scrollTrigger: {
    trigger: "#four",
    start: "0% 100%",
    end: "100% 100%",
    scrub: 2,
    // markers: true
  },
  x: -100,
  duration: 1,
});
