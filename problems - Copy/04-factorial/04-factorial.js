/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
        if (sumNum < 0)         // If the number is less than 0, reject it.
              return -1;
        else if (sumNum === 0)  // If the number is 0, its factorial is 1.
            return 1;
        else {
            return (sumNum * factorial(sumNum - 1));    // call the recursive procedure again
        }
}

let n = 5;
console.log(`The factorial number of ${n} is ${factorial(n)}`);