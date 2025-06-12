// Variables
let insuranceCost = 0;
let discountCode = "";
let totalCost = 0;
let pricePerDay = 0;
let lateFees = 0;
let carChoice = "";
let rentalDays = 0;
let discountAmount = 0;
let insuranceOption = "";
let discountOption = "";
let userName;
let userAge;

// Arrays
const cars = ["Solo EV", "Smart Fortwo", "Mazda RX-8", "Toyota Camry", "Honda CR-V",
    "Chevrolet Suburban", "Mercedes-Benz Sprinter", "Ford Transit", "Toyota HiAce"
];

const prices = [50, 40, 70, 55, 60, 80, 85, 90, 80]; // Prices in NZD

// Function to get user input and validate form fields
function getUserInfo() {
    userName = document.getElementById("i_userName").value;
    userAge = document.getElementById("i_userAge").value;
    carChoice = document.getElementById("i_carChoice").value;
    rentalDays = document.getElementById("i_rentaldays").value;

    let nameError = document.getElementById("userNameError");
    let ageError = document.getElementById("userAgeError");
    let carError = document.getElementById("carChoiceError");
    let daysError = document.getElementById("rentalDaysError");

    // Clear previous error messages
    nameError.textContent = "";
    ageError.textContent = "";
    carError.textContent = "";
    daysError.textContent = "";

    // Validation checks
    if (!userName || !isNaN(userName)) {
        nameError.textContent = "Please enter a valid name.";
        return;
    }

    if (!userAge || userAge < 18 || userAge > 65) {
        ageError.textContent = "Sorry, you must be between 18-65 to rent a car.";
        return;
    }

    if (!carChoice) {
        carError.textContent = "Please select a car.";
        return;
    }

    if (!rentalDays || rentalDays < 1 || rentalDays > 90) {
        daysError.textContent = "Sorry, you can only rent a car for 1 to 90 days.";
        return;
    }
    
   

}