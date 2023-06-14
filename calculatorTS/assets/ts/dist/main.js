function tryParse() {
    var a = 0;
    while (a === 0) {
        var promptNumber = Number(prompt("Please enter the amount:"));
        while (!isNaN(promptNumber)) {
            a = 1;
            return promptNumber;
        }
    }
    return 0;
}
function multiply(sum) {
    if (sum === 0) {
        var num1 = tryParse();
        var num2 = tryParse();
        var result = num1 * num2;
        return result;
    }
    else {
        var num = tryParse();
        var result = num * sum;
        return result;
    }
}
function addtion(sum) {
    var num = tryParse();
    var result = num + sum;
    return result;
}
function minus(sum) {
    var num = tryParse();
    var result = sum - num;
    return result;
}
function devision(sum) {
    var num = tryParse();
    var result = sum / num;
    return result;
}
function resetTheCalculator(sum) {
    sum = Number(0);
    alert("Calculator has succesfully been reseted");
    return sum;
}
var sum = 0;
while (true) {
    var key = prompt("What You want to do? { + - / * } or reset the calculator { 0 } TOTAL IS: " + sum);
    switch (key) {
        case "+":
            sum = addtion(sum);
            alert("Your total is: " + sum);
            break;
        case "-":
            sum = minus(sum);
            alert("Your total is: " + sum);
            break;
        case "/":
            sum = devision(sum);
            alert("Your total is: " + sum);
            break;
        case "*":
            sum = multiply(sum);
            alert("Your total is: " + sum);
            break;
        case "0":
            sum = resetTheCalculator(sum);
            break;
        default:
    }
}
