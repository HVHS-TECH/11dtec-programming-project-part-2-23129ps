// Part 2 Project
// Created by Priya Silwal
// Term 2

// Variables
let insuranceCost = 0;
let discountCode = "";
let totalCost = 0;
let pricePerDay = 0;
let lateFees = 0;
let carChoice = "";
let rentalDays = 0;
let carIndex;
let discountAmount = 0;
let insuranceOption= "";
let discountOption ="";
let userName;
let userAge;

// Arrays
const cars = ["Solo EV", "Smart Fortwo", "Mazda RX-8", "Toyota Camry", "Honda CR-V",
    "Chevrolet Suburban", "Mercedes-Benz Sprinter", "Ford Transit", "Toyota HiAce"
];

const prices = [50, 40, 70, 55, 60, 85, 100, 90, 80]; // Prices in NZD
const insuranceRates = [10, 8, 12, 9, 10, 15, 20, 18, 17]; // Insurance per day
const lateFeeRates = [20, 15, 25, 18, 20, 30, 35, 32, 30]; // Late return penalty per day
const discountOffers = ["SUMMER", "EARLYBIRD", "WEEKLY10"]; // Discount codes

// Function to redirect pages
function redirectToUserName() {
    window.location.href = "user_name.html";
}

function redirectToUserAge() {
    userName = document.getElementById("i_userName").value;
    localStorage.setItem("userName", userName);

    errorElement = document.getElementById("userNameError");

    errorElement.textContent = ""; // Clear previous error message

    if (!userName) {
        errorElement.textContent = "Please fill out this required field.";
        return;
    } else if (!isNaN(userName)) {
        errorElement.textContent = "Please enter a valid name.";
        return;
    } else {
        window.location.href = "user_age.html";
    }
}

function redirectToCarChoice() {
    userAge = document.getElementById("i_userAge").value;
    localStorage.setItem("userAge", userAge);
    errorElement = document.getElementById("userAgeError");

    errorElement.textContent = ""; // Clear previous error message

    if (!userAge) {
        errorElement.textContent = "Please fill out this required field.";
        return;
    } else if (userAge < 18 || userAge > 65) {
        errorElement.textContent = "Sorry, you need to be aged between 18-65 to rent a car.";
        return;
    } else {
        window.location.href = "car_choice.html";
    }
}
function redirectToDays() {
    carChoice = document.getElementById("i_carChoice").value;
    carIndex = cars.indexOf(carChoice);
    localStorage.setItem("carChoice", carChoice);
    errorElement = document.getElementById("carError");

    if (!carChoice) {
        errorElement.textContent = "Please fill out this required field.";
        return;
    }
    window.location.href = "days.html";
}

function redirectToInsurance() {
    rentalDays = document.getElementById("i_rentaldays").value;
    localStorage.setItem("rentalDays", rentalDays);
    errorElement = document.getElementById("daysError");

    errorElement.textContent = ""; // Clear previous error message

    if (rentalDays < 1 || rentalDays > 90) {
        errorElement.textContent = "Sorry, you can only rent a car for 1 to 90 days.";
        return;
    }
    else if (!rentalDays){
        errorElement.textContent = "Please fill out this required field.";
        return;
    }
    window.location.href = "insurance.html";
}

function redirectToDiscount() {
    insuranceOption = document.getElementById("i_insurance").value;
    errorElement = document.getElementById("insuranceError");
    errorElement.textContent = "";
    carIndex = localStorage.getItem("carIndex");
    rentalDays = localStorage.getItem("rentalDays");
    if (insuranceOption == "Yes") {
        insuranceCost = insuranceRates[carIndex] * rentalDays;
    }
    else if (!insuranceOption){
        errorElement.textContent = "Please fill out this required field.";
        return;
    }
    else {
        insuranceCost = 0;
    }
    localStorage.setItem("insuranceCost", insuranceCost);
    window.location.href = "discounts.html";
}

function redirectToDiscountCode() {
    discountOption = document.getElementById("i_discount").value;
    errorElement = document.getElementById("discountError");
      errorElement.textContent = "";

    if (discountOption === "Yes"){
         window.location.href = "discount_code.html";
    }
    else if (!discountOption){
      errorElement.textContent = "Please fill out this required field.";
    }
    else{

         window.location.href = "summary.html";
    }
}

function redirectToSummary() {
    errorElement = document.getElementById("discountCodeError"); 
    discountCode = document.getElementById("i_discountCode").value.trim();

    // Calculate total cost with discount if applicable
    totalCost = pricePerDay * rentalDays + insuranceCost;

    if (discountOffers.includes(discountCode)) {
        discountAmount = 0.1 * totalCost;
        totalCost = totalCost - discountAmount;
    }
    else {
        errorElement.textContent = "Sorry, you have entered a wrong discount code.";
        return;
    }
    window.location.href = "summary.html";
}