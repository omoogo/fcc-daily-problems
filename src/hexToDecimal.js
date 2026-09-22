'use strict';
function hexToDecimal(hex) {
  let currentPow = hex.length - 1;
  const parts = hex.toUpperCase().split('');
  let total = 0;
  for (const part of parts) {
    const decimalVal = getStaticDecimalValue(part);
    total += 16 ** currentPow * Number(decimalVal);
    currentPow--;
  }
  return total;
}

// The problem stated it will only contain characters `0-9` and `A-F`
function getStaticDecimalValue(val) {
  const map = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };
  return map[val] ?? Number(val);
}

module.exports = hexToDecimal;
