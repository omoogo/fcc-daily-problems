const digitsOrLetters = require('../src/digitsVsLetters');

test('digitsOrLetters("abc123") should return "tie"', () => {
  expect(digitsOrLetters('abc123')).toBe('tie');
});

test('digitsOrLetters("a1b2c3d") should return "letters"', () => {
  expect(digitsOrLetters('a1b2c3d')).toBe('letters');
});

test('digitsOrLetters("1a2b3c4") should return "digits"', () => {
  expect(digitsOrLetters('1a2b3c4')).toBe('digits');
});

test('digitsOrLetters("abc123!@#DEF") should return "letters"', () => {
  expect(digitsOrLetters('abc123!@#DEF')).toBe('letters');
});

test('digitsOrLetters("H3110 W0R1D") should return "digits"', () => {
  expect(digitsOrLetters('H3110 W0R1D')).toBe('digits');
});

test('digitsOrLetters("P455W0RD") should return "tie"', () => {
  expect(digitsOrLetters('P455W0RD')).toBe('tie');
});
