
function checkNumber(number) {
    if (number % 2 === 0) {
        return "so " + number + " la so chan";
    } else {
        return "so " + number + " la so le";
    }
}

let inputNumber = parseInt(prompt("nhap 1 so:"));

let result = checkNumber(inputNumber);
console.log(result);