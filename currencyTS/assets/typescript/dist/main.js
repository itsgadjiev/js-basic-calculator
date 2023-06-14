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
function addToBank(sum) {
    var amount = tryParse();
    var result = amount + sum;
    return result;
}
function getFromBank(sum) {
    var a = 0;
    var result = 0;
    while (a === 0) {
        var amount = tryParse();
        if (sum >= amount) {
            result = sum - amount;
            a = 1;
            return result;
        }
        else {
            alert("You have no money for that operation enter 0 if you want to return");
        }
    }
    return sum;
}
var sum = 5000;
while (true) {
    var key = prompt("What You want to do? { Add to bank (+) or Get from bank(-)  } Your bank ammount is:" + sum);
    switch (key) {
        case "+":
            sum = addToBank(sum);
            alert("Your total is: " + sum);
            break;
        case "-":
            sum = getFromBank(sum);
            alert("Your total is: " + sum);
            break;
        default:
    }
}
