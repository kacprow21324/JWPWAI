let euro = 0.23;
let frankKongijski = 724.6;
let yuan = 1.94;
let boliwar = 53.69;
let koronaCzeska = 5.73;

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.zlotyToEuro = function(zloty) {
    return roundTwoDecimals(zloty*euro);
}

exports.zlotyToFrankKongijski = function(zloty) {
    return roundTwoDecimals(zloty*frankKongijski);
}

exports.zlotyToYuan = function(zloty) {
    return roundTwoDecimals(zloty*yuan);
}   

exports.zlotyToBoliwar = function(zloty) {
    return roundTwoDecimals(zloty*boliwar);
}   

exports.zlotyToKoronaCzeska = function(zloty) {
    return roundTwoDecimals(zloty*koronaCzeska);
}

exports.euroToZloty = function(euroAmount) {
    return roundTwoDecimals(euroAmount/euro);
}

exports.frankKongijskiToZloty = function(frankKongijskiAmount) {
    return roundTwoDecimals(frankKongijskiAmount/frankKongijski);
}

exports.yuanToZloty = function(yuanAmount) {
    return roundTwoDecimals(yuanAmount/yuan);
}   

exports.boliwarToZloty = function(boliwarAmount) {
    return roundTwoDecimals(boliwarAmount/boliwar);
}   

exports.koronaCzeskaToZloty = function(koronaCzeskaAmount) {
    return roundTwoDecimals(koronaCzeskaAmount/koronaCzeska);
}   