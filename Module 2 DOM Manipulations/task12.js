let form = document.getElementById('formId');
form.addEventListener('submit',addToStorage);


function addToStorage(e){
  e.preventDefault();
  let myObj = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    phone : document.getElementById('ph').value,
    date : document.getElementById('date').value,
    time : document.getElementById('time').value,
    myMessage : document.getElementById('textArea').value,
  }
  let key = myObj.name+myObj.email
  let obj_serialized = JSON.stringify(myObj);
  localStorage.setItem(key,obj_serialized);
  const liContent = JSON.parse(localStorage.getItem(key));
  addToItemList(liContent)
}

window.addEventListener("DOMContentLoaded", () => {
  const localStorageKey = Object.keys(localStorage)
  for (let i =0; i<localStorageKey.length; i++){
    let key = localStorageKey[i]
    addToItemList(JSON.parse(localStorage[key]))
  }
})

function addToItemList(liContent){
  const parentNode = document.getElementById('ul');
  // create li using innerHTML
  const childHTML = `<li>${liContent.name} ${liContent.email}</li>`
  parentNode.innerHTML = parentNode.innerHTML + childHTML
  // Create Edit Button
  let edit = document.createElement('button');
  edit.id = 'edit'
  edit.className = 'classEdit'
  edit.appendChild(document.createTextNode('Edit'));
}