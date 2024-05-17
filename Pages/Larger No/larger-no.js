
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
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    // Check if all fields are filled
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    // Determine the largest number
    let largestNumber = num1;
    if (num2 > largestNumber) {
        largestNumber = num2;
    }
    if (num3 > largestNumber) {
        largestNumber = num3;
    }

    // Display the result
    document.getElementById("result").textContent = "The largest number is: " + largestNumber;
});