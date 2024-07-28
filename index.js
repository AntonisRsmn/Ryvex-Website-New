// SideBar
function showSidebar () {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}

function hideSidebar () {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}

// DarkMode
let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("theme-switch")

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
}

const img1 = () => {
    document.getElementById("img1").src="../Imgs/desc-1-light.png";
    
}

if (darkmode ==="active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    darkmode !== "active" ? document.getElementById("img1").src="../Imgs/desc-1-light.png" : document.getElementById("img1").src="../Imgs/desc-1-dark.png";
    darkmode !== "active" ? document.getElementById("img2").src="../Imgs/desc-2-light.png" : document.getElementById("img2").src="../Imgs/desc-2-dark.png";
    darkmode !== "active" ? document.getElementById("img3").src="../Imgs/desc-3-light.png" : document.getElementById("img3").src="../Imgs/desc-3-dark.png";
})