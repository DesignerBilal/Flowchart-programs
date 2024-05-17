
document.addEventListener('DOMContentLoaded', function () {
    const numStars = 300;
    const starsContainer = document.querySelector('.stars-container');

    for (let i = 0; i < numStars; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        star.style.animationDelay = `-${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }
});

// Program
document.getElementById("calculateButton").addEventListener("click", function () {
    // Retrieve values from input fields
    let amount = parseFloat(document.getElementById("amountInput").value);
    let rate = parseFloat(document.getElementById("rateInput").value);
    let year = parseFloat(document.getElementById("yearInput").value);

    // Check if all fields are filled
    if (isNaN(amount) || isNaN(rate) || isNaN(year)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    // Calculate simple interest
    let interest = (amount * rate * year) / 100;

    // Display the result
    document.getElementById("result").textContent =  interest.toFixed(2);
});