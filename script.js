// ==========================
// AOS Animation
// ==========================

AOS.init({
    duration: 1000,
    once: true
});

// ==========================
// Typing Effect
// ==========================

new Typed("#typing", {
    strings: [
        "Startup Builder",
        "Business & Finance Enthusiast",
        "Runner & Sport Enthusias",
        "Future Business Professional"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1800,
    loop: true
});

// ==========================
// Navbar Scroll Effect
// ==========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        nav.style.padding = "14px 40px";
        nav.style.boxShadow = "0 20px 40px rgba(0,0,0,.12)";
        nav.style.background = "rgba(255,255,255,.85)";

    } else {

        nav.style.padding = "18px 45px";
        nav.style.boxShadow = "0 10px 40px rgba(0,0,0,.08)";
        nav.style.background = "rgba(255,255,255,.7)";

    }

});

// ==========================
// Scroll Progress Bar
// ==========================

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.background = "#2563eb";
progress.style.width = "0%";
progress.style.zIndex = "99999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    progress.style.width =
        (scroll / height) * 100 + "%";

});

// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563eb";
topBtn.style.color = "white";
topBtn.style.fontSize = "24px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 15px 30px rgba(37,99,235,.35)";
topBtn.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ==========================
// Mouse Glow Effect
// ==========================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "280px";
glow.style.height = "280px";
glow.style.borderRadius = "50%";
glow.style.background =
"rgba(37,99,235,.12)";
glow.style.filter = "blur(90px)";
glow.style.pointerEvents = "none";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left =
        e.clientX - 140 + "px";

    glow.style.top =
        e.clientY - 140 + "px";

});

// ==========================
// Active Navbar Link
// ==========================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

console.log("Portfolio Ready 🚀");