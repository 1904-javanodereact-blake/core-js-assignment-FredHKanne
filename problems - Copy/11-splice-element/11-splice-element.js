/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    someArr.splice(2, 0, 'Tuesday');
    // inserts at 2nd index position
    console.log(someArr);
    
    someArr.splice(4, 1, 'Thursday');
    // replaces 1 element at 4th index
    console.log(someArr);

}

let daysOfWeek = ['Sunday', 'Monday', 'Wednesday', 'thursday', 'Friday', 'Saturday'];
spliceElement(daysOfWeek, 2);
