// Array of car names ///
     const car = [
     "Solo Hoverpod", 
     "Smart Car",
     "Mazda RX-8",
     "Toyota Camry",
     "Honda CR-V",
     "Chevrolet Suburban",
     "Mercedes-Benz Sprinter",
     "Ford Transit",
     "Toyota HiAce"
    ];

// Other arrays///
   const pricePerDay = [50, 40, 70, 55, 60, 85, 100, 90, 80]; // Prices in NZD
   const insuranceRates = [10, 8, 12, 9, 10, 15, 20, 18, 17]; // Insurance per day
   const lateFeeRates = [20, 15, 25, 18, 20, 30, 35, 32, 30]; // Late return penalty per day
   const discountOffers = ["SUMMER10", "EARLYBIRD15", "FAMILY20", "WEEKLY5"]; // Discount codes

/*** Main function to get user input and display rental summary.*/
function getUserInput() {
    const userName = document.getElementById("user_name").value;
    const carChoice = document.getElementById("car-choice").value;
    const rentalDays = parseInt(document.getElementById("rental_days").value); 
    const output = document.getElementById("output");

// Validate that all fields are filled in 
if (!userName || !carChoice || isNaN(rentalDays)) {
   alert("please fill out all fields.");
   return; 
}

