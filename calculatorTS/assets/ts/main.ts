
function tryParse() :number {
    let a = 0
    while (a === 0) {
        let promptNumber = Number(prompt("Please enter the amount:"));
        while (!isNaN(promptNumber)) {
            a = 1
            return promptNumber;
        }
    }
    return 0;
}


function multiply(sum : number) : number {
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

function addtion(sum :number):number {

    let num = tryParse();
    let result = num + sum;
    return result;

}

function minus(sum : number):number {
    let num = tryParse();
    let result = sum - num;
    return result;

}

function devision(sum : number):number {
    let num = tryParse();
    let result = sum / num;
    return result;
}

function resetTheCalculator(sum :number) :number {
    sum = Number(0);
    alert("Calculator has succesfully been reseted");
    return sum;
}


let sum = 0
while (true) {

    let key = prompt(`What You want to do? { + - / * } or reset the calculator { 0 } TOTAL IS: ${sum}`);

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
        case "0":
            sum = resetTheCalculator(sum);
            break;
        default:
    }
}





