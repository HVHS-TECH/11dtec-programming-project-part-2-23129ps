

// Variables
let insuranceCost = 0;
let discountCode = "";
let totalCost = 0;
let pricePerDay = 0;
let lateFees = 0;
let carChoice = "";
let rentalDays = 0;
let carFound = true;
let discountAmount = 0;
let insuranceOption= "";
let discountOption ="";
let userName;
let userAge;

// Arrays
const cars = ["Solo EV", "Smart Fortwo", "Mazda RX-8", "Toyota Camry", "Honda CR-V",
    "Chevrolet Suburban", "Mercedes-Benz Sprinter", "Ford Transit", "Toyota HiAce"
];

const prices = [50, 40, 70, 55, 60, 80, 85, 90, 80]; // Prices in NZD
const insuranceRates = [10, 11, 12, 13, 14, 15, 20, 21, 27]; // Insurance per day
const lateFeeRates = [20, 21, 25, 27, 28, 30, 35, 36, 37]; // Late return penalty per day
const discountOffers = ["SUMMER", "EARLYBIRD", "WEEKLY10"]; // Discount codes

// Function to redirect pages
function redirectToGetUserInfo() {
    window.location.href = "user_name.html";

    userName = document.getElementById("i_userName").value;

    localStorage.setItem("userName", userName);

    errorElement = document.getElementById("userInfoError");

    errorElement.textContent = ""; // Clear previous error message

    if (!userName) {
        errorElement.textContent = "Please fill out this required field.";
        return;
    } else if (!isNaN(userName)) {
        errorElement.textContent = "Please enter a valid name.";
        return;
    }
    
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
    }
carChoice = document.getElementById("i_carChoice").value;
    errorElement = document.getElementById("carError");

    if (!carChoice) {
        errorElement.textContent = "Please fill out this required field.";
        return;
    }
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
}


