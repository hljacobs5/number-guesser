window.onload = getRandom();
var randomNumber;

function getRandom(min, max) {
	randomNumber = Math.floor(Math.random() * (100-1) +1);
	console.log("getRandom", randomNumber);
	return randomNumber;
}

var userInputField = document.getElementById('user-input');
var guessBtn = document.getElementById('guess');
var hint = document.getElementById('hint-space');
var lastGuess = document.querySelector('.last-guess');
var clearBtn = document.getElementById('clear');
var resetBtn = document.getElementById('reset');
guessBtn.addEventListener('click', function () {
	console.log('click', randomNumber);
	var userInput = parseInt(userInputField.value);
	if(userInput === randomNumber){
		hint.innerText = 'Boom!'
	} else if (userInput > 100) {
		hint.innerText = "Out of range, try again."
	} else if (userInput > randomNumber) {
		hint.innerText = "Too high.";
	} else if (userInput < randomNumber) {
		hint.innerText = "Too low.";
	}	

	lastGuess.innerText = userInput;
});

clearBtn.addEventListener('click', function () {
	console.log('cleared');
	var clearInput = document.getElementById('user-input');
	clearInput.value = "";
	clearBtn.disabled = true;
});

resetBtn.addEventListener('click', function() {
	getRandom();
	lastGuess.innerText = "";
	hint.innerText = "";
	var clearInput = document.getElementById('user-input');
	clearInput.value = "";
	resetBtn.disabled = true;

});		
		
userInputField.addEventListener('keydown', function() {
	console.log('typing');
	clearBtn.disabled = false;
});

userInputField.addEventListener('keydown', function() {
	console.log('typing');
	resetBtn.disabled = false;
});

	
/// resetBtn.addEventListener('click', function() {
// 	document.querySelector('#user-input').reset();
// });


	


//get userInput to show up in the spot 25 is in now.
//clear the userInput on click of the clear button. 


// git add .
// git commit -m "hi"
// git push origin master
		
//var userGuess = document.getElementById("last-guess");
//userGuess.innerText = (userInput);