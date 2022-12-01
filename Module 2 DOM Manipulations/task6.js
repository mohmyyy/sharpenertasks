// querySelector \\

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green'

let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none'

// querySelectorAll \\

let list = document.querySelectorAll('li'); 
list[1].style.color = 'Green'       // This will change the second item in the list to green 


let oddList = document.querySelectorAll('li:nth-child(odd)'); // This will choose all the odd elements of the list
for(let i = 0; i < oddList.length; i++){  // This will loop through them and make the choosen elements to green
  oddList[i].style.backgroundColor = 'green'; 
}

// Difference between queryselector and queryselectorall?

querySelector method will select the first element which matches with a specified CSS Selector and where as querySelectorAll will select all the element which matches with a specified CSS Selector.