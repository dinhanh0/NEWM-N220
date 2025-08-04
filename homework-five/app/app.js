//Task 1: Change the text content of the <h1> element to "DOM Manipulation".
document.getElementById("title").innerHTML = "DOM Manipulation";

//Task 2: Change the background color of the <div> element with the id "container" to "lightblue".
document.getElementById("container").style.backgroundColor = "lightblue"

//Task 3: Select the <ul> element and add a new <li> element with the text content "Item 7" to the list.
const ulElement = document.querySelector("ul");
const itemSeven = document.createElement("li");
itemSeven.textContent = "Item 7";
ulElement.appendChild(itemSeven);


//Task 4: The first item should have crimson text 
const firstItem = document.querySelector("ul li");
firstItem.style.color = "crimson";


//Task 5: The third item should have a pink background  
const thirdItem = document.querySelectorAll("ul li")[2];
thirdItem.style.backgroundColor = "pink";

//Task 6: The fifth item should have a yellow background  
const fifthItem = document.querySelectorAll("ul li")[4];
fifthItem.style.backgroundColor = "yellow";

//Task 7: The seventh item should have a lightGray background with royalBlue text  
const seventhItem = document.querySelectorAll("ul li")[6];
seventhItem.style.backgroundColor = "lightGray";
seventhItem.style.color = "royalBlue";

//Task 8: Add an 8th item with the text of your name 
const ulElement2 = document.querySelector("ul");
const itemEight = document.createElement("li");
itemEight.textContent="Anh Dinh";
ulElement2.appendChild(itemEight);

//Task 9: Delete the fourth item
const fourthItem = document.querySelectorAll("ul li")[3];
fourthItem.remove();

//Task 10: Add a italic element around the button text and make the background rebeccapurple with white text and a white border.
buttonElement = document.querySelector("button");
buttonElement.style.fontStyle = 'italic';
buttonElement.style.backgroundColor = 'rebeccapurple';
buttonElement.style.color = 'white';
buttonElement.style.border = '1px solid white';


