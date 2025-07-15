//Dating
let ticketNum = 3;
let ticketCost = 14.00;
let ttCost = ticketNum * ticketCost;

let ticketNumElement = document.getElementById("ticketNum");
ticketNumElement.textContent += `${ticketNum}`;
let ticketCostElement = document.getElementById("ticketCost");
ticketCostElement.textContent += `${ticketCost}`;
let ttCostElement = document.getElementById("ttCost");
ttCostElement.textContent += `${ttCost}`;

//Shopping
let bankTotal = 235.87;
let jacket = 70;
let sweater = 55;  
let shirt = 35;
let pants = 75;
let skirt = 49;
let sandals = 30;
let shoes = 60;

let bankLeft = bankTotal - shirt - pants  - shoes;
let addJacket = bankLeft - jacket;


let bankLeftElement = document.getElementById("bank");
bankLeftElement.textContent = `${"After purchasing the outfit, my bank account balance is $" + bankLeft}`
let addJacketElement = document.getElementById("addJacket");
if (addJacket >= 0){
    addJacketElement.textContent += `${"True"}`;
}
else {
    addJacketElement.textContent += `${"False"}`;
}

//Pizza
let pizzaTotal = 4;
let slidesPerPizza = 8;
let slidesTotal = pizzaTotal * slidesPerPizza; //32
let slidesPerStudent = 2.5;

let slidesLeft = slidesTotal/slidesPerStudent; //32/2.5 = 12.8
let studentsFed = Math.floor(slidesLeft); //12
let professorSlides = slidesTotal - (studentsFed * slidesPerStudent); //2

let studentsFedElement = document.getElementById("studentPizza");
studentsFedElement.textContent += `${studentsFed}`;
let professorSlidesElement = document.getElementById("profPizza");
professorSlidesElement.textContent += `${professorSlides}`;

//Monty's Mega Bar
let adultBuffetCost = 12.00;
let childBuffetCost = 6.00;
let drinkCost = 1.50;
let montyTotal = 2*adultBuffetCost + childBuffetCost + 3*drinkCost;
let montyReceiptElement = document.getElementById("Monty");
montyReceiptElement.textContent = `$${montyTotal}`;

//Average Earned Tips
let week1Tip = 202.45;
let week2Tip = 134.97;
let week3Tip = 256.63;
let week4Tip = 178.22;

let weeklyTipAvg = (week1Tip + week2Tip + week3Tip + week4Tip)/4;
let weeklyTipAvgElement = document.getElementById("tips");
weeklyTipAvgElement.textContent = `Weekly Tip Average: $${weeklyTipAvg}`;