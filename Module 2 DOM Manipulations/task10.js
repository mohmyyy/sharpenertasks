let form = document.getElementById('formId');
form.addEventListener('submit',addToStorage);

function addToStorage(e){
  let myName = document.getElementById('name').value;
  let myEmail = document.getElementById('email').value;
  let myPhone = document.getElementById('ph').value;
  let myTime = document.getElementById('time').value;
  let myMessage = document.getElementById('textArea').value;
  localStorage.setItem('Name',myName)
  localStorage.setItem('Email',myEmail)
  localStorage.setItem('Phone',myPhone)
  localStorage.setItem('Time',myTime)
  localStorage.setItem('Message',myMessage)
}