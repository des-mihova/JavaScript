function giveMaxValueFromArray(arr) {
    var numbers = arr;
    var currentMax = arr[0];
    var i = 0;
    while (i < numbers.length) {
        //console.log("I am an I variable and my value is: " + i);
        if (currentMax < numbers[i]) {
            //console.log("I am a temp cariable" + temp);
            currentMax = numbers[i];
        }
        i++;
    }
    return currentMax;
}

console.log(giveMaxValueFromArray([5,6,9,4]));