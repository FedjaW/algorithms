// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// This fib function takes exponential time O(n) = 2 ^ n
function fib(n) {
    if (n == 0) {
        return 0
    }

    if (n == 1) {
        return 1
    }

    n--
    result = fib(n) + fib(n-1)

    return result
}

const f = fib(39)
console.log(f)


// memoize already calculated numbers
function memo(fn) {
    const cache = {}
    return function(...args) {
        if (cache[args]) {
            return cache[args]
        }

        const result = fn.apply(this, args)
        cache[args] = result

        return result
    }
}

const fastFib = memo(fib)
const fibNumber = fastFib(50)
console.log(fibNumber)

module.exports = fib;