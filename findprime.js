const isPrimeNumber = require('./isprime.js');

const findPrime = (n) => {
    let number = n;
    while (true) {
        if (isPrimeNumber(number)) {
            return number
        } 
        number += 1;
    }
}

const findPrimeRec = (n) => {
    if (isPrimeNumber(n)) {
        return n
    } 
    return findPrimeRec(n+1);
}

console.log('ITERATED PRIME')
console.log(findPrime(14));

// Tant que "vrai est vrai", on teste le number via isPrimeNumber (on le teste tout le temps en fait)
// -> s'il est premier on s'arrête là et on return ce number
// -> si pas premier on rajoute 1 à ce number, puis on reteste via isPrimeNumber jusqu'à trouver le premier le + proche
// ---> pas 14, pas 15 non plus, pas 16 non plus, donc 17


console.log('RECURSIVE PRIME')
console.log(findPrimeRec(24));

// Si n est premier, on return n
// Si pas premier, on rajoute 1
// Si n+1 pas premier, on rajoute encore 1 (en appelant la fonction elle-même)
// ...etc jusqu'au prochain premier (que l'on return)
// ---> pas 24, pas 25, pas 26... jusqu'à 29