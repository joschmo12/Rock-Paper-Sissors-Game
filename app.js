const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('picture');
const pScoreDisplay = document.getElementById('pScore');
const cScoreDisplay = document.getElementById('cScore');
let playerChoice;
let computerChoice;
let result;
let pScore = 0;
let cScore = 0;

// player clicks their choice
possibleChoices.forEach((possibleChoice) =>
	possibleChoice.addEventListener('click', (e) => {
		playerChoice = e.target.id;
		generateComputerChoice();
		getResult();
	})
);

// computer randomly choses
function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3) + 1;

	if (randomNumber === 1) {
		computerChoice = 'rock';
		document.getElementById('c-rock').style.backgroundColor = 'rgb(239 68 68)';
		document.getElementById('c-paper').style.backgroundColor =
			'rgb(249 115 22)';
		document.getElementById('c-scissors').style.backgroundColor =
			'rgb(249 115 22)';
	}
	if (randomNumber === 2) {
		computerChoice = 'paper';
		document.getElementById('c-paper').style.backgroundColor = 'rgb(239 68 68)';
		document.getElementById('c-rock').style.backgroundColor = 'rgb(249 115 22)';
		document.getElementById('c-scissors').style.backgroundColor =
			'rgb(249 115 22)';
	}
	if (randomNumber === 3) {
		computerChoice = 'scissors';
		document.getElementById('c-scissors').style.backgroundColor =
			'rgb(239 68 68)';
		document.getElementById('c-rock').style.backgroundColor = 'rgb(249 115 22)';
		document.getElementById('c-paper').style.backgroundColor =
			'rgb(249 115 22)';
	}
}

// evaluate and get winner
function getResult() {
	switch (playerChoice + computerChoice) {
		case 'scissorspaper':
		case 'rockscissors':
		case 'paperrock':
			resultDisplay.innerHTML =
				'You chose ' +
				playerChoice +
				' and the Computer chose ' +
				computerChoice +
				' , YOU WIN!';
			pScore = pScore + 1;
			pScoreDisplay.innerHTML = pScore;
			break;
		case 'paperscissors':
		case 'scissorsrock':
		case 'rockpaper':
			resultDisplay.innerHTML =
				'You chose ' +
				playerChoice +
				' and the Computer chose ' +
				computerChoice +
				' , YOU LOSE!';
			cScore = cScore + 1;
			cScoreDisplay.innerHTML = cScore;
			break;
		case 'scissorsscissors':
		case 'rockrock':
		case 'paperpaper':
			resultDisplay.innerHTML =
				'You chose ' +
				playerChoice +
				' and the Computer chose ' +
				computerChoice +
				' , ITS A DRAW!';
			break;
	}
}
