// Get Element By Tag Name \\

let li = document.getElementsByTagName('li');
console.log(li)
for(let i = 0; i < li.length; i++){
  li[i].style.backgroundColor = 'green'
}


// Get Elemet by Class Name \\

let classItems = document.getElementsByClassName('list-group-item');
console.log(classItems)
for(let i = 0; i < classItems.length; i++){
  classItems[i].style.backgroundColor = 'pink'
}
