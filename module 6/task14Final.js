let form = document.getElementById('formId');
form.addEventListener('submit',addToCloud);
let parentNode = document.getElementById('list');

// This will make sure to display the data from the cloud.
window.addEventListener("DOMContentLoaded", ()=>{
  axios.get("https://crudcrud.com/api/3f781e1ac83d46c49c18e67b8d9441df/appointmentData")
  .then((response) => { 
    for(let i=0;i<response.data.length;i++){
      addToItemList(response.data[i])
    }
 })
  .catch((err) => console.error(err))
  })

let editedUserId = null
// This function will add data into cloud storage
function addToCloud(e){
  e.preventDefault();
  let myObj = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    phone : document.getElementById('ph').value,
    date : document.getElementById('date').value,
    time : document.getElementById('time').value,
    message : document.getElementById('textArea').value
  }
  if(editedUserId === null){
    axios.post("https://crudcrud.com/api/3f781e1ac83d46c49c18e67b8d9441df/appointmentData",myObj)
  .then((response) => {
    addToItemList(response.data)})
  .catch((err) => {parentNode.innerHTML = parentNode.innerHTML + `<li>Some went wrong</li>` })
  }else{
    axios.put(`https://crudcrud.com/api/3f781e1ac83d46c49c18e67b8d9441df/appointmentData/${editedUserId}`,myObj)
    addToItemList({...myObj,_id:editedUserId})
    editedUserId = null
    }
}

function addToItemList (dataObject){
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('ph').value = "";
  document.getElementById('date').value = "";
  document.getElementById('time').value = "";
  document.getElementById('textArea').value = "";
  
  // create li element using innerHTML
  const childNode = `<li id=${dataObject.email}> ${dataObject.name}-${dataObject.email}
  <button type='button' onclick="editUserDetails('${dataObject.name}','${dataObject.email}','${dataObject.phone}','${dataObject.date}','${dataObject.time}','${dataObject.message}','${dataObject._id}')" type='submit' id = theEditBtn > Edit </button>
  <button type='button' onclick=deleteUser('${dataObject.email}','${dataObject._id}') id = 'theDeleteBtn' > Delete </button>
  </li>`
  parentNode.innerHTML = parentNode.innerHTML + childNode
  deleteBtn = document.getElementById('delete');
}

function removeItemFromList(email){
  // let parentNode = document.getElementById('list');
  let childNodeToBeDeleted= document.getElementById(email)
  if (childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted)
  }
}

function deleteUser(email,id){
  // alert(`https://crudcrud.com/api/3f781e1ac83d46c49c18e67b8d9441df/appointmentData/${id}`)
  axios.delete(`https://crudcrud.com/api/3f781e1ac83d46c49c18e67b8d9441df/appointmentData/${id}`).then(()=>removeItemFromList(email))
  .catch((err)=>console.error(err))
}

function editUserDetails(name,email,phone,date,time,message,id){
  document.getElementById('name').value = name
  document.getElementById('email').value = email
  document.getElementById('ph').value = phone
  document.getElementById('date').value = date
  document.getElementById('time').value = time
  document.getElementById('textArea').value = message
  editedUserId = id
  console.log(editedUserId)
  removeItemFromList(email)
}