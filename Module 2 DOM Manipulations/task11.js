// let myObj = {
//   myName : 'Mohammed',
//   age : 22
// }
// one = localStorage.setItem("obj1",myObj)
// console.log(localStorage)

// let new_one = JS ON.stringify(myObj);
// // localStorage.setItem("obj11",new_one)
// console.log(new_one)
// localStorage.setItem("obj2" ,new_one)

let form = document.getElementById('formId');
form.addEventListener('submit',addToStorage);

function addToStorage(){
  let myObj = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    phone : document.getElementById('ph').value,
    date : document.getElementById('date').value,
    time : document.getElementById('time').value,
    myMessage : document.getElementById('textArea').value
  }
  console.log(myObj)
  let obj_serialized = JSON.stringify(myObj);
  localStorage.setItem('ob1',obj_serialized);

}