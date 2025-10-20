const currency = require('./currency1');

console.log("---------------------------");
console.log("Test modułu przelicznika:");
console.log("---------------------------");

console.log("\nPrzelicznik walut:");
console.log("100 złotych na euro: " + currency.zlotyToWaluta(100,"euro"));
console.log("100 złotych na franki kongijskie: " + currency.zlotyToWaluta(100,"frankKongijski"));
console.log("100 złotych na juany: " + currency.zlotyToWaluta(100,"yuan"));
console.log("100 złotych na boliwary: " + currency.zlotyToWaluta(100,"boliwar"));
console.log("100 złotych na korony czeskie: " + currency.zlotyToWaluta(100,"koronaCzeska") + "\n");

console.log("Przelicznik odwrotny:");
console.log("23 euro na złote: " + currency.walutaToZloty(23,"euro"));
console.log("72460 franków kongijskich na złote: " + currency.walutaToZloty(72460,"frankKongijski"));
console.log("194 juany na złote: " + currency.walutaToZloty(194,"yuan"));
console.log("5369 boliwary na złote: " + currency.walutaToZloty(5369,"boliwar"));
console.log("573 korony czeskie na złote: " + currency.walutaToZloty(573,"koronaCzeska") + "\n");

console.log("-----------------------------------");
console.log("Test modułu Obiektowego przelicznika:");
console.log("-----------------------------------");

const Currency2 = require('./currency2');
const currency2 = new Currency2(100);

console.log("\nPrzelicznik walut:");
console.log("100 złotych na euro: " + currency2.zlotyToWaluta(100,"euro"));
console.log("100 złotych na franki kongijskie: " + currency2.zlotyToWaluta(100,"frankKongijski"));
console.log("100 złotych na juany: " + currency2.zlotyToWaluta(100,"yuan"));
console.log("100 złotych na boliwary: " + currency2.zlotyToWaluta(100,"boliwar"));
console.log("100 złotych na korony czeskie: " + currency2.zlotyToWaluta(100,"koronaCzeska") + "\n");

console.log("Przelicznik odwrotny:");
console.log("23 euro na złote: " + currency2.walutaToZloty(23,"euro"));
console.log("72460 franków kongijskich na złote: " + currency2.walutaToZloty(72460,"frankKongijski"));
console.log("194 juany na złote: " + currency2.walutaToZloty(194,"yuan"));
console.log("5369 boliwary na złote: " + currency2.walutaToZloty(5369,"boliwar"));
console.log("573 korony czeskie na złote: " + currency2.walutaToZloty(573,"koronaCzeska") + "\n");





