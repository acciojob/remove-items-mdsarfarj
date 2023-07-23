document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("input[type='button']");
    button.addEventListener("click", removeSelectedColor);
});

function removeSelectedColor() {
    const colorSelect = document.getElementById("colorSelect");
    const selectedIndex = colorSelect.selectedIndex;

    if (selectedIndex >= 0) {
        colorSelect.options[selectedIndex].remove();
    }
}