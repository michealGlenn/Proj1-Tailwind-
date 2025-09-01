const toggleBtn = document.getElementById("toggleBtn"); 
const closeBtn = document.getElementById("closeBtn");   
const sidebar = document.getElementById("sidebar");     

// hide sidebar initially
sidebar.classList.add("translate-x-full", "transition-transform", "duration-300");

// open sidebar
toggleBtn.addEventListener("click", () => {
  sidebar.classList.remove("translate-x-full");
  sidebar.classList.add("translate-x-0");
});

// close sidebar (prevent anchor reload)
closeBtn.parentElement.addEventListener("click", (e) => {
  e.preventDefault(); // stop <a href=""> from reloading
  sidebar.classList.remove("translate-x-0");
  sidebar.classList.add("translate-x-full");
});


// const swiper = new Swiper(".swiper", {
//   loop: true, // infinite loop
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// const swiper2 = new Swiper(".swiper1", {
//   loop: true, // infinite loop
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// First swiper
const swiper1 = new Swiper(".swiper-one", {
  loop: true,
  navigation: {
    nextEl: ".swiper-one .swiper-button-next",
    prevEl: ".swiper-one .swiper-button-prev",
  },
   pagination: {
   el: ".swiper-pagination",
   clickable: true,
 },
});

// Second swiper
const swiper2 = new Swiper(".swiper-two", {
  loop: true,
  navigation: {
    nextEl: ".swiper-two .swiper-button-next",
    prevEl: ".swiper-two .swiper-button-prev",
  },
     pagination: {
   el: ".swiper-pagination",
   clickable: true,
 },
});

// Third swiper
const swiper3 = new Swiper(".swiper-three", {
  loop: true,
  // autoplay:true,
  navigation: {
    nextEl: ".swiper-three .swiper-button-next",
    prevEl: ".swiper-three .swiper-button-prev",
  },
     pagination: {
   el: ".swiper-pagination",
   clickable: true,
 },
});

// Forth swiper
const swiper4 = new Swiper(".swiper-four", {
  loop: true,
  // autoplay:true,
  navigation: {
    nextEl: ".swiper-four .swiper-button-next",
    prevEl: ".swiper-four .swiper-button-prev",
  },
     pagination: {
   el: ".swiper-pagination",
   clickable: true,
 },
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,   // show 1 card at a time on mobile
  spaceBetween: 1,
});

let promt = alert('Hello👋, I am Micheal Glenn. A Frontend end web developer🤗. Please click on feedback to share with me your experience on my website (open the menu button to see the feedback option on mobile devices). Thank you');

console.log(promt);
