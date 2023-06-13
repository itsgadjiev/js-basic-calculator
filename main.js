
function tryParse() {

    let a = 0
    while (a == 0) {

        let promptNumber = Number(prompt("Please enter the number:"));
        while (NaN(promptNumber)) {
            a = 1
            return promptNumber;

        }
    }

}

function addtion(sum) {

    console.log(sum + tryParse())
}



