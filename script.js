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

// Arrays
const cars = ["Solo Hoverpod", "Smart Fortwo", "Mazda RX-8", "Toyota Camry", "Honda CR-V",
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
    const userName = document.getElementById("i_userName").value;
    const errorElement = document.getElementById("userNameError");

    errorElement.textContent = ""; // Clear previous error message

    if (!userName) {
        errorElement.textContent = "Please fill out this required field.";
        return;
    } else if (!isNaN(userName)) {
        errorElement.textContent = "Please enter a valid name.";
        return;
    } else {
        localStorage.setItem("username", userName);
        window.location.href = "user_age.html";
    }
}

function redirectToCarChoice() {
    const userAge = document.getElementById("i_userAge").value;
    const errorElement = document.getElementById("userAgeError");

    errorElement.textContent = ""; // Clear previous error message

    if (!userAge) {
        errorElement.textContent = "Please fill out this required field.";
        return;
    } else if (userAge < 18 || userAge > 65) {
        errorElement.textContent = "Sorry, you need to be aged between 18-65 to rent a car.";
        return;
    } else {
        localStorage.setItem("userAge", userAge);
        window.location.href = "car_choice.html";
    }
}

function redirectToDays() {
    carChoice = document.getElementById("i_carChoice").value;
    carIndex = cars.indexOf(carChoice);
    const errorElement = document.getElementById("carError");

    if (carIndex === -1) {
        errorElement.textContent = "Please fill out this required field.";
        return;
    }

    localStorage.setItem("carChoice", carChoice);
    localStorage.setItem("carIndex", carIndex);
    window.location.href = "days.html";
}

function redirectToInsurance() {
    rentalDays = document.getElementById("i_rentaldays").value;
    const errorElement = document.getElementById("daysError");

    errorElement.textContent = ""; // Clear previous error message

    if (!rentalDays || rentalDays < 1 || rentalDays > 90) {
        errorElement.textContent = "Sorry, you can only rent a car for 1 to 90 days.";
        return;
    }

    localStorage.setItem("rentalDays", rentalDays);
    window.location.href = "insurance.html";
}

function redirectToDiscount() {
    const insuranceOption = document.getElementById("i_insurance").value;
    carIndex = localStorage.getItem("carIndex") || -1;
    rentalDays = localStorage.getItem("rentalDays") || 0;

    if (insuranceOption === "Yes") {
        insuranceCost = insuranceRates[carIndex] * rentalDays;
        localStorage.setItem("insuranceCost", insuranceCost);
        alert(`Insurance Cost: $${insuranceCost} NZD`);
    }

    window.location.href = "discounts.html";
}

function redirectToDiscountCode() {
    const discountOption = document.getElementById("i_insurance").value;
    if (discountCode === "Yes"){
         window.location.href = "discount_code.html";
           discountCode = document.getElementById("i_discountCode").value;
    localStorage.setItem("discountCode", discountCode);
    }
    else{
         window.location.href = "summary.html";
    }
}

function redirectToSummary() {
    lateFees = document.getElementById("i_lateFees").value;
    insuranceCost = localStorage.getItem("insuranceCost");
    carIndex = localStorage.getItem("carIndex");
    rentalDays = localStorage.getItem("rentalDays");
    pricePerDay = prices[carIndex];

    totalCost = (pricePerDay * rentalDays) + insuranceCost + lateFees;

    localStorage.setItem("lateFees", lateFees);
    localStorage.setItem("totalCost", totalCost);
    window.location.href = "summary.html";
}

// Display Summary on summary.html
document.addEventListener("DOMContentLoaded", function () {

    if (document.getElementById("summary")) {
        const username = localStorage.getItem("username") || "Not provided";
        const carChoice = localStorage.getItem("carChoice") || "No selection";
        const rentalDays = localStorage.getItem("rentalDays") || "0";
        const lateFees = localStorage.getItem("lateFees") || "0";
        const discountCode = localStorage.getItem("discountCode") || "No discount used";
        const insuranceCost = localStorage.getItem("insuranceCost") || "0";
        const totalCost = localStorage.getItem("totalCost") || "0";

        document.getElementById("summary").innerHTML = `
            <h2>Booking Summary</h2>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Car Chosen:</strong> ${carChoice}</p>
            <p><strong>Rental Days:</strong> ${rentalDays}</p>
            <p><strong>Late Fees:</strong> $${lateFees} NZD</p>
            <p><strong>Discount Code:</strong> ${discountCode}</p>
            <p><strong>Insurance Cost:</strong> $${insuranceCost} NZD</p>
            <p><strong>Total Cost:</strong> $${totalCost} NZD</p>
        `;
    }
});