document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const menuIcon = document.getElementById("menu-icon");
    const mobileNav = document.getElementById("mobile-nav");
    const footerIconTop = document.querySelector(".footericonTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("white-bg");
        } else {
            header.classList.remove("white-bg");
        }
    });

    menuIcon.addEventListener("click", function () {
        mobileNav.style.display = (mobileNav.style.display === "flex") ? "none" : "flex";
    });

    footerIconTop.addEventListener("click", function (event) {
        event.preventDefault();

        // Desplazarse suavemente hacia la parte superior de la página
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});