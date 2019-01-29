// Create an array of words
const words = ['fat', 'lazy', 'hungry',];
// Choose word randomly
	let randNum = Math.floor(Math.random() * words.length);
	let rightWord = [];
	let wrongWord =[];
	let chosenWord = words[randNum];
	console.log(chosenWord);

//Testing
let underScore = [];
console.log(chosenWord);

// Create underscores based on length of word
let generateUnderscore = () => {
	for(let i = 0; i < chosenWord.length; i++) {
		underScore.push('_');
	}
	return underScore;
}

console.log(generateUnderscore());
// Get users guess
document.addEventListener('keypress', (event) => {
	let keyWord = String.fromCharCode(event.keyCode);
//if users guess is right
	console.log(chosenWord.indexOf(chosenWord));
	if(chosenWord.indexOf(keyWord) > -1) {
		// add to right words array
		rightWord.push(keyWord);
		// replace underscore with right letter
		underScore[(chosenWord.indexOf(keyWord)] = keyWord;
		console.log(rightWord);
	}else
	wrongWord.push(keyWord);
	console.log(wrongWord);
});
// Check if guess is right
// If right push to right array
// If wrong push to wrong array
