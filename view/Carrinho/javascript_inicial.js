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

// chamada das funções
function readTotal() {
    var total = document.getElementById("total");
    return moneyTextToFloat(total.innerHTML);
}
