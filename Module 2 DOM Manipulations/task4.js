// Get Elements by Class Name \\

let allItems = document.getElementsByClassName('list-group-item');
console.log(allItems)
allItems[2].style.backgroundColor = 'Green' // Third Element in the list will have green background color
for(let i = 0; i < allItems.length; i++){ // this will make all elements in the list have bold color font
  allItems[i].style.fontWeight = 'bold'
}