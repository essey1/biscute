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

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    delay: 250,
    // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 150})
sr.reveal(`.home__social`, {delay: 250})
sr.reveal(`.about__img, .contact__box`,{origin: 'left'})
sr.reveal(`.about__data, .contact__form`,{origin: 'right'})
sr.reveal(`.gallery, .product__card`,{interval: 100})
sr.reveal(`.event, .qualities__content, .footer`,{interval: 50})

// Clear all the input values after the user submits the form
const formToReset = document.getElementById('contactForm');
formToReset.addEventListener('submit', (e) => {
   setTimeout(function() { 
    e.preventDefault();
    formToReset.reset();
   }, 1);
});