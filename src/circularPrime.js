const isPrime = require("./utils");

function isCircularPrime(n) {
  if (!isPrime(n)) return false;

  const rotations = String(n).split("").length - 1;
  for (let index = 0; index < rotations; index++) {
    n = rotateDigits(n);
    if (!isPrime(n)) return false;
  }

  return true;
}

function rotateDigits(n) {
  const nText = String(n);
  const chars = nText.split("");

  const [char] = chars.splice(0, 1);
  chars.splice(chars.length, 0, char);

  return Number(chars.join(""));
}

module.exports = isCircularPrime