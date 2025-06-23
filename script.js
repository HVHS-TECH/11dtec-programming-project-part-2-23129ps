// Written by Priya Silwal
// Year 11 javascript project
// Term two

// Variables
let insuranceCost = 0;
let discountCode;
let totalCost = 0;
let pricePerDay = 0;
let lateFees = 0;
let carChoice = "";
let rentalDays = 0;
let discountAmount = 0;
let userName;
let userAge;
let carIndex = -1;


// Arrays
const cars = ["Solo EV", "Smart Fortwo", "Mazda RX-8", "Toyota Camry", "Honda CR-V",
"Chevrolet Suburban", "Mercedes-Benz Sprinter", "Ford Transit", "Toyota HiAce"
];
const insuranceRates = [10, 20, 30, 40, 50, 60, 70, 80,90];
const prices = [50, 40, 70, 55, 60, 80, 85, 90, 80]; // Prices in NZD
const lateFeeRates = [20, 15, 25, 18, 20, 30, 35, 32, 30]; // Late return penalty per day
const discountOffers = ["SUMMER", "EARLYBIRD", "WEEKLY10"]; // Discount codes


// Function to get user input, validate fields, and calculate total cost
function getUserInfo() {
userName = document.getElementById("i_userName").value;
userAge = document.getElementById("i_userAge").value;
carChoice = document.getElementById("i_carChoice").value;
rentalDays = document.getElementById("i_rentalDays").value;
discountCode = document.getElementById("i_discountCode").value;
let nameError = document.getElementById("userNameError");
let ageError = document.getElementById("userAgeError");
let carError = document.getElementById("carChoiceError");
let daysError = document.getElementById("rentalDaysError");
let discountCodeError = document.getElementById("discountCodeError");


// Clear previous error messages
nameError.textContent = "";
ageError.textContent = "";
carError.textContent = "";
daysError.textContent = "";
discountCodeError.textContent = "";


// Validation checks
if (!userName || !isNaN(userName)) {
nameError.textContent = "Please enter a valid name.";
return;
}
if (!userAge || userAge < 18 || userAge > 65) {
    ageError.textContent = "Please enter a valid age between 18-65.";
    return;
}
if (userAge % 1 !== 0) {
    ageError.textContent = "Age must be a whole number (no decimals) between 18-65.";
    return;
}
if (!carChoice) {
carError.textContent = "Please select a car.";
return;
}
if ( rentalDays < 1 || rentalDays > 90) {
daysError.textContent = "Sorry, you can only rent a car for 1 to 90 days.";
return;
}
if (rentalDays % 1 !== 0) {
    daysError.textContent = "Rental days must be a whole number between 1 and 90 (no decimals).";
    return;
}
if (!rentalDays) {
daysError.textContent = "Please fill this required field.";
return;
}
if ((discountCode == "") || (discountCode == null)){
discountAmount = 0;
}
else if (!discountOffers.includes(discountCode)){
discountCodeError.textContent = "Sorry, you have entered a wrong discount code.";
return;
}


// Find the index of the selected car in the array
carIndex = cars.indexOf(carChoice);

// Find the index of the selected car in the array
lateFees= lateFeeRates[carIndex];
if (carIndex !== -1) {
pricePerDay = prices[carIndex]; // Get the price from the `prices` array
insuranceCost = insuranceRates[carIndex];
}
totalCost = (pricePerDay * rentalDays) + insuranceCost; // Multiply by the number of rental days

totalCost = (pricePerDay * rentalDays) + insuranceCost; // Alter the totalcost if discount code is correct
if (discountOffers.includes(discountCode)) {
discountAmount = 0.1 * totalCost;
totalCost = totalCost - discountAmount;
} 

// Display the final rental summary and make the rental form disappear
document.getElementById("formSection").style.display = "none";
document.getElementById("summarySection").style.display = "block";
document.getElementById("summaryName").textContent = userName;
document.getElementById("summaryAge").textContent = userAge;
document.getElementById("summaryCar").textContent = carChoice;
document.getElementById("summaryDays").textContent = rentalDays;
document.getElementById("summaryInsurance").textContent = `$${insuranceCost}`;
document.getElementById("summaryDiscount").textContent = `$${discountAmount}`;
document.getElementById("summarylateFees").textContent = `$${lateFees}`;
document.getElementById("summaryTotalCost").textContent = `$${totalCost}`;
}