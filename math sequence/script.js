function mathSequences(arr){
    let arith = new Set();
    let geo = new Set();

    for(let i=1; i<arr.length; i++){
        let x = arr[i] - arr[i-1];
        arith.add(x);
        let y = arr[i]  / arr[i-1];
        geo.add(y);
    }

    if(arith.size === 1){
        return "Arithmetic"
    }
    if(geo.size === 1){
        return "Geometric"
    }
    return -1;
}

console.log(mathSequences([10,20,30,40,50]));
console.log(mathSequences([2,4,8,16]));
console.log(mathSequences([2,5,14,89]));