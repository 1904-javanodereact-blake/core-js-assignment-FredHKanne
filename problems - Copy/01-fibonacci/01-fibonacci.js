/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

//  While Loop
function fib(n) {
    let a = 1, b = 0, temp;

    while (n > 0){
      temp = a;
      a = a + b;
      b = temp;
      n--;
    }
  
    return b;   //returns nth number is sequence
}

let n = 8;  // The nth number of fibonacci sequence
console.log(`\nThe ${n} number in the fibonacci sequence is:  ${fib(n)}`);

//  For Loop
function fibf(number) {

  let temp1 = 0, temp2 = 1, next = 1;

  for(var i = 2; i <= number; i++) {
      next = temp1 + temp2;
      temp1 = temp2;
      temp2 = next;
  }
  return next;    //returns nth number is sequence
};

let fibNum = 8;  // The nth number of fibonacci sequence
console.log(`\nThe ${fibNum} number in the fibonacci sequence is:  ${fibf(fibNum)}`);

