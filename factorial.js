const computeFactorialIt = (x) => {
    let result = 1;
    for (let i = 1; i <= x; i++)
    result = result * i;
    return result;
}


const computeFactorialRec = (y) => {
    if (y === 0) return 1;
    else return y * computeFactorialRec(y-1);
}

console.log('ITERATED FACTORIAL')
console.log(computeFactorialIt(5))

console.log('RECURSIVE FACTORIAL')
console.log(computeFactorialRec(5))

// factorial(5) = 5 * factorial(4);
// factorial(4) = 4 * factorial(3);
// factorial(3) = 3 * factorial(2);
// factorial(2) = 2 * factorial(1);
// factorial(1) = 1 * factorial(0);
// factorial(0) = 1;
// Donc :
// factorial(1) = 1 * 1;
// factorial(2) = 2 * 1 * 1;
// factorial(3) = 3 * 2 * 1 * 1;
// factorial(4) = 4 * 3 * 2 * 1 * 1;
// factorial(5) = 5 * 4 * 3 * 2 * 1 * 1 = 120