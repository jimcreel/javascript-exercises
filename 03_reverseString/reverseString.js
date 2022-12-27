const reverseString = function(word) {
    let wordArray = word.split("");
    let reverseArray = wordArray.reverse();
    let newWord = reverseArray.join("");
    return newWord;

};

// Do not edit below this line
module.exports = reverseString;
