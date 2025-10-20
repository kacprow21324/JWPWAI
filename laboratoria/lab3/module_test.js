const currency = require('./currency1');

console.log("Przelicznik walut:");
console.log("100 złotych na euro: " + currency.zlotyToEuro(100));
console.log("100 złotych na franki kongijskie: " + currency.zlotyToFrankKongijski(100));
console.log("100 złotych na juany: " + currency.zlotyToYuan(100));
console.log("100 złotych na boliwary: " + currency.zlotyToBoliwar(100));
console.log("100 złotych na korony czeskie: " + currency.zlotyToKoronaCzeska(100) + "\n");

console.log("Przelicznik odwrotny:");
console.log("23 euro na złote: " + currency.euroToZloty(23));
console.log("7246 franków kongijskich na złote: " + currency.frankKongijskiToZloty(7246));
console.log("194 juany na złote: " + currency.yuanToZloty(194));
console.log("5369 boliwary na złote: " + currency.boliwarToZloty(5369));
console.log("573 korony czeskie na złote: " + currency.koronaCzeskaToZloty(573) + "\n");

const Currency2 = require('./currency2');
const currency2 = new Currency2(100);

console.log("-----------------------------------");
console.log("Test modułu Obiektowego przelicznika:");
console.log("-----------------------------------");

console.log("\nPrzelicznik walut:");
console.log("100 złotych na euro: " + currency2.zlotyToEuro());
console.log("100 złotych na franki kongijskie: " + currency2.zlotyToFrankKongijski());
console.log("100 złotych na juany: " + currency2.zlotyToYuan());
console.log("100 złotych na boliwary: " + currency2.zlotyToBoliwar());
console.log("100 złotych na korony czeskie: " + currency2.zlotyToKoronaCzeska() + "\n");

console.log("Przelicznik odwrotny:");
console.log("23 euro na złote: " + currency2.euroToZloty(23));   
console.log("7246 franków kongijskich na złote: " + currency2.frankKongijskiToZloty(7246));
console.log("194 juany na złote: " + currency2.yuanToZloty(194));
console.log("5369 boliwary na złote: " + currency2.boliwarToZloty(5369));
console.log("573 korony czeskie na złote: " + currency2.koronaCzeskaToZloty(573));

