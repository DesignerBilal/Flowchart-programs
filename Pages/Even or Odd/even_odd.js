
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
document.getElementById("checkButton").addEventListener("click", function () {
    // Retrieve value from input field
    let num = parseInt(document.getElementById("numberInput").value);

    // Check if the field is filled
    if (isNaN(num)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
        return;
    }

    // Determine if the number is even or odd
    if (num % 2 === 0) {
        document.getElementById("result").textContent = num + " is an even number.";
    } else {
        document.getElementById("result").textContent = num + " is an odd number.";
    }
});