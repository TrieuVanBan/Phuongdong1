// fixed header
const result = document.getElementById('result');
function scrolled() {
    var chieucao = scrollY;
    if (chieucao > 0) {
        result.classList.add('addClass')
    }
    else {
        result.classList.remove('addClass')
    }
}
window.onscroll = scrolled;

// menu
const menu = document.getElementById('menu')
const button_menu = document.getElementById('btn-menu')

button_menu.addEventListener('click', () => {
    menu.classList.toggle('invisible')
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

