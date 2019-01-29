// Create an array of words
//
//
const words = ['all-ears', 'pigs-fly', 'cats-and-dogs',];
// Choose word randomly
	let randNum = Math.floor(Math.random() * words.length);
	let rightWord = [];
	let wrongWord =[];
	let chosenWord = words[randNum];
	let underScore = [];

//
let docUnderScore = document.getElementsbyClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

//
// Create underscores based on length of word
console.log(chosenWord);
//
let generateUnderscore = () => {
	for(let i = 0; i < chosenWord.length; i++) {
		underScore.push('_');
	}
	return underScore;
}

// Get users guess
document.addEventListener('keypress', (event) => {
	let keyWord = String.fromCharCode(event.keyCode);
//if users guess is right
	if(chosenWord.indexOf(keyWord) > -1) {
		// add to right words array
		rightWord.push(keyWord);
		// replace underscore with right letter
		underScore[chosenWord.indexOf(keyWord)] = keyWord;
		docUnderScore[0].innerHTML = underScore.join(' ');
		docRightGuess[0].innerHTML = rightWord;
		//
		if(underScore.join(' ') == chosenWord) {
			alert('you win');
		}
	}
	else {
	wrongWord.push(keyWord);
	docWrongGuess[0].innerHTMl = wrongWord;
}
});
// Check if guess is right
// If right push to right array
// If wrong push to wrong array
