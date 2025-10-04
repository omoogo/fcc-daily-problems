function checkStrength(password) {
  if (password.length < 8) {
    return "weak";
  }

  return password;
}

module.exports = checkStrength;