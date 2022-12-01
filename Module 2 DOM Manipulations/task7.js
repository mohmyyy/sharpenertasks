// Traversing the DOM \\

let itemList = document.querySelector('#items');

// 1) parentElement
// itemList.parentElement.style.backgroundColor = 'yellow'

// 2) parentNode
// itemList.parentNode.style.backgroundColor = 'yellow'

// 3) childNodes
// console.log(itemList.childNodes)

// 4) children
// console.log(itemList.children)
// for(let i = 0; i < itemList.children.length; i++){
//   itemList.children[i].style.backgroundColor = 'yellow';
// }

// 5) firstChild
// console.log(itemList.firstChild)

// 6) firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.style.backgroundColor = 'yellow'

// 7) lastChild
// console.log(itemList.lastChild)

// 8) lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.style.backgroundColor = '#ccc'
// itemList.lastElementChild.textContent = 'New 4'

// 9) nextSibling
// console.log(itemList.nextSibling)

// 10) nextElementSibling
// console.log(itemList.nextElementSibling)

// 11) previousSibling
// console.log(itemList.previousSibling)

// 12) previosElementSiblings
// console.log(itemList.previousElementSibling)

// // 1) Create an Element
// // Create a Div
// let newDiv = document.createElement('div');

// // Create a className
// newDiv.className = 'thisisclass'

// // Create ID
// newDiv.id = 'thisisd'

// // Set Attribute 
// newDiv.setAttribute('title','THISISTITLE')


// let newDivText = document.createTextNode('Hello World !') 
// newDiv.appendChild(newDivText)

// let afterThis = document.querySelector('header .container');
// let beforeThis = document.querySelector('header h1')

// afterThis.insertBefore(newDiv,beforeThis)

// ----------------------------
// 2) adding hello world before item 1
let newDivTwo = document.createElement('div');
newDivTwo.className = 'thisisclasstwo';
newDivTwo.id = 'thisisidtwo';
newDivTwoText = document.createTextNode('Hello World');

newDivTwo.appendChild(newDivTwoText);
// console.log(newDivTwo)

let appendAfter = document.querySelector('div #main')

let appendBefore = document.querySelector('div #items')

console.log(appendAfter)
console.log(appendBefore)
appendAfter.insertBefore(newDivTwo,appendBefore)