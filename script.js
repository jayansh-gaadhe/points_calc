document.getElementById("calculateButton").addEventListener("click", calculate);

function calculate() {
    const DailyPoints = 155;
    const target = 7840;
    let current = parseInt(document.getElementById("currentPoints").value);
    let i = 0, StreakCount = 1;

    if (isNaN(current) || current <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
        return;
    }

    // Calculating points
    while (current <= target) {
        i++;
        current += DailyPoints;
        if (i % 7 === 0) {
            StreakCount++;
            current += 100;
        }
        if (StreakCount === 12) current += 1000;
    }

    // Date calculation
    let today = new Date();
    today.setDate(today.getDate() + i);

    let finalPoints = current;
    let finalDate = today.toLocaleDateString('en-GB'); // Format dd-mm-yyyy

    document.getElementById("result").innerHTML = `
        <p>Final points: ${finalPoints}</p>
        <p>Date after ${i} days: ${finalDate}</p>
    `;
}
