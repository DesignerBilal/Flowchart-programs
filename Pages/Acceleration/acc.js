
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
    let mass = parseFloat(document.getElementById("massInput").value);
    let force = parseFloat(document.getElementById("forceInput").value);

    // Check if all fields are filled
    if (isNaN(mass) || isNaN(force)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    // Calculate acceleration
    let acceleration = force / mass;

    // Display the result
    document.getElementById("result").textContent = "The acceleration of the object is: " + acceleration.toFixed(2) + " m/s²";
});