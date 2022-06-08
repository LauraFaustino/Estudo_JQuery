// converter texto em número
function moneyTextToFloat(text){
    var clearText = text.replace("R$ ", "").replace(",", ".");
    return parseFloat(clearText);
}

// converter número em texto
function floatToMoneyText(value){
    var text = (value < 1 ? "0" : "") + Math.floor(value + 100);
    text = "R$ " + text;
    return text.substr(0, text.length -2) + "," + text.substr(-2);
}


var total = document.getElementById("total");
var formattedText = floatToMoneyText(moneyTextToFloat(total.innerHTML));
alert(formattedText === total.innerHTML);