const inputA = document.querySelector("#inputA");
const inputB = document.querySelector("#inputB");
const addition = document.querySelector("#addition");
const sub = document.querySelector("#substraction");
const mul = document.querySelector("#multiplication");
const div = document.querySelector("#division");
const showMessage = document.querySelector("#output");

// function additionAB (){
//     var A = inputA.value;
//     var B = inputB.value;
    
//     const additionOfAB = Number(A)+Number(B);    
//     showMessage.innerText = 'sum of two numbers is: '+additionOfAB;   
// }

addition.addEventListener("click", () => {
    var A = inputA.value;
    var B = inputB.value;

    const additionOfAB = Number(A)+Number(B);    
    showMessage.innerText = 'sum of two numbers is: '+additionOfAB;
});

sub.addEventListener("click", () => {
    var A = inputA.value;
    var B = inputB.value;

    const substractionOfAB = Number(A)-Number(B);    
    showMessage.innerText = 'substraction of two numbers is: '+substractionOfAB;
});

mul.addEventListener("click", () => {
    var A = inputA.value;
    var B = inputB.value;

    const multiplicationOfAB = Number(A)*Number(B);    
    showMessage.innerText = 'Multiplication of two numbers is: '+multiplicationOfAB;
});

div.addEventListener("click", () => {
    var A = inputA.value;
    var B = inputB.value;

    const divisionOfAB = Number(A)/Number(B);    
    showMessage.innerText = 'Division of two numbers is: '+divisionOfAB;
});