function subtract() {
    const firstNumber=Number(document.querySelector("#firstNumber").value);
    const secondNumber=Number(document.querySelector("#secondNumber").value);
    const resultInput=document.querySelector("#result");

    const subtraction=(firstNumber-secondNumber);
    resultInput.textContent=subtraction;
}