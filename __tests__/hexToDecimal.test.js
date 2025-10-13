const hexToDecimal = require('../src/hexToDecimal');

test('hexToDecimal("A") should return 10"', () => {
    expect(hexToDecimal("A")).toBe(10);
});

test('hexToDecimal("15") should return 21', () => {
    expect(hexToDecimal("15")).toBe(21);
});

test('hexToDecimal("2E") should return 46', () => {
    expect(hexToDecimal("2E")).toBe(46);
});

test('hexToDecimal("FF") should return 255', () => {
    expect(hexToDecimal("FF")).toBe(255);
});

test('hexToDecimal("A3F") should return 2623', () => {
    expect(hexToDecimal("A3F")).toBe(2623);
});