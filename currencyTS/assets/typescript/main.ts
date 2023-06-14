
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


function addToBank(sum: number): number {
    let amount = tryParse();
    let result = amount + sum;
    return result;
  }

  function getFromBank(sum : number) :number {
    let a = 0;
    let result = 0;
    while (a === 0) {
        let amount = tryParse();
        if (sum >= amount) {
            result = sum - amount;
            a = 1;
            return result;
        }
        else{
            alert("You have no money for that operation enter 0 if you want to return");
        }
    }
    return sum;
    
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

  

