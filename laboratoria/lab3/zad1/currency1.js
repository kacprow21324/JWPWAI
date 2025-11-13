let waluty = {
    euro: 0.23,
    frankKongijski: 724.6,
    yuan: 1.94,
    boliwar: 53.69,
    koronaCzeska: 5.73
}

function roundTwoDecimals(amount) {
    return Math.round(amount*100)/100;
}

exports.zlotyToWaluta = function(zloty,i) {
    return roundTwoDecimals(zloty*waluty[i]);
}

exports.walutaToZloty = function(waluta,i) {
    return roundTwoDecimals(waluta/waluty[i]);
}
