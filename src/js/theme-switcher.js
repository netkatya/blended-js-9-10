export function themeToggler() {
    const themeButton = document.querySelector(".theme-toggle-button")

    const savedTheme = localStorage.getItem("Theme");

        if (savedTheme === "dark") {
        document.body.classList.replace("theme-dark", "theme-light");
        } else if (savedTheme === "light") {
        document.body.classList.add("theme-light", "theme-dark");
    }

    themeButton.addEventListener("click", event => {
        if (document.body.classList.contains("theme-dark")) {
            document.body.classList.replace("theme-dark", "theme-light")
            localStorage.setItem("Theme", "light");
        } else {
            document.body.classList.replace("theme-light", "theme-dark") 
            localStorage.setItem("Theme", "dark");
        }
    });
}




