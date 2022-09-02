//3
const a = 5;
const b = 8;

if (a >= 0 && b >= 0)  {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    console.log(a + b);
}

//4
switch (a) {
    case 1:
        console.log(1)
    case 2:
        console.log(2)
    case 3:
        console.log(3)
    case 4:
        console.log(4)
    case 5:
        console.log(5)
    case 6:
        console.log(6)
    case 7:
        console.log(7)
    case 8:
        console.log(8)
    case 9:
        console.log(9)
    case 10:
        console.log(10)
    case 11:
        console.log(11)
    case 12:
        console.log(12)
    case 13:
        console.log(13)
    case 14:
        console.log(14)
    case 15:
        console.log(15)
}

//5
function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
console.log(mul(5, 6));
//6
function mathOperation(arg1 , arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
        case '-':
            return sub(arg1, arg2);
        case '*':
            return mul(arg1, arg2);
        case '/':
            return div(arg1, arg2);
    }
}

console.log(mathOperation(1,2,'+'));
