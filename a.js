const stock = document.getElementById("stock");
let stockContent = stock.innerHTML;
const splitted = stockContent.split("=")
let stockCount = parseInt(splitted[1])
let stockInput = document.getElementById("stockInput").value;
let stockInputEvent = document.getElementById("stockInput");
let button = document.getElementById("buy");
let updated;

stockInputEvent.oninput = function(){
    updated = parseInt(stockCount) - parseInt(stockInputEvent.value);
    if( updated < stockInput) {
        stock.innerHTML = `No Stocks`;    
    }
    else if(!stockInputEvent.value) {
        stock.innerHTML = `Stocks = ${stockCount}`
    }else {
        stock.innerHTML = `Stocks = ${updated}`
    }
}