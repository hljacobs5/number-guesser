
function getRandom(min, max) {
	return Math.floor(Math.random() * (100-1) +1);
}


var guessBtn = document.getElementById('guess')
var hint = document.getElementById('hint-space');

guessBtn.addEventListener('click', function(){
	var randomNumber = getRandom()
	var userInput = parseInt(document.getElementById("user-input").value);

	if(userInput === randomNumber){
		hint.innerText = 'Boom!'
	} else if (userInput > randomNumber) {
		hint.innerText = "Too high.";
	} else if (userInput < randomNumber) {
		hint.innerText = "Too low.";
	}

	console.log('hit', randomNumber, userInput)
});

//get userInput to show up in the spot 25 is in now.
//clear the userInput on click of the clear button. 
