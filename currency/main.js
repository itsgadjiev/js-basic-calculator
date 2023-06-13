
function tryParse() {
    let a = 0
    while (a === 0) {
        let promptNumber = Number(prompt("Please enter the amount:"));
        while (!isNaN(promptNumber)) {
            a = 1
            return promptNumber;
        }
    }
}

function addToBank(sum) {

    let amount = tryParse();
    let result = amount + sum;
    return result;

}

function getFromBank(sum) {
    let a = 0;
    while (a === 0) {
        let amount = tryParse();
        if (sum >= amount) {
            let result = sum - amount;
            a = 1;
            return result;
        }
        else {
            alert("You have no money for that operation enter 0 to return");
        }
    }

}



let sum = 5000
while (true) {

    let key = prompt(`What You want to do? { Add to bank (+) or Get from bank(-)  } Your bank ammount is:${sum}`);

    switch (key) {
        case "+":
            sum = addToBank(sum);
            alert(`Your total is: ${sum}`)
            break;
        case "-":
            sum = getFromBank(sum);
            alert(`Your total is: ${sum}`)
            break;
        default:
    }
}





