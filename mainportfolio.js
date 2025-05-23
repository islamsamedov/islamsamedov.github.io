function reveal() {
    let b = document.querySelectorAll(".reveal");
    for (let a = 0; a < b.length; a++) {
        let c = window.innerHeight;
        b[a].getBoundingClientRect().top < c - 80 && b[a].classList.add("active");
    }
}
particlesJS.load("particles-js", "particles.json"), Splitting(), window.addEventListener("scroll", reveal);
const swiper = new Swiper(".about__content", {
        loop: !0,
        slidesPerView: 3,
        spaceBetween: 20,
        a11y: { enabled: !1 },
        navigation: { nextEl: ".about__slider-next", prevEl: ".about__slider-prev" },
        breakpoints: { 300: { slidesPerView: 1 }, 520: { slidesPerView: 2 }, 900: { slidesPerView: 3 } },
    }),
    worksSwiper = new Swiper(".works__content", {
        slidesPerView: 3,
        spaceBetween: 40,
        a11y: { enabled: !1 },
        pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 },
        breakpoints: { 300: { spaceBetween: 50, slidesPerView: 1 }, 570: { spaceBetween: 20, slidesPerView: 2 }, 991: { spaceBetween: 30, slidesPerView: 3 }, 1150: { spaceBetween: 40, slidesPerView: 3 } },
    });
$(".contact__form").on("submit", function () {
    let b = document.querySelector(".contact__form"),
        a = new FormData(b),
        c = a.get("name"),
        d = a.get("subject"),
        e = a.get("email"),
        f = a.get("message");
    return (
        $.ajax({
            url: "https://formspree.io/f/myyorekk",
            method: "POST",
            data: {
                Message: `Name : ${c} 
 Subject : ${d} 
 Email : ${e} 
 Message : ${f}`,
            },
            dataType: "json",
        }),
        alert(`${c} your message was succesfully sent!`),
        b.reset(),
        !1
    );
}),
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", function (a) {
            a.preventDefault(), document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });
const modalBtn = document.querySelectorAll("[data-modal]"),
    modal = document.querySelectorAll(".modal"),
    modalClose = document.querySelectorAll(".modal__close"),
    body = document.querySelector(".body");
function closeModal(a) {
    a.querySelector(".modal__content").removeAttribute("style"),
        setTimeout(() => {
            a.classList.remove("show"), body.classList.remove("no-scroll");
        }, 200);
}
modalBtn.forEach((a) => {
    a.addEventListener("click", (a) => {
        let b = a.currentTarget.getAttribute("data-modal"),
            c = document.getElementById(b),
            d = c.querySelector(".modal__content");
        if (
            (d.addEventListener("click", (a) => {
                a.stopPropagation();
            }),
            a.preventDefault(),
            c.classList.add("show"),
            body.classList.add("no-scroll"),
            setTimeout(function () {
                (d.style.transform = "none"), (d.style.opacity = 1);
            }, 1),
            "modal-img" == b)
        ) {
            let e = a.currentTarget,
                f = document.querySelector(".full-img"),
                g = e.getAttribute("data-img");
            f.src = `img/${g}`;
        }
    });
}),
    modalClose.forEach((a) => {
        a.addEventListener("click", (a) => {
            closeModal(a.currentTarget.closest(".modal"));
        });
    }),
    modal.forEach((a) => {
        a.addEventListener("click", (a) => {
            closeModal(a.currentTarget);
        });
    });
const burgerMN = document.querySelector(".header__burger"),
    headerNav = document.querySelector(".sidebar"),
    link = document.querySelectorAll(".nav__link");
burgerMN.addEventListener("click", function () {
    headerNav.classList.toggle("open"), burgerMN.classList.toggle("active"), body.classList.toggle("no-scroll");
}),
    link.forEach((a) => {
        a.addEventListener("click", () => {
            headerNav.classList.remove("open"), burgerMN.classList.remove("active"), body.classList.remove("no-scroll");
        });
    });
