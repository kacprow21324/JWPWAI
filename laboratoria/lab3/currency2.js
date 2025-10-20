let Currency2 = function(zloty) {
    this.zloty = zloty;
}

Currency2.prototype.waluty = {
    euro: 0.23,
    frankKongijski: 724.6,
    yuan: 1.94,
    boliwar: 53.69,
    koronaCzeska: 5.73
}

Currency2.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount*100)/100;
}

Currency2.prototype.zlotyToWaluta= function(zloty,i) {
    return this.roundTwoDecimals(zloty*this.waluty[i]);
}

Currency2.prototype.walutaToZloty = function(waluta,i) {
    return this.roundTwoDecimals(waluta/this.waluty[i]);
}

module.exports = exports = Currency2;