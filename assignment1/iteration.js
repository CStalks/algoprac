function fibs(num){
    //exit out of function if num is a negative number
    if(num <= 0) return [];

    let a = 0;
    let b = 1;
    let arr = [];

    if(num >= 1) arr.push(a);
    if(num >= 2) arr.push(b);
    

    for(let i = 3; i <= num; i++){
        let c = a + b;
        a = b;
        b = c;

        arr.push(b);
    }
    return arr;
}

console.log(fibs(-2));
console.log(fibs(8));
console.log(fibs(2));
console.log(fibs(5));
console.log(fibs(13));