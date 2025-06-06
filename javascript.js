var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var result = document.getElementById("result");
var subtract = document.getElementById("subtract");
var add = document.getElementById("add");
var times = document.getElementById("times");
var division = document.getElementById("division");

function calculator (operation){
    var num1 = Number(number1.value);
    var num2 = Number(number2.value);
    if (number1.value === "" || number2.value === "") {
        result.textContent = "Please enter numbers";
      } else if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Please enter valid numbers";
      } else {
        let result1;
        switch (operation) {
        case "add":
            result1 = num1 + num2;
            break;
        case "subtract":
            result1 = num1 - num2;
            break;
        case "times":
            result1 = num1 * num2;
            break;
        case "division":
            if (num2 === 0) {
            result1 = "Can't divide by 0";
            } else {
            result1 = num1 / num2;
            }

            break;
        default:
            result1 = "";
            break;
        }
    result.textContent = result1;
    clearInputs();
  }
}

function clearInputs() {
    number1.value = "";
    number2.value = "";
}

add.addEventListener("click", () => {
    calculator("add");
});
subtract.addEventListener("click", () => {
    calculator("subtract");
});
  
times.addEventListener("click", () => {
    calculator("times");
});
  
division.addEventListener("click", () => {
    calculator("divide");
});
