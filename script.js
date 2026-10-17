const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle?.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        menuToggle?.setAttribute("aria-expanded", "false");
    });
});

document.querySelectorAll("details").forEach((detail) => {
    detail.addEventListener("toggle", () => {
        if (!detail.open) return;
        document.querySelectorAll("details[open]").forEach((otherDetail) => {
            if (otherDetail !== detail) otherDetail.open = false;
        });
    });
});
