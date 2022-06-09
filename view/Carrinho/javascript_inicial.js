// converter texto em número
function moneyTextToFloat(text) {
    var cleanText = text.replace("R$ ", "").replace(",", ".");
    return parseFloat(cleanText);
    }

// converter número em texto
function floatToMoneyText(value) {
    var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
    text = "R$ " + text;
    return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

/*var total = document.getElementById("total");
var formattedText = floatToMoneyText(moneyTextToFloat(total.innerHTML));
alert(formattedText === total.innerHTML);*/

// ler elemento total
function readTotal() {
    var total = document.getElementById("total");
    return moneyTextToFloat(total.innerHTML);
}

// Alterar valor do campo total
function writeTotal(value) {
    var total = document.getElementById("total");
    total.innerHTML = floatToMoneyText(value);
}

var produtos = document.getElementsByClassName("produto");

for(var i = 0; i < produtos.length; i++) {
    var priceElements = produtos[i].getElementsByClassName("preco");
    var priceText = priceElements[0].innerHTML;
    var price = moneyTextToFloat(priceText);
    console.log(price);
}

writeTotal(3.141523);

