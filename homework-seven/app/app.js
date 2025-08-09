
// Add Icon to Existing Items
let myItems = document.querySelectorAll('#codeList li');

var totalItems = myItems.length;

for (i=0; i< totalItems; i++) {
    let imgElement = document.createElement('img');

    imgElement.setAttribute('src','https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png');

    imgElement.className = 'listIcon';

    myItems[i].appendChild(imgElement);
}

// Add Icons to New Items
var myList = document.querySelector("#codeList ul");
var addBtn = document.getElementsByTagName('input')[0];
addBtn.addEventListener('click', addItem, false);

function addItem() {
    var newItem = prompt("New Item:");
    var newLI = document.createElement('li');
    var newLIText = document.createTextNode(newItem);
    newLI.appendChild(newLIText);

    // Create trash icon (copied from "existing items" code)
    let trashIcon = document.createElement('img');
    trashIcon.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png');
    trashIcon.className = 'listIcon'; // ← You were missing this line

    // Append icon to the new list item
    newLI.appendChild(trashIcon);
    myList.appendChild(newLI);
}



//Trash or Gray Out Items and Reinstate Item
myList.addEventListener('click',changeProp,false)

function changeProp(e) {
    targetElement = getTarget(e);
    let tParent = targetElement.parentNode; 

    if (tParent.tagName == "LI"){
        tParent.parentNode.removeChild(tParent);
    }
    else if (tParent.tagName == "UL"){
        targetElement.classList.toggle('selected');
    }
}




