document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.querySelector(".nav__toggle");
    var navList = document.querySelector(".nav__ul");

    toggleButton.addEventListener("click", function () {
        if (navList.style.display === "block") {
            navList.style.display = "none";
        } else {
            navList.style.display = "block";
        }
    });
});