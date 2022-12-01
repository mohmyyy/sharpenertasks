let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',delItem);

// addItem Function
function addItem(e){
  e.preventDefault();
  // Get Input Value
  let newItem = document.getElementById('item').value;
  // create a new li element
  let li = document.createElement('li');
  // add class to li
  li.className = "list-group-item"
  //append text Node to it
  li.appendChild(document.createTextNode(newItem))
  //Create Delete Button
  delBtn = document.createElement('button');
  // Add Class to it
  delBtn.className = "btn btn-danger btn-sm float-right delete"
  // add text Node to it
  let delBtnText = document.createTextNode('X');
  //append textNode to the button Element
  delBtn.appendChild(delBtnText)
  //append button to list
  li.appendChild(delBtn)
  // create edit button
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