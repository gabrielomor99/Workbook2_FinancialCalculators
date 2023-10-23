
function mortgageCalculator() {
    const loanAmount = Number(document.getElementById("loanAmount").value);
    const annualInterestRate = Number(document.getElementById("annualInterestRate").value);
    const loanTermInYears = Number(document.getElementById("loanTermInYears").value);

    const loanTermMonths = loanTermInYears * 12;

    // This coverts percentage to decimal
    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const numerator = loanAmount * (monthlyInterestRate * ((1 + monthlyInterestRate) ** loanTermMonths));
    const denominator = ((1 + monthlyInterestRate) ** loanTermMonths) - 1;

    // This helps make the code more compact
    const monthlyPayment = numerator / denominator;
    const totalInterest = (monthlyPayment * loanTermMonths) - loanAmount;

    document.getElementById("answerField").value = monthlyPayment.toFixed(2);
    document.getElementById("answerField2").value = totalInterest.toFixed(2);
}

