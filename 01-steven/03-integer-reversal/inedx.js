// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const isNegative = n < 0

    const strReversed = n.toString().split('').reverse().join('')
    const intReversed = parseInt(strReversed)

    return isNegative ? -intReversed : intReversed
}

console.log(reverseInt(-9532))

module.exports = reverseInt;