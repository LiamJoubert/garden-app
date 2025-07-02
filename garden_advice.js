
let season = prompt("Enter the season (e.g., summer or winter):");
let plantType = prompt("Enter the plant type (e.g., flower or vegetable):");



/**
 * Object containing our seasons and plants advice. In place so we can add new advice easily
 * in future. 
 */
const adviceData = {
  seasons: {
    summer: "Water your plants regularly and provide some shade.\n",
    winter: "Protect your plants from frost with covers.\n",
    autumn: "Clear fallen leaves and prepare soil for planting.\n",
    spring: "Start planting and fertilising as the weather warms up.\n"
  },
  plants: {
    tomatoes: "Stake your tomatoes and ensure they get full sun.\n",
    carrots: "Thin seedlings to avoid overcrowding and ensure straight roots.\n",
    potatoes: "Mound soil around stems as they grow to protect tubers.\n",
    cabbages: "Watch for cabbage worms and space them well for airflow.\n",
    radishes: "Harvest early for best flavor and replant every few weeks.\n",
    avocadoes: "Ensure good drainage and protect young trees from wind.\n"
  }
};


// Variable to hold gardening advice
let advice = "";

/**
 * returns advice based on the inputted season
 */
// Determine advice based on the season

/**
 * Have refactored again based on our new advice object. 
 * Functions seasonAdvice and plantAdvice return advice based on the 
 * users input. 
 */
function seasonAdvice(season) {
  const key = season.toLowerCase();
  return adviceData.seasons[key] || "No seasonal advice available for this time of year.\n";
}

function plantAdvice(plantType) {
  const key = plantType.toLowerCase();
  return adviceData.plants[key] || "No advice for this type of plant.\n";
}


// Log the generated advice to the console
advice += seasonAdvice(season);
advice += plantAdvice(plantType);
console.log(advice);

