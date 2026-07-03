/* ==========================================
   ADVOCATE DURVIJAY SINGH PORTFOLIO
   script.js
========================================== */

// ==============================
// PRELOADER
// ==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

});

// ==============================
// BACK TO TOP BUTTON
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==============================
// COUNTER ANIMATION
// ==============================

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target = parseInt(counter.dataset.target);

    let count = 0;

    const speed = target / 120;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count) + "+";

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

};

const counterObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    },

    {

        threshold: 0.5

    }

);

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ==============================
// ACTIVE NAVBAR LINK
// ==============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

});

// ==============================
// CLOSE MENU AFTER CLICK
// ==============================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

    });

});

// ==============================
// HEADER BACKGROUND ON SCROLL
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(8,10,18,.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(11,15,25,.95)";
        header.style.boxShadow = "none";

    }

});

// ==============================
// SMOOTH SCROLL
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==============================
// CURRENT YEAR (OPTIONAL)
// ==============================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

console.log("Advocate Durvijay Singh Portfolio Loaded Successfully");