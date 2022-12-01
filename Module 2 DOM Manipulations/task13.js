let form = document.getElementById('formId');
form.addEventListener('submit',addToStorage);

// This function will add data into local storage
function addToStorage(e){
  e.preventDefault();
  let myObj = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    phone : document.getElementById('ph').value,
    date : document.getElementById('date').value,
    time : document.getElementById('time').value
  }
  let key = myObj.email;

  const myObjData = JSON.stringify(myObj);
  localStorage.setItem(key,myObjData)
  const dataObject = JSON.parse(myObjData)
  addToItemList(dataObject)
}
// This will make sure to show the local 
window.addEventListener("DOMContentLoaded", letItStay())

function letItStay(){
  localStorageKey = Object.keys(localStorage);
  for(let i = 0; i < localStorageKey.length; i++){
    const key = localStorageKey[i];
    const localStorageDetails = localStorage[key]
    const localStorageUserDetails = JSON.parse(localStorageDetails)
    addToItemList(localStorageUserDetails)
  }

}
function addToItemList (dataObject){
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('ph').value = "";
  document.getElementById('date').value = "";
  document.getElementById('time').value = "";
  if (localStorage.getItem(dataObject.email) !== null){
    removeItemFromList(dataObject.email)
  }
  const parentNode = document.getElementById('ul');
  // create li element using innerHTML
  const childNode = `<li id=${dataObject.email}> ${dataObject.name} - ${dataObject.email} <button onclick=editUserDetails('${dataObject.name}','${dataObject.email}','${dataObject.phone}','${dataObject.date}','${dataObject.time}') type='submit' id = theEditBtn > Edit </button> <button onclick=deleteUser('${dataObject.email}') id = 'theDeleteBtn' > Delete </button></li>`
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

function editUserDetails(name,email,phone,date,time){
  document.getElementById('name').value = name
  document.getElementById('email').value = email
  document.getElementById('ph').value = phone
  document.getElementById('date').value = date
  document.getElementById('time').value = time
  deleteUser(email)
}