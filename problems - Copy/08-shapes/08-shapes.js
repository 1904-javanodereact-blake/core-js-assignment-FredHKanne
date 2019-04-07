/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let row = character;
  let col = character;
  switch (shape) {
    case 'Square':
        console.log('\nShape is a Square')
        for (let i=0; i < height; i++) {
              row = row + character;
        };
        console.log(row);
        for (let j=1; j < height; j++) {
          console.log(row);
        }
        break;
    case 'Triangle':
        console.log('Shape is a Triangle')
        for (let i=0; i < height; i++) {
            console.log(row);
            row = row + col;
        };
        break;
      case 'Diamond':
        let str = "";
        console.log('Shape is a Diamond')
        let mid = Math.floor(height/2);
        let strArr = [];
        //  Initial for loops establishes where to print Mid
        //  and obtain string array
        for (let col = 0; col < mid; col++) {
            strArr.push(' ');
        }
        strArr.push(character); //Initialize first row with character
        let newStr = "";
        for (let i = 0; i < strArr.length; i++) {
            newStr = newStr + strArr[i];
        }
        console.log(newStr);
        // While loop prints top of diamond
        let row = 1;
        while(row <= mid) {
            strArr.shift();
            strArr.push(character);
            strArr.push(character);
            let newStr = "";
            for (let i = 0; i < strArr.length; i++) {
                newStr = newStr + strArr[i];
            }
            console.log(newStr);
            row++;
        }
        // While loop prints bottom of diamond
        row = mid + 1;
        newStr = "";
        while (row < height) {
            strArr.unshift(' ');
            strArr.pop();
            strArr.pop();
            for (let i = 0; i < strArr.length; i++) {
                newStr = newStr + strArr[i];
            }
            console.log(newStr);
            newStr = "";
            row++;        
        }
        break;
    default:
        console.log("Unknown Shape");
  }
} 

//printShape("Square", 9, "%");
//printShape("Triangle", 9, "$");
printShape("Diamond", 9, "*");