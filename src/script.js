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


const swiper = new Swiper(".swiper", {
  loop: true, // infinite loop
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
