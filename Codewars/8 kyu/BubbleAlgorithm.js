function mergeArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i]);
    }
    return arr2;
}

function sortArray(arr) {
    var len = arr.length;
    for (let j = len - 1; j >= 0; j--) {
        for (let k = 1; k <= j; k++) {
            if (arr[k - 1] > arr[k]) {
                let temp = arr[k - 1];
                arr[k - 1] = arr[k];
                arr[k] = temp;                
            }
        }
    }
    return arr;
}

function removeDublicateValues(arr) {
    let onlyUniques = []
    for(i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {

            onlyUniques.push(arr[i]);
        }
    }
    return onlyUniques;
}

// let merged = mergeArrays([2,3,6,3,2,9], [2,6,2,4,9,4]);
// let sorted = sortArray(merged);
// let uniqueValues = removeDublicateValues(sorted);

console.log(removeDublicateValues(sortArray(mergeArrays([2,3,6,3,2,9], [2,6,2,4,9,4]))));


