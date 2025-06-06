export function themeToggler() {
    const themeButton = document.querySelector(".theme-toggle-button")

    themeButton.addEventListener("click", event => {
    document.body.classList.toggle("theme-dark");
    });
}


