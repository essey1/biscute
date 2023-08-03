/*==================== EVENTS SWIPER  ====================*/
let swiperEvent = new Swiper(".event__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Clear all the input values after the user submits the form
const formToReset = document.getElementById('contactForm');
formToReset.addEventListener('submit', (e) => {
   setTimeout(function() { 
    e.preventDefault();
    formToReset.reset();
   }, 1);
});