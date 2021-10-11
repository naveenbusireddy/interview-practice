const inputA = document.querySelector("#inputA");
const inputB = document.querySelector("#inputB");
const add = document.querySelector("#addition");
const sub = document.querySelector("#substraction");
const mul = document.querySelector("#multiplication");
const div = document.querySelector("#division");

var A = inputA.value;
var B = inputB.value;

function addition (){
    console.log(A);
    console.log(B);
    
    var addAB = A+B;
    console.log(addAB);  
}
// console.log(result);

add.addEventListener("click", addition);
