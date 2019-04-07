/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function IsEven(someNum) {
    return Math.floor(someNum / 2) * 2 === someNum;
}

let n = -1;
console.log(`Is the number ${n} even? ${IsEven(-1)}`);
n = 0;
console.log(`Is the number ${n} even? ${IsEven(0)}`);
n = 1;
console.log(`Is the number ${n} even? ${IsEven(1)}`);
n = 13;
console.log(`Is the number ${n} even? ${IsEven(13)}`);