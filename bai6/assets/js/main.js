function tong(a, b, c) {
    if (c === a + b) {
        console.log(c + " bang tong cua " + a + " va " + b);
    } else {
        console.log(c + " khong bang tong cua " + a + " va " + b);
    }
}

let a = parseFloat(prompt("nhap so a: "));
let b = parseFloat(prompt("nhap so b: "));
let c = parseFloat(prompt("nhap so c: "));
tong(a, b, c);