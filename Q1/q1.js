const inputA = document.querySelector("#inputOne");
const inputB = document.querySelector("#inputTwo");
const add = document.querySelector("#addition");
const sub = document.querySelector("#substraction");
const mul = document.querySelector("#multiplication");
const div = document.querySelector("#division");
const showMessage = document.querySelector("#output");


addition.addEventListener("click", () => {
    var A = Number(inputA.value);
    var B = Number(inputB.value);
    
    let sum = A+B;   
    showMessage.innerText = 'sum of two numbers is: '+sum;
});

sub.addEventListener("click", () => {
    var A = Number(inputA.value);
    var B = Number(inputB.value);
    
    let substraction = A-B;  
    showMessage.innerText = 'substraction of two numbers is: '+substraction;
});

mul.addEventListener("click", () => {
    var A = Number(inputA.value);
    var B = Number(inputB.value);

    const multiplicationOfAB = A*B;    
    showMessage.innerText = 'Multiplication of two numbers is: '+multiplicationOfAB;
});

div.addEventListener("click", () => {
    var A = Number(inputA.value);
    var B = Number(inputB.value);

    const divisionOfAB = A/B;    
    showMessage.innerText = 'Division of two numbers is: '+divisionOfAB;
});

