//Problem 1
let generationPar = document.getElementById("generation");
let currentDate = new Date();
let currentYear = currentDate.getFullYear();


let checkGeneration = () => {
    let inputAge = document.getElementById("age").value;
    let determineGeneration = currentYear - inputAge;

    switch(true){
    case determineGeneration >= 1946 && determineGeneration <=1964:
        generationPar.innerHTML = "You are a member of the Baby Boomer Generation!";
        break;

    case determineGeneration >= 1965 && determineGeneration <=1980:
        generationPar.innerHTML = "You are part of Generation X!";
        break;
    
    case determineGeneration >= 1981 && determineGeneration <=1996:
        generationPar.innerHTML = "You belong in the Y Generation!";
        break;
    
    case determineGeneration >= 1997 && determineGeneration <=2012:
        generationPar.innerHTML = "Generation Z is your generation!";
        break;
            
    case determineGeneration >= 2013 && determineGeneration <=2025:
        generationPar.innerHTML = "You are part of Generation Alpha.";
        break;

    default:
        generationPar.innerHTML = "Sorry - your generation is not listed.";
        break;
    }
}

//Problem 2
let numArray = [87,56,92,77];
let sum = numArray.reduce((total,number) => total + number,0);
let average = sum/numArray.length;

let answerPar = document.getElementById("prob2")
if (average > 75){
    answerPar.innerHTML += "You are in the top 25% of the class!";
}
else if (average>=60 && average <=75){
    answerPar.innerHTML += "You passed the class!";
}
else if (average<=60){
    answerPar.innerHTML += "Sorry - you did not pass the class. Better luck next time!";
}


//Problem 3
let ranNumPar = document.getElementById("rNum5");
let newNum = () => {
    let ranNum = Math.floor(Math.random()*5) + 1;
    switch(ranNum){
        case 1:
            ranNumPar.innerHTML = `${ranNum}: The lowest number you can get`;
            break;
        case 2:
            ranNumPar.innerHTML = `${ranNum}: This is the lowest even number you can get`;
            break;
        case 3:
            ranNumPar.innerHTML = `${ranNum}: Right smack in the middle`;
            break;
        case 4:
            ranNumPar.innerHTML = `${ranNum}:  Good number!`;
            break;
        case 5:
            ranNumPar.innerHTML = `${ranNum}: Way to roll!`;
            break;
;
    }
}

//Problem 4
let weekdayArr = ["Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday", "Sunday"];
let dayInFiveDaysPar = document.getElementById("dayInFiveDays");


let checkDay = () => {
    let inputDay = document.getElementById("day").value;

    let currentIndex = weekdayArr.indexOf(inputDay);

    let futureIndex = (currentIndex + 5)%7 //wrap around the week

    let dayInFiveDays = weekdayArr[futureIndex];
    
    dayInFiveDaysPar.innerHTML = `It will be ${dayInFiveDays} in 5 days.`
}


//Problem 5
let colorArr = ["Red","Orange", "Blue", "Green", "Purple", "Yellow"];

let colorSentencePar = document.getElementById("colorSentence");
let printSentence = () => {
    let inputColor = document.getElementById("color").value;


    colorSentencePar.innerHTML = `My favorite color is ${inputColor}.`;


}
