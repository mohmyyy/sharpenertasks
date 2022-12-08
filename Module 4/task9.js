// Function Currying in JS using bind

// let func = function (x,y){
// 	console.log((x*y));
// }
// let funcTwo = func.bind(this,10)
// funcTwo(10)

// function curring using function closure.

let multiple = function(x){
	return function(y){
		console.log(x*y);
	}
}
let multipleTwo = multiple(2)
multipleTwo(4)