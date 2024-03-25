// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowels = str.split('').filter(c => 
        c === 'a' || 
        c === 'e' || 
        c === 'i' || 
        c === 'o' || 
        c === 'u' 
    ).length

    console.log(vowels);

    return vowels
}


vowels('Why do you ask?')
vowels('Hi There!')
vowels('Why?')

module.exports = vowels;