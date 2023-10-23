
function calculateCd() {
    const depositAmount = Number(document.getElementById("depositAmount").value);
    const annualInterestRate = Number(document.getElementById("annualInterestRate").value);
    const cdTermInYears = Number(document.getElementById("cdTermInYears").value);

    // This coverts percentage to decimal
    const InterestRate = annualInterestRate / 100;

    // Daily compounding frequency
    const compoundingFrequency = 365;
    const futureValue = depositAmount * (1 + InterestRate / compoundingFrequency) ** (compoundingFrequency * cdTermInYears);
    const totalInterest = futureValue - depositAmount;

    document.getElementById("answerField").value = futureValue.toFixed(2);
    document.getElementById("answerField2").value = totalInterest.toFixed(2);
}