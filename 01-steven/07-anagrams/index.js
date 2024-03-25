// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const strA = stringA.toLowerCase().trim().replace()
    const strB = stringB.toLowerCase().trim().replace()

    const a = strA.split('').sort().join('')
    const b = strB.split('').sort().join('')

    console.log(a === b);

    return a === b
}

anagrams('RAIL! SAFETY!', 'fairy tales')
anagrams('Leben', 'Nebel')
anagrams('Lampe', 'Palme')
anagrams('Tom Vorlost Riddle', 'Ist Lord Voldemort')
anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
anagrams('hello', 'llohe')

module.exports = anagrams;