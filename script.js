 // Part 2 Project//
 //Created by Priya Silwal//
 //Term 2///

 //Variables//
 let insuranceCost = 0;
 let discount = 0;
 let totalCost = 0;
 let pricePerDay = 0;
 let latefees =0;

//constant//
 
 // Array of car names
const cars = [ "0", 
    "Solo Hoverpod", "Smart Fortwo", "Mazda RX-8", "Toyota Camry", "Honda CR-V",
    "Chevrolet Suburban", "Mercedes-Benz Sprinter", "Ford Transit", "Toyota HiAce"
];

// Other arrays
const prices = [0, 50, 40, 70, 55, 60, 85, 100, 90, 80]; // Prices in NZD
const insuranceRates = [0, 10, 8, 12, 9, 10, 15, 20, 18, 17]; // Insurance per day
const lateFeeRates = [0, 20, 15, 25, 18, 20, 30, 35, 32, 30]; // Late return penalty per day
const discountOffers = ["SUMMER", "EARLYBIRD", "WEEKLY10"]; // Discount codes

/*** Function to redirect to username page */
function redirectToUserName() {
    window.location.href = "user_name.html"; // Redirect to user name page
}

/*** Function to redirect to user age page */
function redirectToUserAge() {
    const userName = document.getElementById("i_userName").value;
    const errorElement = document.getElementById("userNameError");

    errorElement.textContent = ""; // Clear previous error message

    if (!userName) {
        errorElement.textContent = "Please fill out this required field.";
        return;
    }
    else if (!isNaN(userName)) {
        errorElement.textContent = "Please enter a valid name.";
        return;
    }
    else {
        window.location.href = "user_age.html"; // Redirect to user age page
    }
}

/*** Function to redirect to car choice page */
function redirectToCarChoice() {
    const userAge = document.getElementById("i_userAge").value;
        const errorElement = document.getElementById("userAgeError");

    errorElement.textContent = ""; // Clear previous error message

    if (!userAge){
           errorElement.textContent = "Please fill out this required field.";
        return; 
    }
    else {
     window.location.href = "car_choice.html"; // Redirect to car choice page
    }
}

/*** Function to redirect to insurance page */
function redirectToInsurance() {
    window.location.href = "insurance.html"; // Redirect to car choice page
}

function redirectToDiscount() {
    window.location.href = "discounts.html"; // Redirect to car choice page
}

function redirectToSummary() {
    window.location.href = "summary.html"; // Redirect to car choice page
}

/*** Main function to get user input and display rental summary. */
function getUserInput() {
    const userName = document.getElementById("i_userName").value;
    const carChoice = document.getElementById("i_carChoice").value;
    const rentalDays = parseInt(document.getElementById("i_rentalDays").value);
    const insuranceOption = document.getElementById("i_insurance").value;
    const discountCode = document.getElementById("i_discountCode").value;
    const output = document.getElementById("output");

    // Validate fields
    if (!userName || !carChoice || isNaN(rentalDays)) {
        alert("Please fill out all the required fields.");
        return;
    }

    // Check for a valid username by preventing the user from entering numbers
     if (!isNaN(userName)) {
        alert("Please write a valid name.");
        return;
    }

      // Get the car index
    const carIndex = cars.indexOf(carChoice);

    if (insuranceOption === "Yes") {
    insuranceCost = insuranceRates[carIndex] * rentalDays;
}
   pricePerDay = prices[carIndex];

  if (discountOffers.includes(discountCode)) {
    totalCost = 0.9*(pricePerDay * rentalDays + insuranceCost);
    discount = 0.1* totalCost;
  }
  else {
    totalCost = pricePerDay * rentalDays + insuranceCost;
  }

  lateFees= lateFeeRates[carIndex];

    console.log("User Name:", userName);
console.log("Rental Days:", rentalDays);
console.log("insruance cost:", insuranceCost);
console.log("total", totalCost);

    // Display the summary
    output.innerHTML = `
        <h2>Rental Summary</h2>
        <p>Name: ${userName}</p>
        <p>Car: ${carChoice}</p>
        <p>Rental Days: ${rentalDays}</p>
        <p>Late fees (If the car isn't returned on time): ${lateFees} NZD</p>
        <p>Insurance Cost: ${insuranceCost} NZD</p>
        <p>Discount Offered: ${discount} NZD</p>
        <p><strong>Total Cost: ${totalCost} NZD</strong></p>
    `;

}