let language = "English";
let playerXWinTheGame = "Player x win the game";
let playerOWinTheGame = "Player o win the game";
let isGameOver;
let isTurnX;
let isFullscreen = false;

let main = document.getElementsByTagName("main")[0];
let windowGameOver = document.getElementById("window");
let playerWonTheGame = document.getElementById("player-won-the-game");
let buttonSound = new Audio("sounds/cassette-player-button.mp3");
let markerSound = new Audio("sounds/scribble.mp3");

function changeWindowSize() {
	buttonSound.play();
	if (isFullscreen) {
		document.exitFullscreen();
		document.getElementById("window-size").innerHTML = '<i class="fas fa-expand-alt"></i>';
		isFullscreen = false;
	}
	else {
		document.documentElement.requestFullscreen();
		document.getElementById("window-size").innerHTML = '<i class="fas fa-compress-alt"></i>';
		isFullscreen = true;
	}
}

function closeWindow() {
	main.style["filter"] = "none";
	windowGameOver.style.display = "none";
}

function showWindowGameOver(winner) {
	main.style["filter"] = "brightness(70%) blur(3px)";
	windowGameOver.style.display = "block";
	if (winner == "x")
		playerWonTheGame.innerHTML = "Gratulacje. Rozgrywkę wygrał gracz x";
	else if (winner == "o")
		playerWonTheGame.innerHTML = "Gratulacje. Rozgrywkę wygrał gracz o";
}

function changeLanguage() {
	buttonSound.play();
	if (language == "English") {
		language = "Polish";
		playerXWinTheGame = "Wygrał gracz x";
		playerOWinTheGame = "Wygrał gracz o";
		document.getElementById("language-image").src = "img/uk.png";
		document.getElementById("language-image").alt = "uk";
		document.getElementById("title").innerHTML = "Kółko i Krzyżyk";
		document.getElementById("next-move").innerHTML = "następny ruch: gracz ";
		//document.getElementById("x-player").innerHTML = "gracz x";
		//document.getElementById("o-player").innerHTML = "gracz o";
		document.getElementById("new-game").innerHTML = "<i class='fas fa-redo'></i><br>Nowa gra";
	}
	else if (language == "Polish") {
		language = "English";
		playerXWinTheGame = "Player x win the game";
		playerOWinTheGame = "Player o win the game";
		document.getElementById("language-image").src = "img/poland.png";
		document.getElementById("language-image").alt = "poland";
		document.getElementById("title").innerHTML = "Tic-Tac-Toe";
		document.getElementById("next-move").innerHTML = "next move: player ";
		//document.getElementById("x-player").innerHTML = "x player";
		//document.getElementById("o-player").innerHTML = "o player";
		document.getElementById("new-game").innerHTML = "<i class='fas fa-redo'></i><br>New game";
	}
}

function startGame() {
	isGameOver = false;
	isTurnX = true;
	checkTurn();

	for (let y=0; y<3; y++) {
		for (let x=0; x<3; x++)
			document.getElementById("b"+y+x).innerHTML = "";
	}
}

function drawSign(y,x) {
	let square = document.getElementById("b"+y+x);

	if (!isGameOver) {
		if (square.innerHTML == "") {
			markerSound.play();
			if (isTurnX) {
					square.innerHTML = "x";
					isTurnX = false;
			} else {
				square.innerHTML = "o";
				isTurnX = true;
			}
		}
		
		if (checkTheWinner("x")) {
			isGameOver = true;
			showWindowGameOver("x");
		} else if (checkTheWinner("o")) {
			isGameOver = true;
			showWindowGameOver("o");
		} else
			checkTurn();
	}
}

function checkTurn() {
	if (isTurnX) {
		document.getElementById("x-player").style.display = "inline";
		document.getElementById("o-player").style.display = "none";
	}
	else {
		document.getElementById("x-player").style.display = "none";
		document.getElementById("o-player").style.display = "inline";
	}
}

function checkTheWinner(player) {
	let count = 0;

	// CHECK HORIZONTALLY
	for (let y=0; y<3; y++) {
		for (let x=0; x<3; x++) {
			if (document.getElementById("b"+y+x).innerHTML == player)
				count++;
		}

		if (count == 3)
			return true;
		else
			count = 0;
	}

	// CHECK VERTICALLY
	for (let x=0; x<3; x++) {
		for (let y=0; y<3; y++)
			if (document.getElementById("b"+y+x).innerHTML == player)
				count++;

		if (count == 3)
			return true;
		else
			count = 0;
	}

	// CHECK DIAGONALLY FROM TOP LEFT TO BOTTOM RIGHT
	for (let y=0; y<3; y++) {
		for (let x=0; x<3; x++) {
			if (y==x) {
				if (document.getElementById("b"+y+x).innerHTML == player)
					count++;
			}
		}
	}

	if (count == 3)
		return true;
	else
		count = 0;

	// CHECK DIAGONALLY FROM TOP RIGHT TO BOTTOM LEFT
	for (let y=0; y<3; y++) {
		for (let x=0; x<3; x++) {
			if ((y==0 && x==2) || (y==1 && x==1) || (y==2 && x==0)) {
				if (document.getElementById("b"+y+x).innerHTML == player)
					count++;
			}
		}
	}
	if (count == 3)
		return true;
	else
		count = 0;
}