const isCircularPrime = require('../src/circularPrime');

test('isCircularPrime(197) should return true', () => {
  expect(isCircularPrime(197)).toBe(true);
});

test('isCircularPrime(23) should return false', () => {
  expect(isCircularPrime(23)).toBe(false);
});

test('isCircularPrime(13) should return true', () => {
  expect(isCircularPrime(13)).toBe(true);
});

test('isCircularPrime(89) should return false', () => {
  expect(isCircularPrime(89)).toBe(false);
});

test('isCircularPrime(1193) should return true', () => {
  expect(isCircularPrime(1193)).toBe(true);
});
