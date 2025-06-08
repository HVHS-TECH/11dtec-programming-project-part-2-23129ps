// Variables
let insuranceCost = 0;
let discountCode = "";
let totalCost = 0;
let pricePerDay = 0;
let lateFees = 0;
let carChoice = "";
let rentalDays = 0;
let carIndex;

// Arrays
const cars = ["Solo Hoverpod", "Smart Fortwo", "Mazda RX-8", "Toyota Camry", "Honda CR-V",
    "Chevrolet Suburban", "Mercedes-Benz Sprinter", "Ford Transit", "Toyota HiAce"
];

const prices = [50, 40, 70, 55, 60, 85, 100, 90, 80]; // Prices in NZD
const insuranceRates = [10, 8, 12, 9, 10, 15, 20, 18, 17]; // Insurance per day
const lateFeeRates = [20, 15, 25, 18, 20, 30, 35, 32, 30]; // Late return penalty per day
const discountOffers = ["SUMMER", "EARLYBIRD", "WEEKLY10"]; // Discount codes

function redirectToSummary() {
    lateFees = Number(document.getElementById("i_lateFees").value);
    insuranceCost = Number(localStorage.getItem("insuranceCost"));
    carIndex = Number(localStorage.getItem("carIndex"));
    rentalDays = Number(localStorage.getItem("rentalDays"));
    pricePerDay = prices[carIndex];

    discountCode = document.getElementById("i_discountCode").value.trim();

    if (discountOffers.includes(discountCode)) {
        const discountAmount = 0.1 * (pricePerDay * rentalDays + insuranceCost);
        totalCost = (pricePerDay * rentalDays + insuranceCost) - discountAmount;
    } else {
        totalCost = (pricePerDay * rentalDays + insuranceCost);
    }

    localStorage.setItem("discountCode", discountCode);
    localStorage.setItem("lateFees", lateFees);
    localStorage.setItem("totalCost", totalCost);

    alert(`Discount Code: ${discountCode}\nTotal Cost: $${totalCost} NZD`);
    window.location.href = "summary.html";
}