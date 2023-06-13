
function tryParse() {

    let a = 0
    while (a === 0) {
        let promptNumber = Number(prompt("Please enter the number:"));
        while (!isNaN(promptNumber)) {
            a = 1
            return promptNumber;
        }
    }
}

function multiply(sum) {

    if (sum === 0) {

        let num1 = tryParse();
        let num2 = tryParse();
        let result = num1 * num2;
        return result;

    } else {
        let num = tryParse();
        let result = num * sum;
        return result;
    }
}

function addtion(sum) {

    let num = tryParse();
    let result = num + sum;
    return result;

}

function minus(sum) {
    let num = tryParse();
    let result = sum - num;
    return result;

}

function devision(sum) {
    let num = tryParse();
    let result = sum / num;
    return result;
}


let sum = 0
while (true) {

    let key = prompt("What You want to do? { + - / * }");

    switch (key) {
        case "+":
            sum = addtion(sum);
            alert(`Your total is: ${sum}`)
            break;
        case "-":
            sum = minus(sum);
            alert(`Your total is: ${sum}`)
            break;
        case "/":
            sum = devision(sum);
            alert(`Your total is: ${sum}`)
            break;
        case "*":
            sum = multiply(sum);
            alert(`Your total is: ${sum}`)
            break;
        default:
    }
}





