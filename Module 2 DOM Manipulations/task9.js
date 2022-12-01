let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');


form.addEventListener('submit',addItem);
itemList.addEventListener('click',delItem);
filter.addEventListener('keyup',filterItem);


// Create another input search to add discription
let disText = document.createElement('input')
disText.type = 'text'
disText.className = "form-control mr-2"
disText.id = 'description'
let appendAfter = document.querySelector('form');
let appendBefore = document.querySelector('form .btn-dark')
// console.log(disText)
// console.log(appendAfter)
// console.log(appendBefore)
appendAfter.insertBefore(disText,appendBefore)

// addItem Function
function addItem(e){
  e.preventDefault();
  // Get Input Value
  // --------------------------------------------
  let newItem = document.getElementById('item').value;
  // create a new li element
  let li = document.createElement('li');
  // add class to li
  li.className = "list-group-item"
  //append text Node to it
  li.appendChild(document.createTextNode(newItem))
  // --------------------------------------------
  //Create Delete Button
  // --------------------------------------------
  delBtn = document.createElement('button');
  // Add Class to it
  delBtn.className = "btn btn-danger btn-sm float-right delete"
  // add text Node to it
  let delBtnText = document.createTextNode('X');
  //append textNode to the button Element
  delBtn.appendChild(delBtnText)
  //append button to list
  li.appendChild(delBtn)
  // --------------------------------------------
  // create edit button
  // --------------------------------------------
  let edit = document.createElement('button');
  //add class to button
  edit.className = "btn btn-sm float-right "
  // create textNode
  let editText = document.createTextNode('Edit');
  //Add text Node to item
  edit.appendChild(editText)
  // append edit button to li
  li.appendChild(edit) 
  // li include button,edit button and text 
  // --------------------------------------------
  // Create Description list
  // --------------------------------------------
  newDis = document.getElementById('description').value
  li.appendChild(document.createTextNode(' '+newDis))
  itemList.appendChild(li)
  

  itemList.appendChild(li)
}
// Delete button Function
function delItem(e){
  // This will check if the clicked thing got delete class
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure mate?')){
      // here i got doubt
      let li = e.target.parentElement;
      itemList.removeChild(li)
    }
  }
}


// 1) Filter Function
function filterItem(e){
  // This will convert the search the input value to LowerCase
  let text = e.target.value.toLowerCase();
  // get ls
  items = itemList.getElementsByTagName('li');
  // Convert to Array
  Array.from(items).forEach(function(item){
  let itemName = item.firstChild.textContent;
  let itemDes = item.lastChild.textContent; //
  // to check if the serch item matches with any of the item in the list.
  if (itemName.toLowerCase().indexOf(text) != -1 || itemDes.toLowerCase().indexOf(text) != -1){
    item.style.display = 'block';
  } else {
    item.style.display = 'none';}
  })
}