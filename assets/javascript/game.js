//Global Variables
//********************
var crystal = {green:{name: 	"green", value: 0},
			   yellow:{name: 	"yellow", value: 0},
			   red:{name: 		"red", value: 0},
			   blue:{name: 		"blue", value: 0}};
	

var currentScore  = 0;
var targetScore   = 0;
var wins		  = 0;
var loss		  = 0;

//Functions
//********************
var randomGen = function(min, max) {
 return Math.floor(Math.random()* (120 - 19 + 1)) + 19;
}

var randomGen2 = function(min, max) {
 return Math.floor(Math.random()* (12 - 1 + 1)) +1;
}
	//starts and resets game
var start = function() {
	//reset score
	 currentScore = 0;

	//set a new target
	targetScore = randomGen(19, 120);

	// crystal value (btw 1 & 12)
	crystal.green.value 	= randomGen2(1, 12);
	crystal.yellow.value 	= randomGen2(1, 12);
	crystal.red.value 		= randomGen2(1, 12);
	crystal.blue.value 		= randomGen2(1, 12);

	//Manipulate HTML
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);
	$("#wins").html(wins);
	$("#losses").html(loss);


	// console test
	console.log("******************************************");
	console.log("Target Score: " + targetScore);
	console.log("Green " + crystal.green.value + " | Yellow: " + crystal.yellow.value + " | Red: " + crystal.red.value + " | Blue: " + crystal.blue.value);
	console.log("******************************************");


}

// starts game all over again resetting win loss count
var reset = function () {

	currentScore  = 0;
    wins		  = 0;
	loss		  = 0;


	//set a new target
	targetScore = randomGen(19, 120);

	// crystal value (btw 1 & 12)
	crystal.green.value 	= randomGen2(1, 12);
	crystal.yellow.value 	= randomGen2(1, 12);
	crystal.red.value 		= randomGen2(1, 12);
	crystal.blue.value 		= randomGen2(1, 12);

	//Manipulate HTML
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);
	$("#wins").html(wins);
	$("#losses").html(loss);


}

var buttonValue = function(crystal) {
	// body...
	//change current score
	currentScore = currentScore + crystal.value;


	

	//reflect change in the HTML
$("#yourScore").html(currentScore);

//Check win function called
	checkWin();

	console.log("your score " + currentScore);
}


var checkWin = function () {
	// body...
	if (currentScore === targetScore) {		
		console.log("You Win");
		alert("You Win");
		wins++;
		
	 $("#wins").html(wins);
	 newGame();
	 start();
	
	} 
	else if (currentScore > targetScore ) {
	 alert("You Lost");
	 console.log("You losses");
	 loss++; 
	 $("#losses").html(loss);
	 newGame();
	 start();
	}

}

var newGame = function() {
	// body...
	if (wins > 5 || loss > 5){
		//confirm();
		confirm("Would you like to start over?")? reset() : start();
	}
}

//Main process
//********************
start();

$("#green").on("click", function() {

	buttonValue(crystal.green); 
});

$("#yellow").click(function() {

	buttonValue(crystal.yellow);
});

$("#red").click(function() {

	buttonValue(crystal.red);
});

$("#blue").click(function() {

	buttonValue(crystal.blue);
});
