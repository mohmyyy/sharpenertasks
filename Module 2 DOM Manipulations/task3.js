// 2)  Examine the document object \\

console.dir(document)  // Will show us all the different properties and methods attached to document object
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
document.title = 'Hello'
console.log(document.title)
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.forms[0])
console.log(document.links)
console.log(document.images)



// 3) Get Element by ID

Difference between innertext and textcontent.
innerText pay attention to style and textContent does'nt pays attension to style.
------------------------------------------------------------


let mainHeader = document.getElementById('main-header');
mainHeader.style.borderBottom = '2px solid black';

let title = document.getElementById('add-items');
title.style.fontWeight = 'bold' // make ADD ITEMS bold
title.style.color = 'green' // make ADD ITEMS color to Green