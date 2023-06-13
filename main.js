
function tryParse() {

    let a = 0
    while (a == 0) {

        let promptNumber = Number(prompt("Please enter the number:"));
        while (!isNaN(promptNumber)) {
            a = 1
            return promptNumber;

        }
    }

}

function addtion() {
    let sum = 0;
    console.log(sum + tryParse())
}
addtion()


