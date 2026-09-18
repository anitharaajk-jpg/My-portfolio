document.addEventListener("DOMContentLoaded", function () {

    console.log("Kaviya's Portfolio Loaded Successfully!");

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("Navigation clicked:", link.textContent);

        });

    });

});
