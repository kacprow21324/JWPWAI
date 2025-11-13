exports.add = (a, b) => {
  return a + b;
};

exports.subtract = (a, b) => {
  return a - b;
};

exports.multiply = (a, b) => {
  return a * b;
};

exports.divide = (a, b) => {
  if (b === 0) {
    return "Błąd: Dzielenie przez zero.";
  }
  return a / b;
};

exports.modulo = (a, b) => {
  if (b === 0) {
    return "Błąd: Modulo przez zero.";
  }
  return a % b;
};