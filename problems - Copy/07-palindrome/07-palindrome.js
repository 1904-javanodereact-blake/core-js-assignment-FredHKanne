/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    //let re = /[\W_]/g;
    let re = /[^A-Za-z0-9]/g;       // use RegExp to remove non-alphanumeric characters
    let lowRegStr = someStr.toLowerCase().replace(re, '');      // lowercase the string
    let reverseStr = lowRegStr.split('').reverse().join('');    // reverse the string
    return reverseStr === lowRegStr;
}
console.log('\n');
console.log(isPalindrome('Eye'));
console.log(isPalindrome('A man with a plan'));