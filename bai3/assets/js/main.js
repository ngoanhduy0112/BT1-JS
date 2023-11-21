function checkNumber(number){
    if (number > 0){
        console.log(number + 'la so duong');
    } else if (number < 0){
        console.log(number + 'la so am');
    } else {
        console.log(number + 'so nhap la 0');
    }
}
let soCheck = parseFloat(prompt("nhap so: "));
checkNumber(soCheck);