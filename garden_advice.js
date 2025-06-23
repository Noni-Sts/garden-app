// Prompt the user to choose a season, then convert input to lowercase
/*let season = prompt(
  "Please choose a season (spring, summer, autumn, winter):"
).toLowerCase();
console.log("You've chosen " + season + "!");*/

//refactored reusable version of season prompt:
function getSeason() {
  let season = prompt(
    "Please choose a season (spring, summer, autumn, winter):"
  ).toLowerCase();
  console.log("You've chosen " + season + "!");
  return season;
}

let season = getSeason();

// Prompt the user to choose a plant type, then convert input to lowercase
/*let plantType = prompt(
    "Please choose a plant type (flower, vegetable):"
  ).toLowerCase();
  console.log("You've chosen " + plantType + "!");*/

//refactored reusable version of plantType prompt:
function getPlantType() {
  // capital "P" for standard naming style (camelCase)
  let plantType = prompt(
    "Please choose a plant type (flower, vegetable):"
  ).toLowerCase();
  console.log("You've chosen " + plantType + "!");
  return plantType;
}

let plantType = getPlantType();

/*let advice = "";

// Determine advice based on the season - based on user input
if (season === "summer") {
  advice += "Water your plants regularly and provide some shade.\n";
} else if (season === "winter") {
  advice += "Protect your plants from frost with covers.\n";
} else {
  advice += "No advice for this season.\n";
}

// Determine advice based on the plant type - based on user input
if (plantType === "flower") {
  advice += "Use fertiliser to encourage blooms.";
} else if (plantType === "vegetable") {
  advice += "Keep an eye out for pests!";
} else {
  advice += "No advice for this type of plant.";
}*/

// Refactored into a reusable advice function:
function getAdvice(season, plantType) {
  let advice = "";

  // Season advice
  if (season === "summer") {
    advice += "Water your plants regularly and provide some shade.\n";
  } else if (season === "winter") {
    advice += "Protect your plants from frost with covers.\n";
  } else {
    advice += "No advice for this season.\n";
  }

  // Plant type advice
  if (plantType === "flower") {
    advice += "Use fertiliser to encourage blooms.";
  } else if (plantType === "vegetable") {
    advice += "Keep an eye out for pests!";
  } else {
    advice += "No advice for this type of plant.";
  }

  return advice;
}

// Calls and logs the final gardening advice to the user
let advice = getAdvice(season, plantType);
console.log(advice);

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
