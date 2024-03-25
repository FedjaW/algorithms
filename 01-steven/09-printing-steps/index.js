// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function printLineBreak () {
    console.log('');
}

function printHashTag () {
    process.stdout.write("#");
}

function printWhitespace () {
    process.stdout.write(" ");
}

function steps(n) {
    for (let k = 0; k < n; k++) {
        process.stdout.write("'"); // to vizualize the whitspaces
        for (let i = 0; i < n; i++) {
            if (i <= k) {
                printHashTag()
            } else {
                printWhitespace()
            }
        }
        process.stdout.write("'"); // to vizualize the whitspaces
        printLineBreak()
    }
}

steps(100)

module.exports = steps;