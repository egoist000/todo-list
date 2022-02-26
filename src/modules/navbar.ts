import {getCurrentActive} from "./helper";

function removeActiveNavIcon() {
    const currentActive = getCurrentActive();
    if(currentActive != null) { currentActive.classList.remove("active"); }
}

function handleNavIconClick(e) {
    const currentTarget = e.currentTarget;
    if(currentTarget.classList.contains("nav-icon")) {
        if(currentTarget !== getCurrentActive()) { removeActiveNavIcon(); }
        currentTarget.classList.toggle("active");
        const sidebar = document.getElementById("sidebar");
        if(currentTarget.classList.contains("active") && currentTarget.classList.contains("expand")) {
            sidebar.classList.add("active"); //expand sidebar

            //TODO: change sidebar contents based on nav section
        }
        else {
            sidebar.classList.remove("active");
        }
    }
}

function handleClickOutside(e) {
    const sidebar = document.getElementById("sidebar");
    const nav = document.getElementById("nav");
    if(!(sidebar.contains(e.target) || nav.contains(e.target))) {
        removeActiveNavIcon();
        sidebar.classList.remove("active");
    }
}

export default function initNavbar() {
    const navIcons = document.querySelectorAll(".nav-icon");

    //Init event listeners
    navIcons.forEach(icon => {
        icon.addEventListener("click", handleNavIconClick);
    });

    window.addEventListener("click", handleClickOutside);
}