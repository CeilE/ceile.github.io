const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const phraseUL = document.querySelector('#phrase ul');
const overlay = document.querySelector('#overlay');
const ctrlButton = document.querySelector('.btn__reset');
let missed = 0;

ctrlButton.addEventListener('click', () => {
	overlay.style.display = 'none';
});

const phrases = [
	'Keep up the good work',
	'Give me good grades',
	'See you in the funny papers',
	'Merry Christmas',
	'Happy new year'
];

function getRandomPhraseAsArray(phrases) {
	const randomIndex = Math.floor( Math.random() * phrases.length );
	const randomPhrase = phrases[randomIndex];
	let characters = [];
	for (let i = 0; i < randomPhrase.length; i++) {
		characters.push(randomPhrase[i]);
		// characters.push(splitPhrases);
	}
	// return console.log(characters);
	return characters;
}

// getRandomPhraseAsArray(phrases); 

// Create a function that loops through an array of characters

function addPhraseToDisplay(func){
	for(let i = 0; i < func.length; i++){

		// Creates an li element
		let liLocal = document.createElement('li');

		// Puts every character in an li tag
		liLocal.textContent = func[i];
		// console.log(liLocal);

		// Appends li to ul
		phraseUL.append(liLocal);

		// Adds class of letter if the li is a letter
		if (liLocal.textContent !== " ") {
			liLocal.className = 'letter';
		} else{
			liLocal.className = "space";
		}
	}
	console.log(phraseUL);
}

const phraseArray = getRandomPhraseAsArray(phrases);

const getCharactersWithLI = addPhraseToDisplay(phraseArray);

// Get all the li with the class of 'letter' and checks if the 
// letter clicked is one of the letters in the phrase

let letterFound;
const letter = document.querySelectorAll('.letter');
const letterLength = letter.length;

function checkLetter (button) {
	// console.log(letter);
	letterFound = false;
	for (let i = 0; i < letter.length; i++){
		let checkButton = letter[i].textContent.toLowerCase();
		if (button.textContent === checkButton) {
			letter[i].className = 'show';
			// console.log('Wow!');
			const match = letter[i].textContent;
			letterFound = true;
		} 
	}
	return letterFound;
}

qwerty.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON'){
		e.target.className = 'chosen';
		e.target.setAttribute('disabled', true);
		checkLetter(e.target);
		if (letterFound === false) {
			missed++;
			e.target.className = 'wrong-choice';
			const ol = document.getElementsByTagName('ol')[0];
			const tries = document.querySelector('.tries:last-child');
			ol.removeChild(tries);
		}
	}
	function checkWin() {
	const show = document.querySelectorAll('.show');
	if (show.length === letterLength) {
		const winOverlay = document.querySelector('#overlay');
		const winText = document.querySelector('.title');
		const playAgainButton = document.querySelector('.btn__reset');
		const phrase = document.querySelector('#phrase');
		winOverlay.className = 'win';
		winText.textContent = 'Congratulations! You won!!!';
		winOverlay.style.display = '';
		winText.style.color = 'midnightblue';
		playAgainButton.textContent = 'Play Again!';
		phrase.style.display = 'none';
		document.querySelector('#qwerty').style.display = 'none';
		document.querySelector('.header').style.display = 'none';
	} else if (missed === 5){
		const loseOverlay = document.querySelector('#overlay');
		const loseText = document.querySelector('.title');
		const tryAgainButton = document.querySelector('.btn__reset');
		const phrase = document.querySelector('#phrase');
		loseOverlay.className = 'lose';
		loseText.textContent = 'Bummer! You ran out of chances.';
		loseOverlay.style.display = '';
		loseText.style.color = 'firebrick';
		tryAgainButton.textContent = 'Try Again!';
		phrase.style.display = 'none';
		document.querySelector('#qwerty').style.display = 'none';
		document.querySelector('.header').style.display = 'none';
	}
}
		checkWin();
});
