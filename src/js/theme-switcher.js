export function themeToggler() {
    const themeButton = document.querySelector(".theme-toggle-button")

    themeButton.addEventListener("click", event => {
        if (document.body.classList.contains("theme-dark")) {
            document.body.classList.replace("theme-dark","theme-light")
        } else {
            document.body.classList.replace("theme-light","theme-dark")
        }
    });
}


