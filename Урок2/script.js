let num = 5

if ( num < 4) {
    console.log('menshe 4');
} else if (num == 5) {
    console.log('rovno5');
} else {
    console.log('hui znaet');
}

(num==5) ? console.log('yes') : console.log('noooo');

switch(num) {
    case num < 5:
        console.log('1')
        break;
    case 5: 
        console.log('2')
        break;
    case num > 5:
        console.log('3');
        break;
    default:
        console.log('nehyi')

}




while ( num < 55) {
    console.log(num);
    num++;
}

let n = 500

do {
    n++;
    console.log(n);
} while (n<550);

for (let m = 1000; m < 10000; m++) {
    console.log(m);
    if (m == 5000) {
        break;
    }
}


let a = [1, 2, 3]; 
let b = [1, 2, 3]; 
if (a == b) {
    console.log('true');
} else {
    console.log('false');
}

console.log(0 || "" || 2 || undefined || true || falsе);
