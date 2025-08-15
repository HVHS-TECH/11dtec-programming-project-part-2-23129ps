// Written by Priya Silwal
// Year 11 JavaScript Project
// Term Two

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
let selectedCar = null;

// Discount codes
const discountOffers = ["SUMMER", "EARLYBIRD", "WEEKLY10"];

// Car data array
const carData = [
  { name: "Solo EV", insuranceRate: 10, pricePerDay: 50, lateFeeRate: 20 },
  { name: "Smart Fortwo", insuranceRate: 20, pricePerDay: 40, lateFeeRate: 15 },
  { name: "Mazda RX-8", insuranceRate: 30, pricePerDay: 70, lateFeeRate: 25 },
  { name: "Toyota Camry", insuranceRate: 40, pricePerDay: 55, lateFeeRate: 18 },
  { name: "Honda CR-V", insuranceRate: 50, pricePerDay: 60, lateFeeRate: 20 },
  { name: "Chevrolet Suburban", insuranceRate: 60, pricePerDay: 80, lateFeeRate: 30 },
  { name: "Mercedes-Benz Sprinter", insuranceRate: 70, pricePerDay: 85, lateFeeRate: 35 },
  { name: "Ford Transit", insuranceRate: 80, pricePerDay: 90, lateFeeRate: 32 },
  { name: "Toyota HiAce", insuranceRate: 90, pricePerDay: 80, lateFeeRate: 30 }
];

// Main function
function getUserInfo() {
  // Get input values
  userName = document.getElementById("i_userName").value;
  userAge = parseInt(document.getElementById("i_userAge").value);
  carChoice = document.getElementById("i_carChoice").value;
  rentalDays = parseInt(document.getElementById("i_rentalDays").value);
  discountCode = document.getElementById("i_discountCode").value;

  // Error elements
  let nameError = document.getElementById("userNameError");
  let ageError = document.getElementById("userAgeError");
  let carError = document.getElementById("carChoiceError");
  let daysError = document.getElementById("rentalDaysError");
  let discountCodeError = document.getElementById("discountCodeError");

  // Clear previous errors
  nameError.textContent = "";
  ageError.textContent = "";
  carError.textContent = "";
  daysError.textContent = "";
  discountCodeError.textContent = "";

  // Validation
  if (!userName || !isNaN(userName) || !/[A-Z]/.test(userName)) {
    nameError.textContent = "Please enter a valid name.";
    return;
  }
  if (!userAge || userAge < 18 || userAge > 65 || userAge % 1 !== 0) {
    ageError.textContent = "Please enter a whole number age between 18–65.";
    return;
  }
  if (!carChoice) {
    carError.textContent = "Please select a car.";
    return;
  }
  if (!rentalDays || rentalDays < 1 || rentalDays > 90 || rentalDays % 1 !== 0) {
    daysError.textContent = "Rental days must be a whole number between 1–90.";
    return;
  }
  if (discountCode && !discountOffers.includes(discountCode)) {
    discountCodeError.textContent = "Invalid discount code.";
    return;
  }

  // Find selected car
  for (let i = 0; i < carData.length; i++) {
  if (carData[i].name === carChoice) {
    selectedCar = carData[i];
    break;
  }
}
  if (!selectedCar) {
    carError.textContent = "Selected car not found.";
    return;
  }
 
  // Alert for high cost cars
  if (selectedCar.pricePerDay > 60 || selectedCar.insuranceRate > 50) {
  alert("High-cost vehicle selected.");
  }

  // Assign rates
  pricePerDay = selectedCar.pricePerDay;
  insuranceCost = selectedCar.insuranceRate;
  lateFees = selectedCar.lateFeeRate;

  // Calculate total
  totalCost = (pricePerDay * rentalDays) + insuranceCost;

  // Apply discount
  for (let i = 0; i < discountOffers.length; i++) {
  if (discountCode === discountOffers[i]) {
    discountAmount = 0.1 * totalCost;
    totalCost -= discountAmount;
    break;
  }
}

  // Display summary
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
