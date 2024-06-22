// HOMEBANNER
var swiper = new Swiper(".homebanner-slider", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});


// LOGO SLIDER 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 32,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },

        578: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 4.5,
            spaceBetween: 20,
        },

        991: {
            slidesPerView: 5.5,
            spaceBetween: 20,
        },

        1140: {
            slidesPerView: 6,
            spaceBetween: 20,
        },

    },
});


// LOGO SLIDER 
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 5,
    spaceBetween: 40,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },

        578: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 4.5,
            spaceBetween: 20,
        },

        991: {
            slidesPerView: 5.5,
            spaceBetween: 20,
        },

        1140: {
            slidesPerView: 5,
            spaceBetween: 20,
        },

    },
});


// NEWS SLIDER
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1.1,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    centeredSlides: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});