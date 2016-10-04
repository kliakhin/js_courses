/**
 * Created by Yevgen.Kliakhin on 9/27/2016.
 */
var submit = document.getElementById("calc_btn");

function calculator() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var operators = document.getElementById("operators");
    var result = document.getElementById("result");
    var error = document.getElementById("error");

    num2.style.boxShadow = "none";
    error.style.display = "none";

    if (operators.value == "+") {
        result.value = (+num1.value) + (+num2.value);
    } else if (operators.value == "-") {
        result.value = (+num1.value) - (+num2.value);
    } else if (operators.value == "*") {
        result.value = (+num1.value) * (+num2.value);
    } else if (operators.value == "/") {
        if (num2.value != "0") {
            result.value = (+num1.value) / (+num2.value);
        } else {
            result.value = "";
            num2.style.boxShadow = "0 0 3px #ff0000";
            error.style.display = "inline";
        }
    }

    if (result.value == "Infinity") {
        result.value = "Impossible divide by zero";
    }
}

submit.onclick = calculator;

