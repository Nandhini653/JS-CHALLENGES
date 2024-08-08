function longestWord(str){
    let words = str.split(" ");
    let longestWord = "";

    for(let word of words){
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(longestWord("The poetry of the earth is never dead"));
console.log(longestWord("Happiness is the way"));

