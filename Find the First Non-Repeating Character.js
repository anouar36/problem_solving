function firstNonRepeatingChar(str) {
    const charCount = {}; 
    
    for (let i = 0; i < str.length; i++) {
        charCount[str[i]] = (charCount[str[i]] || 0) + 1;
        return   charCount[str[i]]
    }
    
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i]; 
        }
    }
    
    return null; 
}

console.log(firstNonRepeatingChar("rroojjseerrzz")); // Output: 'w'
