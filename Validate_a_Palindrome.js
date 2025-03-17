
function isPalindrome(str) {
    
    str = str.toLowerCase(); 
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false