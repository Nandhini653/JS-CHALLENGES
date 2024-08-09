function unique(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) !== i) {
            return false;
        }
    }
    return true;


    // let values = [];
    // for(let letter of str){
    //     if(values.indexOf(letter) !== -1){
    //         return false;
    //     }
    //     values.push(letter);
    // }
    // return true;
}
    
console.log(unique("abcdef"));
console.log(unique("abcabac"));