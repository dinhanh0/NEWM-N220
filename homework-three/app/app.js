const calcInterest = () => {
    let principleInput = parseFloat(document.getElementById("principle").value);
    
    let interestRateInput = parseFloat(document.getElementById("interestRate").value);
    //convert interest input to decimal
    interestRateInput = interestRateInput/100;

    let timeInput = parseFloat(document.getElementById("time").value);
    

    //Total = Principle(1+Rate*Time)
    let total = principleInput*(1+interestRateInput*timeInput);
    let interestEarned = total - principleInput

    let resultDisplay = document.getElementById("interestResult");
    resultDisplay.textContent = `With a beginning principle of $${principleInput}, and with a growth rate of ${interestRateInput*100}% for ${timeInput} years, your total interest will be $${interestEarned.toFixed(2)} with a grand total of $${total.toFixed(2)}`;

    // console.log(total.toFixed(2));
    // console.log(interestEarned.toFixed(2));


} 