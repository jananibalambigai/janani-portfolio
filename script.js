/* =========================================================
   JANANI BALAMBIGAI - PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");


        if (navLinks.classList.contains("active")) {

            menuBtn.textContent = "✕";

            menuBtn.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

        } else {

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });


    /* Close menu after clicking a link */

    const navigationItems =
        document.querySelectorAll(".nav-links a");


    navigationItems.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================================
   2. NAVBAR SCROLL EFFECT
========================================================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (!header) return;


    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 8px 30px rgba(0, 0, 0, 0.35)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================================================
   3. SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-title, " +
        ".about-text, " +
        ".highlight-card, " +
        ".skill-category, " +
        ".project-card, " +
        ".experience-card, " +
        ".education-card, " +
        ".certificate-card, " +
        ".contact-content"
    );


/* Add reveal class */

revealElements.forEach((element) => {

    element.classList.add("reveal");

});


/* Intersection Observer */

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    /* Fallback for older browsers */

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


/* =========================================================
   4. STAGGER PROJECT CARDS
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.08}s`;

});


/* =========================================================
   5. STAGGER SKILL CARDS
========================================================= */

const skillCards =
    document.querySelectorAll(".skill-category");


skillCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.08}s`;

});


/* =========================================================
   6. ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


const navItems =
    document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionBottom =
            sectionTop + section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


/* =========================================================
   7. PROJECT CARD TILT EFFECT
========================================================= */

projectCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            /* Disable on mobile */

            if (window.innerWidth < 768) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -2;


            const rotateY =
                ((x - centerX) / centerX) * 2;


            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-6px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* =========================================================
   8. CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById("current-year");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   9. SMOOTH NAVIGATION
========================================================= */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");


        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});