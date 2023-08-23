// Toggle dark mode function
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    updateToggleButtonColors();
}

// Toggle light mode function
function toggleLightMode() {
    document.body.classList.remove("dark-mode");
    updateToggleButtonColors();
}

// Update toggle button text colors
function updateToggleButtonColors() {
    const toggleDarkButton = document.getElementById("toggleDarkButton");
    const toggleLightButton = document.getElementById("toggleLightButton");

    if (document.body.classList.contains("dark-mode")) {
        toggleDarkButton.style.color = "black";
        toggleLightButton.style.color = "white";
    } else {
        toggleDarkButton.style.color = "white";
        toggleLightButton.style.color = "black";
    }
}

// Smooth scrolling to the products section
document.getElementById("shopNowButton").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#products").scrollIntoView({
        behavior: "smooth"
    });
});
