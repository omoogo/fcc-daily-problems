function digitsOrLetters(str) {
  const chars = str.split('');
  let digitCount = 0;
  let letterCount = 0;

  for (const char of chars) {
    if (/^[0-9]$/.test(char)) {
      digitCount++;
    }
    if (/^[a-zA-Z]$/.test(char)) {
      letterCount++;
    }
  }

  if (digitCount > letterCount) {
    return 'digits';
  } else if (letterCount > digitCount) {
    return 'letters';
  } else {
    return 'tie';
  }
}

module.exports = digitsOrLetters;
