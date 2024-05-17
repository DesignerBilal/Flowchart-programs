
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
document.getElementById("calculateButton").addEventListener("click", function() {
    // Retrieve values from input fields
    let base = parseFloat(document.getElementById("baseInput").value);
    let height = parseFloat(document.getElementById("heightInput").value);
    
    // Check if both fields are filled
    if (isNaN(base) || isNaN(height)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }
    
    // Calculate area
    let area = base * height;
    
    // Display the result
    document.getElementById("result").textContent = "Area of the parallelogram " + "is: " + area + " cm²";
});