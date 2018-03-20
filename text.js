
function getRandom(min, max) {
	return Math.floor(Math.random() * (100-1) +1);
}


var guessBtn = document.getElementById('guess');
var hint = document.getElementById('hint-space');
var lastGuess = document.querySelector('.last-guess');

guessBtn.addEventListener('click', function () {
	var randomNumber = getRandom();
	var userInput = parseInt(document.getElementById("user-input").value);

	if(userInput === randomNumber){
		hint.innerText = 'Boom!'
	} else if (userInput > randomNumber) {
		hint.innerText = "Too high.";
	} else if (userInput < randomNumber) {
		hint.innerText = "Too low.";
	}

lastGuess.innerText(userInput);
//console.log('hit', randomNumber, userInput)
		
		}


	


	


//get userInput to show up in the spot 25 is in now.
//clear the userInput on click of the clear button. 


// git add .
// git commit -m "hi"
// git push origin master
		
//var userGuess = document.getElementById("last-guess");
//userGuess.innerText = (userInput);