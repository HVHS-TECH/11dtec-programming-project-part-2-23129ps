 let insuranceCost = 0;
 let discount = 0;
 let totalCost = 0;
 let pricePerDay = 0;
 // Array of car names
const cars = [ "0", 
    "Solo Hoverpod", "Smart Car", "Mazda RX-8", "Toyota Camry", "Honda CR-V",
    "Chevrolet Suburban", "Mercedes-Benz Sprinter", "Ford Transit", "Toyota HiAce"
];

// Other arrays
const prices = [0, 50, 40, 70, 55, 60, 85, 100, 90, 80]; // Prices in NZD
const insuranceRates = [0, 10, 8, 12, 9, 10, 15, 20, 18, 17]; // Insurance per day
const lateFeeRates = [0, 20, 15, 25, 18, 20, 30, 35, 32, 30]; // Late return penalty per day
const discountOffers = ["SUMMER10", "EARLYBIRD15", "FAMILY20", "WEEKLY5"]; // Discount codes

/*** Main function to get user input and display rental summary. */
function getUserInput() {
    const userName = document.getElementById("i_userName").value;
    const carChoice = document.getElementById("i_carChoice").value;
    const rentalDays = parseInt(document.getElementById("i_rentalDays").value);
    const insuranceOption = document.getElementById("i_insurance").value;
    const discountCode = document.getElementById("discountCode").value;
    const output = document.getElementById("output");

    // Validate fields
    if (!userName || !carChoice || isNaN(rentalDays)) {
        alert("Please fill out all the required fields.");
        return;
    }

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
  }
  else {
    totalCost = pricePerDay * rentalDays + insuranceCost;
  }

    console.log("User Name:", userName);
console.log("Rental Days:", rentalDays);
console.log("insruance cost:", insuranceCost);
console.log("total", totalCost);

 
}