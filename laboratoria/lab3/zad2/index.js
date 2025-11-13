const readline = require('readline');

const math1 = require('./myMathModule1');

const MyMathModule = require('./myMathModule2');

const math2 = new MyMathModule();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Interaktywny Kalkulator Modułowy (Powrót MyMathModule) ===");
console.log("Proszę podać dwie liczby, na których wykonamy obliczenia.");

rl.question("Podaj pierwszą liczbę (a): ", function(a_str) {
  rl.question("Podaj drugą liczbę (b): ", function(b_str) {
    
    const a = parseFloat(a_str);
    const b = parseFloat(b_str);

    if (isNaN(a) || isNaN(b)) {
      console.log("\nBŁĄD: Wprowadzono niepoprawne liczby.");
      rl.close();
      return;
    }

    console.log(`\nWybrano liczby: a = ${a}, b = ${b}`);
    
    console.log("\n--- WYNIKI (Moduł 1: exports) ---");
    console.log(`Dodawanie (a + b): ${math1.add(a, b)}`);
    console.log(`Mnożenie (a * b): ${math1.multiply(a, b)}`);
    console.log(`Modulo (a % b):    ${math1.modulo(a, b)}`);

    console.log("\n--- WYNIKI (Moduł 2: klasa MyMathModule) ---");
    console.log(`Odejmowanie (a - b): ${math2.subtract(a, b)}`);
    console.log(`Dzielenie (a / b):   ${math2.divide(a, b)}`);
    console.log(`Modulo (a % b):    ${math2.modulo(a, b)}`);

    rl.close();
  });
});

rl.on("close", function() {
  console.log("\nDziękujemy za skorzystanie z kalkulatora.");
  process.exit(0);
});