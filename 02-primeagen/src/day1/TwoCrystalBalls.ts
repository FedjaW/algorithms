// breaks array is has this format: [0,0,1,1,1,1,1]

// my own solution
export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    const numberOfJumps = breaks.length / jumpAmount

    var lowerEnd = 0;

    for (let n = 1; n < numberOfJumps + 1; ++n) {
        const index = jumpAmount * n

        if (breaks[index] === true) {
            for (let i = lowerEnd; i < index; i++) {
                if (breaks[i] === true) {
                    return i;
                }
                lowerEnd = i;
            }
        }
    }

    return -1 // indicating no match aka crystal ball won't break at all
}

// primeagen's solution
function two_crystal_balls_primeagen(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jmpAmount

    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break
        }
    }

    i -= jmpAmount

    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i
        }
    }

    return -1 // indicating no match aka crystal ball won't break at all
}
