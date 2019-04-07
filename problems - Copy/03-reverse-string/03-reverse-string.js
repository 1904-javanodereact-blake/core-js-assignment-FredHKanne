/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

//      Split, Reverse, Join
function reverseStr(someStr) {
        return someStr.split("").reverse().join("");
}
//      Decrementing For Loop
function revString(str) {
        let rStr = "";
        for (let i = str.length - 1; i >= 0; i--) {
            rStr += str[i];
        }
        return rStr;
}

//      Split, Reverse, Join
console.log(reverseStr("Revature"));
console.log(reverseStr("nastyNnice"));
console.log(reverseStr("Tampa, Florida"));
//      Decrementing For Loop
console.log(revString("gravytrain"));
