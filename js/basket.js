let basketItem1Cost = document.getElementById("basketItem1Cost");
let basketItem2Cost = document.getElementById("basketItem2Cost");
let basketItem1Quantity = document.getElementById("basketItem1Quantity");
let basketItem2Quantity = document.getElementById("basketItem2Quantity");
let sum = document.getElementById("sum");
let total = document.getElementById("total");

let item1TotalValue = 22000;
let item2TotalValue = 42000;
let totalValue = parseInt(item1TotalValue) + parseInt(item2TotalValue);

function changeItemTotal(value, amount){
    if(value == 22000){
        item1TotalValue = value * amount;
    }
    else{
        item2TotalValue = value * amount;
    }
    recalculateTotalValue();
}

function printTotals(){
    sum.innerHTML = "Deltotal: " + totalValue + " SEK"; 
    total.innerHTML = "Total: " + totalValue + " SEK"; 
}

function recalculateTotalValue(){
    totalValue = parseInt(item1TotalValue) + parseInt(item2TotalValue);
    printTotals();
}

function removeItemFromBasket(item, num){
    if(num==1){
        totalValue -= parseInt(item1TotalValue);
        item1TotalValue = 0;
    }
    else{
        totalValue -= parseInt(item2TotalValue);
        item2TotalValue = 0;
    }
    printTotals();
    item.parentElement.parentElement.remove();
}