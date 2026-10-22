function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (dobInput === "") {
        result.textContent = "Please enter your date of birth!";
        return;
    }

    const dob = new Date(dobInput + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dob > today) {
        result.textContent = "Date of birth cannot be in the future!";
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const previousMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += previousMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.textContent =
        "Your Age: " + years + " Years, " +
        months + " Months, " + days + " Days";
}
