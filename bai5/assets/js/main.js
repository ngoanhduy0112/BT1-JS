
function check35(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "so " + number + " chia het cho ca 3 va 5";
    } else {
        return "so " + number + " khong chia het cho ca 3 va 5";
    }
}


let inputNumber = parseInt(prompt("nhap so:"));
let result = check35(inputNumber);
console.log(result);
