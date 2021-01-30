//  counting tickets
function ticketCountNumber(isIncrease, ticketName) {
    const ticketInput = document.getElementById(ticketName + "-class-ticket");
    const ticketNumber = parseInt(ticketInput.value);
    let ticketCount = ticketNumber;
    if (isIncrease == true) {
        ticketCount = ticketNumber + 1;
    }
    if (isIncrease == false && ticketNumber > 0) {
        ticketCount = ticketNumber - 1;
    }
    ticketInput.value = ticketCount;
    priceCalculation();
}


// total price calculation 
function priceCalculation() {
    const firstClassNumber = document.getElementById("first-class-ticket");
    const firstClassTicket = parseFloat(firstClassNumber.value);
    const firstClassPrice = firstClassTicket * 150;
    const economyClassNumber = document.getElementById("economy-class-ticket");
    const economyClassTicket = parseFloat(economyClassNumber.value);
    const economyClassPrice = economyClassTicket * 100;
    const subTotalPrice = firstClassPrice + economyClassPrice;
    const vat = subTotalPrice * 0.1;
    const totalPrice = subTotalPrice + vat;
    // calculation
    document.getElementById("vat").innerText = vat;
    document.getElementById("subtotal-price").innerText = subTotalPrice;
    document.getElementById("total-price").innerText = totalPrice;
}

// Booking button
document.getElementById("book-now").addEventListener('click', function() {
    // .first class
    const firstClassNumber = document.getElementById("first-class-ticket");
    const firstClassTicket = parseFloat(firstClassNumber.value);
    document.getElementById("first-quantity").innerText = firstClassTicket;
    //. economy class
    const economyClassNumber = document.getElementById("economy-class-ticket");
    const economyClassTicket = parseFloat(economyClassNumber.value);
    document.getElementById("economy-quantity").innerText = economyClassTicket;

    // . first class price
    const firstClassPrice = firstClassTicket * 150;
    document.getElementById("first-price").innerText = "$ " + firstClassPrice;
    // . economy class price
    const economyClassPrice = economyClassTicket * 100;
    document.getElementById("economy-price").innerText = "$ " + economyClassPrice;
    const subTotalPrice = firstClassPrice + economyClassPrice;
    const vat = subTotalPrice * 0.1;
    document.getElementById("vat-amount").innerText = "$ " + vat;
    const totalPrice = subTotalPrice + vat;
    document.getElementById("total-price-ammout").innerText = "$ " + totalPrice;
    //. visibilty
    document.getElementById("popup").style.visibility = "visible";
})


// hide popup
document.getElementById("close").addEventListener('click', function() {
    document.getElementById("popup").style.visibility = "hidden";
})