//If I give you
//[1,5,2,3,4,6,3,1] I should get [5,3,6,1]

//If I give you
//['a', 'b', 'c'] I should get ['b']


function evenNumber(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            //console.log(arr[i]);
            result.push(arr[i]); 
        }
    }
    return result;
}
console.log(evenNumber([1,5,2,3,4,6,3,1]));
