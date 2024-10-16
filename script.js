document.getElementById("calculateButton").addEventListener("click", calculate);

// Smart switch listener to toggle between Level 1 and Level 2
document.getElementById("levelToggle").addEventListener("change", function() {
    if (this.checked) {
        document.getElementById("level1Label").classList.remove('level1-active');
        document.getElementById("level2Label").classList.add('level2-active');
    } else {
        document.getElementById("level2Label").classList.remove('level2-active');
        document.getElementById("level1Label").classList.add('level1-active');
    }
});

function calculate() {
    // Determine the level from the toggle switch
    let level = document.getElementById("levelToggle").checked ? 2 : 1;
    let dailyPoints = level === 1 ? 35 : 155; // Level-based daily points

    const target = 7840;
    let current = parseInt(document.getElementById("currentPoints").value);
    let streakDays = parseInt(document.getElementById("streakDays").value); // Input streak days
    let i = 0; // Days counter
    let StreakCount = 0;

    if (isNaN(current) || isNaN(streakDays) || current <= 0 || streakDays <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }

    // Calculation loop until we reach the target points
    while (current <= target) {
        ++i;
        current += dailyPoints;

        if (i % 7 === 0) { // Every 7th day, add streak bonus
            StreakCount++;
            current += 100;
        }

        if (StreakCount === 12) { // After 12 streaks, add big bonus
            current += 1000;
        }
    }

    // Date calculation: Add the number of streak days to the current date
    let today = new Date();
    today.setDate(today.getDate() + i); // Add the number of days (i) to the current date

    // Format the final points and date output
    let finalPoints = current;
    let finalDate = today.toLocaleDateString('en-GB'); // Format dd-mm-yyyy

    // Display the result
    document.getElementById("result").innerHTML = `
        <p>Final points: ${finalPoints}</p>
        <p>Date after ${i} days: ${finalDate}</p>
    `;
}
