const isPrimeNumber = (n) => {
  if (n === 1 || n === 2) {
    return true
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    } 
  }
  return true;
};
// console.log(isPrimeNumber(2));
// console.log(isPrimeNumber(3));
// console.log(isPrimeNumber(6));
// console.log(isPrimeNumber(7));
// console.log(isPrimeNumber(15));
// console.log(isPrimeNumber(631));

module.exports = isPrimeNumber;