let Currency2 = function(zloty) {
    this.zloty = zloty;
}

Currency2.prototype.euro = 0.23;
Currency2.prototype.frankKongijski = 724.6; 
Currency2.prototype.yuan = 1.94;
Currency2.prototype.boliwar = 53.69;
Currency2.prototype.koronaCzeska = 5.73;

Currency2.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
}

Currency2.prototype.zlotyToEuro = function() {
    return this.roundTwoDecimals(this.zloty * this.euro);
}

Currency2.prototype.zlotyToFrankKongijski = function() {
    return this.roundTwoDecimals(this.zloty * this.frankKongijski);
}   

Currency2.prototype.zlotyToYuan = function() {
    return this.roundTwoDecimals(this.zloty * this.yuan);
}

Currency2.prototype.zlotyToBoliwar = function() {
    return this.roundTwoDecimals(this.zloty * this.boliwar);
}

Currency2.prototype.zlotyToKoronaCzeska = function() {
    return this.roundTwoDecimals(this.zloty * this.koronaCzeska);
}

Currency2.prototype.euroToZloty = function(euroAmount) {
    return this.roundTwoDecimals(euroAmount / this.euro);
}

Currency2.prototype.frankKongijskiToZloty = function(frankKongijskiAmount) {
    return this.roundTwoDecimals(frankKongijskiAmount / this.frankKongijski);
}   

Currency2.prototype.yuanToZloty = function(yuanAmount) {
    return this.roundTwoDecimals(yuanAmount / this.yuan);
}   

Currency2.prototype.boliwarToZloty = function(boliwarAmount) {
    return this.roundTwoDecimals(boliwarAmount / this.boliwar);
}   

Currency2.prototype.koronaCzeskaToZloty = function(koronaCzeskaAmount) {
    return this.roundTwoDecimals(koronaCzeskaAmount / this.koronaCzeska);
}   

module.exports = exports = Currency2;