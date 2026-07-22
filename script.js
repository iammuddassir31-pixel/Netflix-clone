document.querySelector("button").addEventListener("click", function () {
    const email = document.querySelector("input").value;

    if (email === "") {
        alert("Please enter your email.");
    } else {
        alert("Welcome to Netflix Clone!");
    }
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", function () {
        alert("Movie selected!");
    });
});
