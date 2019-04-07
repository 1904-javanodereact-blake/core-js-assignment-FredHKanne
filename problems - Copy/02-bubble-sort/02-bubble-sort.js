/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  
    let swap;
    let n = numArray.length-1;
    let x=numArray;
    do {
        swap = false;
        for (let i=0; i < n; i++)   // Arrays start with index 0
        {
            if (x[i] > x[i+1])      // Ascending bubble sort > change < for descending
            {
               let temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swap = true;         // swap set true for If statement to swap
            }
        }
        n--;
    } while (swap);
 return x; 
}

console.log(bubbleSort([127, 3, 417, 5461, 123, 901, 982, 687, 77, 13]));