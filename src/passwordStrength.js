function checkStrength(password) {
  let strengthScore = 0;

  if (password.length >= 8) strengthScore++;

  if (strengthScore < 2) return 'weak';
  if (strengthScore <= 3) return 'medium';
  return 'strong'; // anything above 3
}

module.exports = checkStrength;
