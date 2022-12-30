let form = document.getElementById('formId');
form.addEventListener('submit',addToCloud);

// This will make sure to display the data from the cloud.
window.addEventListener("DOMContentLoaded", ()=>{
  axios.get("https://crudcrud.com/api/15798e4edec940c38f5fd60392e2dae4/appointmentData")
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
    axios.post("https://crudcrud.com/api/15798e4edec940c38f5fd60392e2dae4/appointmentData",myObj)
  .then((response) => {
    addToItemList(response.data)
    console.log(response.data)}
    )
  .catch((err) => {document.body.innerHTML = document.body.innerHTML + `<li>Some went wrong</li>` })
  }else{
      axios.put(`https://crudcrud.com/api/15798e4edec940c38f5fd60392e2dae4/appointmentData/${editedUserId}`,myObj)
      .then((response) => addToItemList(response.data))
    }
    // axios.put(`https://crudcrud.com/api/15798e4edec940c38f5fd60392e2dae4/appointmentData/${editedUserId}`,myObj)
    // .then((myObj)=>console.log(myObj))
    // .then((myObj)=> console.log(myObj))
    // .then((response) => {
      // addToItemList(response.data)})
    // .catch((err) => {console.error(err)})
  // }
  editedUserId = null
}

function addToItemList (dataObject){
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('ph').value = "";
  document.getElementById('date').value = "";
  document.getElementById('time').value = "";
  document.getElementById('textArea').value = "";
  const parentNode = document.getElementById('list');
  
  // create li element using innerHTML
  const childNode = `<li id=${dataObject.email}> ${dataObject.name}-${dataObject.email}<button onclick="editUserDetails('${dataObject.name}','${dataObject.email}','${dataObject.phone}','${dataObject.date}','${dataObject.time}','${dataObject.message}','${dataObject._id}')" type='submit' id = theEditBtn > Edit </button>
  <button type='button' onclick=deleteUser('${dataObject.email}','${dataObject._id}') id = 'theDeleteBtn' > Delete </button>
  </li>`
  parentNode.innerHTML = parentNode.innerHTML + childNode
  deleteBtn = document.getElementById('delete');
}

function removeItemFromList(email){
  let parentNode = document.getElementById('list');
  let childNodeToBeDeleted= document.getElementById(email)
  if (childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted)
  }
}

function deleteUser(email,id){
  // alert(`https://crudcrud.com/api/15798e4edec940c38f5fd60392e2dae4/appointmentData/${id}`)
  axios.delete(`https://crudcrud.com/api/15798e4edec940c38f5fd60392e2dae4/appointmentData/${id}`).then(()=>removeItemFromList(email))
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
}

// axios.put(`https://crudcrud.com/api/15798e4edec940c38f5fd60392e2dae4/appointmentData/639f30bc430fc103e8909cda`,const obj={
//   name: "Mohammed"
// }).then((res)=>console.log(res))