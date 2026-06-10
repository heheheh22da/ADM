// =====================================
// MENU MOBILE
// =====================================

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (nav.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
}

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });
});

// =====================================
// HEADER SCROLL
// =====================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// =====================================
// CONTADORES
// =====================================

const counters = document.querySelectorAll(".counter");

const animateCounter = counter => {

    const target = +counter.dataset.target;

    const updateCounter = () => {

        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {

            counter.innerText = current + increment;

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText =
                target.toLocaleString("pt-BR");

        }

    };

    updateCounter();

};

const statsSection = document.querySelector(".stats");

let started = false;

if (statsSection) {

    window.addEventListener("scroll", () => {

        const trigger =
            statsSection.offsetTop - 500;

        if (
            window.scrollY > trigger &&
            !started
        ) {

            counters.forEach(counter => {
                animateCounter(counter);
            });

            started = true;

        }

    });

}

// =====================================
// REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(
    ".service-card, .stat-box, .review-card, .about-content"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// =====================================
// BOTÃO TOPO
// =====================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("visible");

    } else {

        topBtn.classList.remove("visible");

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// =====================================
// SCROLL SUAVE
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// =====================================
// HERO ANIMATION
// =====================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// =====================================
// PARALLAX HERO
// =====================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    const offset = window.scrollY;

    hero.style.backgroundPositionY =
        offset * 0.4 + "px";

});

// =====================================
// EFEITO 3D NOS CARDS
// =====================================

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 12;

        const rotateX =
            ((y / rect.height) - 0.5) * -12;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

// =====================================
// BOTÃO WHATSAPP
// =====================================

// =====================================
// WHATSAPP + MENSAGEM AUTOMÁTICA
// =====================================

const mensagemWhatsapp = encodeURIComponent(
    "Olá! Gostaria de agendar uma visita."
);

const whatsappButtons =
document.querySelectorAll(
    'a[href*="wa.me"]'
);

whatsappButtons.forEach(btn => {

    const href =
    btn.getAttribute("href");

    if (
        href &&
        !href.includes("?text=")
    ) {

        btn.href =
        `${href}?text=${mensagemWhatsapp}`;

    }

    btn.addEventListener("mouseenter", () => {

        btn.style.transition = ".3s";

        btn.style.transform =
        "translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
        "translateY(0) scale(1)";

    });

});
// =====================================
// LOADING
// =====================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "ADM Desentupidora carregada com sucesso!"
    );

});

// =====================================
// ANO AUTOMÁTICO FOOTER
// =====================================

const footerText =
document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
    `© ${new Date().getFullYear()} ADM Desentupidora • Cascavel - PR`;

}


