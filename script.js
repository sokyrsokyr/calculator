const numbers = document.querySelectorAll(".numbers")
const text = document.getElementById("text")
const symbols = document.querySelectorAll(".symbols")
const equals = document.getElementById("equals")
const allClear = document.getElementById("allClear")
const clearEntry = document.getElementById("clearEntry")
const percent = document.getElementById("percent")


let number1;
let number2;
let result;

numbers.forEach(button => {
    button.addEventListener("click", () => {
        text.textContent += button.innerText;
    })
    
})

let operator = null;

symbols.forEach(symbol => {
    symbol.addEventListener("click", () => {
        operator = symbol.innerText;
        number1 = parseFloat(text.textContent);
        console.log(`Сохранился первый номер: ${number1}`)
        text.textContent = "";
    })
    
})



equals.addEventListener("click", () => {
    number2 = parseFloat(text.textContent)
    text.textContent = result;

    if (operator === "×") {
        result = number1 * number2;
    } else if (operator === "÷") {
        result = number1 / number2;
    } else if (operator === "-") {
        result = number1 - number2;
    } else if (operator === "+") {
        result = number1 + number2;
    }

    text.textContent = result;
    
})


allClear.addEventListener("click", () => {
    number1 = 0;
    number2 = 0;
    result = 0;
    text.textContent = "";
})


clearEntry.addEventListener("click", () => {
    let arr = text.textContent.split("");
    console.log(arr);
    arr.pop();
    console.log(arr)
    let unite = parseFloat(arr.join(""));
    text.textContent = unite;
})
