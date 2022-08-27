const slides = document.querySelectorAll(".slide");
const numOfImg = document.querySelectorAll(".slide").length;
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const nav = document.querySelector(".navbar");
let count = 0;

// Images slider
slideShow(count);
function slideShow(num) {
    checkCount(num);
    slides[num].style.display = "block";
}

function checkCount(num) {
    if (num > 0) {
        if (num < (numOfImg - 1)) {
            rightArrow.style.display = "block";
            leftArrow.style.display = "block";
        } else {
            rightArrow.style.display = "none";
            leftArrow.style.display = "block";
            count = numOfImg - 1;
            num = numOfImg - 1;
        }
    } else {
        leftArrow.style.display = "none";
        count = 0;
        num = 0;
    }
}
leftArrow.addEventListener("click", function () {
    for (let i = 0; i < numOfImg; i++) {
        slides[i].style.display = "none";
    }
    count--;
    slideShow(count);
});
rightArrow.addEventListener("click", function () {
    for (let i = 0; i < numOfImg; i++) {
        slides[i].style.display = "none";
    }
    count++;
    slideShow(count);
});

// Navbar visibility On Scrolling
let lastScroll = window.scrollY;

window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY;
    if (currentScroll <= 0) {
        nav.classList.remove("scroll-visible");
        nav.classList.remove("scroll-hidden");
        nav.classList.add("scroll-transparent");
    } else if (lastScroll < currentScroll) {
        nav.classList.remove("scroll-visible");
        nav.classList.add("scroll-hidden");
    } else {
        nav.classList.remove("scroll-hidden");
        nav.classList.remove("scroll-transparent");
        nav.classList.add("scroll-visible");
    }

    lastScroll = currentScroll;
});

// signup-login form animation
const signup = document.querySelector(".signup-btn");
const login = document.querySelector(".login-btn");
const container = document.querySelector(".form-container-child");

signup.addEventListener("click", function () {
    container.classList.add("right-panel-active");
});
login.addEventListener("click", function () {
    container.classList.remove("right-panel-active");
});

// navbar hamburger
const logo = document.querySelector(".left");