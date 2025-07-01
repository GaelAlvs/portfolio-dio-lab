let toggleTheme = document.getElementById("toggleTheme");
let rootHtml = document.documentElement

function changeTheme() {
    let currentTheme = rootHtml.getAttribute("data-theme");

    if (currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", 'light');
    } else {
        rootHtml.setAttribute("data-theme", 'dark');
    }

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);