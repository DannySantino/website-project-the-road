const container = document.querySelectorAll(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => container["0"].classList.add("change"));

document.querySelector(".close-navbar-icon").addEventListener("click", () => container["0"].classList.remove("change"));

const colors = ["#6495ED", "#7FFFD4", "#FFA07A", "#F08080", "#AFEEEE"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(e => e.style.cssText = `background-color: ${colors[i++]}`);

Array.from(document.querySelectorAll(".navigation-button")).forEach(e => e.onclick = () => e.parentElement.parentElement.classList.toggle("change"));