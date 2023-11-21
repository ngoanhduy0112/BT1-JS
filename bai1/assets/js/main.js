function diem(mark){
    if(mark > 85){
        console.log('A');
    } else if(mark >=70 && mark < 85 ){
        console.log('B');
    } else if(mark >= 40 && mark < 70){
        console.log('C');

    } else {
        console.log('D');
    }
}

let mark = parseFloat(prompt('diem cua ban tu 0 den 100'));
diem(mark);