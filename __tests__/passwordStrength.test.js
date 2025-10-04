const checkStrength = require("../src/passwordStrength");

test('checkStrength("123456") should return "weak"', () => {
    expect(checkStrength("123456")).toBe("weak");
});