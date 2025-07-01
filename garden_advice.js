
let season = prompt("Enter the season (e.g., summer or winter):");
let plantType = prompt("Enter the plant type (e.g., flower or vegetable):");

// Variable to hold gardening advice
let advice = "";

/**
 * returns advice based on the inputted season
 */
// Determine advice based on the season
function seasonAdvice(season) {
  switch(season.toLowerCase()){
    case "summer":
      return "Water your plants regularly and provide some shade.\n";
    case "winter":
      return "Protect your plants from frost with covers.\n";
    default: 
      return "No Seasonal advice available for this time of year.\n";
  }
}

// Returns advice based on the plant type
function plantAdvice(plantType){
  switch(plantType.toLowerCase()){
    case "flower":
      return "Use fertiliser to encourage blooms.\n";
    case "vegetable":
      return "Keep an eye out for pests!\n";
    default:
      return "No advice for this type of plant.\n";
  }
}

// Log the generated advice to the console
advice += seasonAdvice(season);
advice += plantAdvice(plantType);
console.log(advice);

