1)	Write a function and use 'call' to call the function.
let obj = {
 nums : 10,
 num1 : 25
}
let accessObj = function(x,y,z)
{
 return this.num1+this.nums+z+x+y;
}
console.log(accessObj.call(obj,10,15,20))

2) Write a program using apply.
let obj = {
 nums:22,
 nums1:48
}
let objFunction = function(n,n1){
 return this.nums + this.nums1 + n + n1;
}
let arr = [20,22]
console.log(objFunction.apply(obj,arr))

3) Write a program using bind.
let obj = {
 num1 : 40,
 num2 : 40
}
let objFunction = function (n1,n2){
 return this.num1 + this.num2 + n1 + n2;
}
let bound = objFunction.bind(obj)
console.log(bound(1,2))

4) 
let student = {
 age : 20
}
let studentFunction = function() {
 return this.age
}
let bound = studentFunction.bind(student);
console.log(bound())


Currying 
// Function Currying using bind

let func = function (x,y){
  console.log((x*y));
}
let funcTwo = func.bind(this,10)
funcTwo(10)
// Function Curring using function closure.

let multiple = function(x){
  return function(y){
    console.log(x*y);
  }
}
let multipleTwo = multiple(2)
multipleTwo(4)