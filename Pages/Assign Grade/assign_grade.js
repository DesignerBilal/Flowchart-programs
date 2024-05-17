
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


document.getElementById("calculateButton").addEventListener("click", function () {
    // Retrieve values from input fields
    let obt_marks = parseInt(document.getElementById("obtainedMarks").value);
    let total_marks = parseInt(document.getElementById("totalMarks").value);

    // Check if both fields are filled
    if (isNaN(obt_marks) || isNaN(total_marks)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    // Calculate percentage
    let _percentage = (obt_marks / total_marks) * 100;

    // Assign grade based on percentage
    let grade = "";
    if (_percentage > 100) {
    grade1 = "Wrong Input! (Please enter correct numbers)";
    grade2 = "";
    grade = "";
    }
    else if (_percentage > 80) {
        grade1 = "You got " + obt_marks + " marks from " + total_marks + " marks"
        grade2 = "Your percentage is " + _percentage + "%"
        grade = "Grade A+ (Amazing!)"
    }
    else if (_percentage > 70) {
        grade1 = "You got " + obt_marks + " marks from " + total_marks + " marks"
        grade2 = "Your percentage is " + _percentage + "%"
        grade = "Grade A (Very Good...)"
    }
    else if (_percentage > 60) {
        grade1 = "You got " + obt_marks + " marks from " + total_marks + " marks"
        grade2 = "Your percentage is " + _percentage + "%"
        grade = "Grade B (Good practice)"
    }
    else if (_percentage > 50) {
        grade1 = "You got " + obt_marks + " marks from " + total_marks + " marks"
        grade2 = "Your percentage is " + _percentage + "%"
        grade = "Grade C (Need hardwork)"
    }
    else if (_percentage > 40) {
        grade1 = "You got " + obt_marks + " marks from " + total_marks + " marks"
        grade2 = "Your percentage is " + _percentage + "%"
        grade = "Grade D (Not good)"
    }
    else if (_percentage > 33) {
        grade1 = "You got " + obt_marks + " marks from " + total_marks + " marks"
        grade2 = "Your percentage is " + _percentage + "%"
        grade = "Grade E (Bad)"
    }
    else {
        grade1 = "You got " + obt_marks + " marks from " + total_marks + " marks"
        grade2 = "Your percentage is " + _percentage + "%"
        grade = "Grade F (Very bad...Fail)"
    }

    // Display the result
    document.getElementById("result1").textContent = grade1;
    document.getElementById("result2").textContent = grade2;
    document.getElementById("result3").textContent = grade;

});