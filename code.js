// function avg(arr){
//     var numbers = arr;
//     var sum = 0;
//     var i = 0
//     while (i < numbers.length){
//       sum = sum + numbers[i];
//       i++;
//     }

//     var average = sum / numbers.length;
//     return average
//   }
  
//   console.log(avg([4,6]));


function giveMaxValueFromArray(arr) {
    var numbers = arr;
    var currentMax = arr[0];

    for (i = 0; i < numbers.length; i++) {
        //console.log("I am an I variable and my value is: " + i);
        if (currentMax < numbers[i]) {
            //console.log("I am a temp cariable" + temp);
            currentMax = numbers[i];
        }
    }
    return currentMax;
}

console.log(giveMaxValueFromArray([5,6,9,4]));