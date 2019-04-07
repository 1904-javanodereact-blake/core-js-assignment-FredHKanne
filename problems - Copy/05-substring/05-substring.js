/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    try { 
        //if(someStr !== typeof(string)) throw "not of type String";
        if(isNaN(startIndex))           throw "not a valid number for startIndex!";
        if(isNaN(endIndex))             throw "not a valid number for endIndex!";
        if(startIndex > endIndex)       throw "endIndex is larger than startIndex!";
      }
      catch(err) {
        console.log("\nInput for function substring " + err);
      }

    let sub = someStr.substring(startIndex, endIndex);
    return sub;
}

let str = "Hello world!";
let start = 3;
let end = 15;   // End can be larger than actual length
console.log(`\nThe substring of ${str} is: ${substring(str,start,end)}`)

str = "Hello world!";
start = "v";
end = 15;   // End can be larger than actual length
console.log(`\nThe substring of ${str} is: ${substring(str,start,end)}`)

str = "Hello world!";
start = 35;
end = 15;   // End can be larger than actual length
console.log(`\nThe substring of ${str} is: ${substring(str,start,end)}`)