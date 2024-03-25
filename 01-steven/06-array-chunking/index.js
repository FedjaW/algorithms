// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const finalArray = []
    let tempArray = []

    for (let index = 0; index < array.length + 1 ; index++) {

        for (let i = 0; i < size; i++) {
            if (array[i] !== undefined) {
                tempArray.push(array[i])
            }
        }

        for (let i = 0; i < size; i++) {
            array.shift();
        }

        finalArray.push(tempArray)
        tempArray = []
    }


    console.log(finalArray);
}

chunk([1,2,3,4,5,6,7,8,9,10], 4)
chunk(["a", "b", "c", "d", "e"], 4)

module.exports = chunk;