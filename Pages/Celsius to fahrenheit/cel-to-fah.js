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
document.getElementById("convertButton").addEventListener("click", function () {
    // Retrieve value from input field
    let celsius = parseFloat(document.getElementById("celsiusInput").value);

    // Check if the field is filled
    if (isNaN(celsius)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
        return;
    }

    // Calculate Fahrenheit
    let fahrenheit = (celsius * 9) / 5 + 32;

    // Display the result
    document.getElementById("result").textContent = fahrenheit.toFixed(2) + " degrees Fahrenheit.";
});