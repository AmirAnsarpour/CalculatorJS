let result = document.getElementById("result");

function getResult(value) {
    if (value === "√") {
        result.value = Math.sqrt(parseFloat(result.value));
    } else if (value === "1/") {
        result.value = 1 / parseFloat(result.value);
    } else if (value === "^") {
        result.value += "**";
    } else if (value === "%") {
        result.value = parseFloat(result.value) / 100;
    } else {
        result.value += value;
    }
}


function clearResult() {
    result.value = "";
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    result.value = eval(result.value);
}
function negate() {
    if (result.value !== "" && result.value !== "0") {
        if (result.value.charAt(0) === "-") {
            result.value = result.value.substr(1);
        } else {
            result.value = "-" + result.value;
        }
    }
}
function square() {
    if (result.value !== "" && result.value !== "0") {
        result.value = Math.pow(parseFloat(result.value), 2);
    }
}