let form = document.getElementById('formId');
form.addEventListener('submit',addToCloud);

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
  axios.post("https://crudcrud.com/api/30371d1398b54d27bba4f321ba4be623/appointmentData",myObj)
  .then((response) => addToItemList(response.data))
  .catch((err) => {document.body.innerHTML = document.body.innerHTML + `<li>Some went wrong</li>` })
}

// This will make sure to display the data from the cloud.
window.addEventListener("DOMContentLoaded", ()=>{
  axios.get("https://crudcrud.com/api/30371d1398b54d27bba4f321ba4be623/appointmentData")
  .then((response) => { 
    for(let i=0;i<response.data.length;i++){
      addToItemList(response.data[i])
    }
 })
  .catch((err) => console.error(err))
  })

function addToItemList (dataObject){
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('ph').value = "";
  document.getElementById('date').value = "";
  document.getElementById('time').value = "";
  document.getElementById('textArea').value = "";
  const parentNode = document.getElementById('ul');
  
  // create li element using innerHTML
  const childNode = `<li id=${dataObject.email}> ${dataObject.name}-${dataObject.email} <button onclick="editUserDetails('${dataObject.name}','${dataObject.email}','${dataObject.phone}','${dataObject.date}','${dataObject.time}','${dataObject.message}')" type='submit' id = theEditBtn > Edit </button> <button onclick=deleteUser('${dataObject.email}') id = 'theDeleteBtn' > Delete </button></li>`
  parentNode.innerHTML = parentNode.innerHTML + childNode
  deleteBtn = document.getElementById('delete');
}

function removeItemFromList(email){
  let parentNode = document.getElementById('ul');
  let childNodeToBeDeleted= document.getElementById(email)
  if (childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted)
  }
}

function deleteUser(email){
  localStorage.removeItem(email)
  removeItemFromList(email)
}

function editUserDetails(name,email,phone,date,time,message){
  document.getElementById('name').value = name
  document.getElementById('email').value = email
  document.getElementById('ph').value = phone
  document.getElementById('date').value = date
  document.getElementById('time').value = time
  document.getElementById('textArea').value = message
  deleteUser(email)
}