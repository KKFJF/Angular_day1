//Print the occurence of each character in a string input: 'entertainment' output: { e:3 , n:2 , t: 3 ....}
function countChars(str) {
    let count = {};
    for (let char of str) {
        count[char] = count[char] + 1 || 1;
    }
    return count;
}

console.log(countChars('entertainment'));

// Print the character which is repeated max no of times input: 'hello world' output : 'L'
function maxRepeatedChar(str) {
    str1 = str.toUpperCase().replace(/ /g, ''); 
    let count = {};
    
    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    
    return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
}

console.log(maxRepeatedChar('hello world'));
