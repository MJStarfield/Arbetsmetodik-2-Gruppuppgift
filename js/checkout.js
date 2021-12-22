let postDeliveryButton = document.getElementById("postDeliveryButton");
let homeDeliveryButton = document.getElementById("homeDeliveryButton");
let standardDeliveryButton = document.getElementById("standardDeliveryButton");
let expressDeliveryButton = document.getElementById("expressDeliveryButton");
let shippingCost = document.getElementById("shippingcost");
let totalSum = document.getElementById("totalSum");
let totalCost = document.getElementById("totalCost");
let totalVAT = document.getElementById("totalVAT");
let basketItem1Quantity = document.getElementById("basketItem1Quantity");
let basketItem2Quantity = document.getElementById("basketItem2Quantity");

var currentTotalSum = totalSum.innerHTML;
var currentVAT = totalVAT.innerHTML;
var currentShippingCost = shippingCost.innerHTML;
var currentTotalCost = totalCost.innerHTML;
var currentDeliveryOption = 0;

let item1TotalValue = 22000;
let item2TotalValue = 42000;
let totalValue = parseInt(item1TotalValue) + parseInt(item2TotalValue);

calculateTotalCost();

function changeShippingCost(newShippingCost){
    currentShippingCost = newShippingCost;
    shippingCost.innerHTML = parseInt(currentShippingCost) + parseInt(currentDeliveryOption);
    calculateTotalCost();
}

function changeShippingOption(newShippingOption){
    currentDeliveryOption = newShippingOption;
    shippingCost.innerHTML = parseInt(currentShippingCost) + parseInt(currentDeliveryOption);
    calculateTotalCost();
}

function calculateTotalCost(){
    currentTotalCost = parseInt(currentTotalSum) + parseInt(currentShippingCost) + parseInt(currentDeliveryOption);
    totalCost.innerHTML = currentTotalCost;
}

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
    totalSum.innerHTML = parseInt(currentTotalSum); 
    totalVAT.innerHTML = parseInt(currentTotalSum * 0.25);
}

function recalculateTotalValue(){
    currentTotalSum = parseInt(item1TotalValue) + parseInt(item2TotalValue);
    calculateTotalCost();
    printTotals();
}