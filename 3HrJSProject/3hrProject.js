const form = document.getElementById('formId');

// create container list
const listItems = document.createElement('ul')
listItems.className = 'list-group'
listItems.id = 'ul'
let appendInto = document.getElementById('container');
appendInto.appendChild(listItems)

// This will add form data into local storage
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const obj = {
    expenseAmt : document.getElementById('expenseAmt').value,
    desText : document.getElementById('desText').value,
    category : document.getElementById('categotyItems').value,
  }
  key = obj.expenseAmt+obj.category
  let objData = JSON.stringify(obj)
  localStorage.setItem(key,objData)
  let objContains = JSON.parse(objData)
  addtoList(objContains)
});

// This will make sure to show the local storage data on screen
window.addEventListener("DOMContentLoaded",letItStay)
function letItStay(){
  localStorageKey = Object.keys(localStorage)
  for(let i = 0; i<localStorageKey.length;i++){
    const localStorageDetails = localStorage[localStorageKey[i]]
    const localStorageUserData = JSON.parse(localStorageDetails)
    addtoList(localStorageUserData)
  }
}

// This will add into list
function addtoList(objContains){
  document.getElementById('expenseAmt').value = "";
  document.getElementById('desText').value = "";
  document.getElementById('categotyItems').value = "";
  let delIt = objContains.expenseAmt+objContains.category
  if (localStorage.getItem(objContains.expenseAmt+objContains.category)!== null){
    removeItemFromList(objContains.expenseAmt,objContains.category)
  };
  let listId =objContains.expenseAmt+objContains.category
  const list = `<div class="Input-group" id = ${listId}><table class="table"><thead><tr><th>Amount</th><th>Description</th><th>Category</th></thead><tbody><tr><td class="col-4">${objContains.expenseAmt}</td><td class="col-4">${objContains.desText}</td><td class="col-4">${objContains.category}</td></tr></tbody></table><button id='editxdelete' class="btn btn-primary" onclick=editItems('${objContains.expenseAmt}','${objContains.desText}','${objContains.category}')>Edit Expense</button><button id='editxdelete' class="btn btn-primary" onclick = deleteItem('${objContains.expenseAmt}','${objContains.desText}','${objContains.category}')>Delete Expense</button></div>`
  listItems.innerHTML =listItems.innerHTML + list
}


// This will delete details from local storage as well as from the screen.
function deleteItem(expenseAmt,desText,category){
  localStorage.removeItem(expenseAmt+category)
  removeItemFromList(expenseAmt,category)
}

// This function will remove item from list.
function removeItemFromList(expense,category){
  let search = expense+category 
  let childNodetobedeleted = document.getElementById(search)
  if (childNodetobedeleted){
    listItems.removeChild(childNodetobedeleted)
  }
}

// this will edit user details 

function editItems(expenseAmt,desText,category){
  document.getElementById('expenseAmt').value = expenseAmt
  document.getElementById('desText').value = desText
  document.getElementById('categotyItems').value = category
  deleteItem(expenseAmt,desText,category)
}