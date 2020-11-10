const computePowerIt = (n,p) => {
    result = 1
        for (i = 1; i <= p; i++)
        result = result*n
        return result;
}

const computePowerRec = (n,p) => {
    if (p === 1) return n;
    else return n * computePowerRec(n,p-1);
}

console.log('ITERATED EXPONENTIAL')
console.log(computePowerIt(2,4))

//En posant :
//result = 2*2 (i=1)
//result = 4*2 (i=2)
//result = 8*2 (i=3)
//result = 16 (puisque i=p=4)

console.log('RECURSIVE EXPONENTIAL')
console.log(computePowerRec(2,4))

// En posant :
// 2*2 (p = 3)
// 4*2 (p = 2)
// 8*2 (p = 1)
// 16 (résultat puisque p === 1)