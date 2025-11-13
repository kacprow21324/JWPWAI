class MyMathModule {
  constructor() {
    console.log("(Instancja MyMathModule utworzona)");
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "Błąd: Dzielenie przez zero.";
    }
    return a / b;
  }

  modulo(a, b) {
    if (b === 0) {
      return "Błąd: Modulo przez zero.";
    }
    return a % b;
  }
}

module.exports = MyMathModule;