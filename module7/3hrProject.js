const form = document.getElementById('formId');
let userEditId = null;
// create container list
const listItems = document.createElement('ul')
listItems.className = 'list-group'
listItems.id = 'ul'
let appendInto = document.getElementById('container');
appendInto.appendChild(listItems)

// This will make sure to show the local storage data on screen
window.addEventListener("DOMContentLoaded",letItStay)
function letItStay(){
  axios
  .get("https://crudcrud.com/api/a2d29a159df3450dab649610150d87b8/trackList")
  .then((response)=>{
    for(let item=0;item<response.data.length;item++){
      addtoList(response.data[item])
    }
  })
}

// This will add form data into local storage

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const obj = {
    expenseAmt : document.getElementById('expenseAmt').value,
    desText : document.getElementById('desText').value,
    category : document.getElementById('categotyItems').value,
  }
  if(userEditId === null){
    axios
    .post("https://crudcrud.com/api/a2d29a159df3450dab649610150d87b8/trackList",obj)
    .then((response) => {addtoList(response.data)
      console.log(response.data._id)})
  }else{
    axios
    .put(`https://crudcrud.com/api/a2d29a159df3450dab649610150d87b8/trackList/${userEditId}`,obj)
    .then(addtoList({...obj,_id:userEditId}))
    // addtoList(obj)
    userEditId = null
  }
});


// This will add into list
function addtoList(objContains){
  document.getElementById('expenseAmt').value = "";
  document.getElementById('desText').value = "";
  document.getElementById('categotyItems').value = "";
  let listId =objContains.expenseAmt+objContains.category
  const list = `
  <div class="Input-group" id = ${listId}>
    <table class="table">
      <thead>
        <tr>
          <th>Amount</th>
          <th>Description</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="col-4">${objContains.expenseAmt}</td>
          <td class="col-4">${objContains.desText}</td>
          <td class="col-4">${objContains.category}</td>
        </tr>
      </tbody>
    </table>
    <button id='editxdelete' class="btn btn-primary" onclick="editItems('${objContains.expenseAmt}','${objContains.desText}','${objContains.category}','${objContains._id}')">Edit Expense</button>
    <button id='editxdelete' class="btn btn-primary" onclick="deleteItem('${objContains.expenseAmt}','${objContains._id}','${objContains.category}')">Delete Expense</button></div>`
  listItems.innerHTML =listItems.innerHTML + list
}

// This will delete details from local storage as well as from the screen.
function deleteItem(expenseAmt,id,category){
  axios.delete(`https://crudcrud.com/api/a2d29a159df3450dab649610150d87b8/trackList/${id}`)
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

function editItems(expenseAmt,desText,category,id){
  document.getElementById('expenseAmt').value = expenseAmt
  document.getElementById('desText').value = desText
  document.getElementById('categotyItems').value = category
  removeItemFromList(expenseAmt,category)
  userEditId = id
  console.log(userEditId)
}