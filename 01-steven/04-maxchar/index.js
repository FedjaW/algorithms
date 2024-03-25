// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const dict = {}
    const arr = str.split('')

    arr.forEach(s => {
        if (s in dict) {
            dict[s] = dict[s] + 1
        } else {
            dict[s] = 1
        }
    });

    let count = 0 
    let key = ""

    Object.keys(dict).forEach(k => {
        if (dict[k] > count) {
            key = k
            count = dict[k] 
        }
    })

    return key
}

console.log(maxChar("ab1c1d1e1f1g1"))

module.exports = maxChar;