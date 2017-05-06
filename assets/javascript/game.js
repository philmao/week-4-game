
var crystalGame = {
	wins: 0,
	losses: 0,
	randomNumber: 0,
	minRN: 19,
	maxRN: 120,
	crystalValues: [0, 0, 0, 0],
	crystalImages: ["assets/images/a.jpg", "assets/images/b.jpg", "assets/images/c.jpg", "assets/images/d.jpg" ],
	minCrystalRN: 1,
	maxCrystalRN: 12,
	displayRN: 0,

	getRandomNumber: function() {
		crystalGame.randomNumber = Math.floor(Math.random() * (crystalGame.maxRN - crystalGame.minRN)) + crystalGame.minRN;
		console.log("randomNumber: ", crystalGame.randomNumber);
	},
	generateCrystalArray: function() {

		var crystalValue;

		for(var i = 0; i < crystalGame.crystalValues.length; i++) {
			crystalValue = Math.floor(Math.random() * (crystalGame.maxCrystalRN - crystalGame.minCrystalRN)) + crystalGame.minCrystalRN;
			console.log("crystalValue[" + i + "]: ", crystalValue);

			/* regenerate if value has been used already */
			while(!(crystalGame.crystalValues.indexOf(crystalValue) < 0)) {
				crystalValue = Math.floor(Math.random() * (crystalGame.maxCrystalRN - crystalGame.minCrystalRN)) + crystalGame.minCrystalRN;
				console.log("duplicate value, regen crystalValue", crystalValue);
			}
			crystalGame.crystalValues[i] = crystalValue;

		}
		console.log("crystalValue: ", crystalGame.crystalValues);

	},
	updateDisplay: function () {
    $("#randomNumber").html(crystalGame.randomNumber);
		$("#totalScore").html(crystalGame.displayRN);
		$("#winsScore").html("Wins: " + crystalGame.wins);
		$("#lossScore").html("Losses: " + crystalGame.losses);
	}

}

crystalGame.getRandomNumber();
crystalGame.generateCrystalArray();
crystalGame.updateDisplay();

// Note: Couldn't to get this display
// for (var i = 0; i < crystalGame.crystalValues.length; i++) {

//     var imageCrystal = $("<img>");
//     imageCrystal.addClass("crystal-image");
//     imageCrystal.attr("src", crystalGame.crystalImages[i]);
//     imageCrystal.attr("data-crystalvalue", i);
//     $("#crystalRow").append(imageCrystal);
//     console.log(imageCrystal);

// }
function myRedFunction() {
  myFunction(0);
}
function myBlueFunction() {
  myFunction(1);
}
function myYellowFunction() {
  myFunction(2);
}
function myGreenFunction() {
  myFunction(3);
}
// $(".crystal-image").on("click", function() {
function myFunction(crystalValue) {
	// var crystalValue = ($(".crystal-images").attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
  console.log("crystalValue: ", crystalValue);

  crystalGame.displayRN += crystalGame.crystalValues[crystalValue];
	console.log("displayRN: ", crystalGame.displayRN);

	if(crystalGame.displayRN === crystalGame.randomNumber) {

		crystalGame.wins++;
		$("#scoreComment").html("You win! The number was " + crystalGame.randomNumber + ". Try again!");

		crystalGame.getRandomNumber();
		crystalGame.generateCrystalArray();
		crystalGame.displayRN = 0;
	}
	else if (crystalGame.displayRN > crystalGame.randomNumber) {

		crystalGame.losses++;
		$("#scoreComment").html("You lose! The number was " + crystalGame.randomNumber + ". Try again!");

		crystalGame.getRandomNumber();
		crystalGame.generateCrystalArray();
		crystalGame.displayRN = 0;
	}
  crystalGame.updateDisplay();

}
// )
