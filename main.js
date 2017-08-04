let memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
let memory_values = [];
let memory_tile_ids = [];
let tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    let i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	tiles_flipped = 0;
	let output = '';
    memory_array.memory_tile_shuffle();
	for(let i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					alert("Board cleared... generating new board");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    let tile_1 = document.getElementById(memory_tile_ids[0]);
				    let tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'url(/images/american_tobacco.jpg) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(/images/black_wall_street.jpg) no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}
//newBoard();






















//'use strict';
//(function() {
//  let countDown;
//  let timeLoss;
//  let scoreIncrementer;
//  let flippedCards;
//  let score = document.getElementsByClassName('score')[0];
//  let timer = document.getElementsByClassName('timer')[0];
//  let endGame = document.getElementsByClassName('game-over')[0];

//  function dealDeck() {
//    let card = document.getElementsByClassName('card');
//    let pics = [];

//  }
//}
//timeLoss = 59;
//scoreIncrementer = 0;
//flippedCards = [];

//endGame.style.display = 'none';

//shuffle(pics);

//for (let i = 0; i < card.length; i++) {
//  if(card[i].classList.contains('flipped')) {
//    card[i].classList.toggle('flipped');
//  }
//  card[i].querySelector('.back').style.backgroundImage = pics[i];
//  card[i].addEventListener('click', flip);
//}
//score.innerText = '00';

//startTimer();
//}

//function flip() {
//  $('.card').toggleClass('flipped');
//}
//if (this.classList.contains('flipped') && flippedCards.length < 2) {
//  this.classList.toggle('flipped');

//  flippedCards.push(this);

//  if (flippedCards.length === 2) {
//    checkMatch();
//  }
//}
//}

//function checkMatch() {
//if (flippedCards[0].querySelector('.back').style.backgroundImage === flippedCards[1].querySelector('.back').style.backgroundImage) {
//  flippedCards = [];

//  score.innerText = '0' + ++scoreIncrementer;
//}
//else {
//  setTimeout(flipBack, 1500);
//}
//}

//function flipBack() {
//flippedCards[0].classList.toggle('flipped');
//flippedCards[1].classList.toggle('flipped');

//flippedCards = [];
//}

//function startTimer() {
//timer.innerText = '1:00';
//countDown = setInterval(decrementTime, 1000);
//}

//function decrementTime() {
//if (timeLoss === 0) {
//  timer.innerText = '0:0' + timeLoss;
//  clearInterval(countDown);
//  finalize();
//}
//if (timeLoss < 10) {
//  timer.innerText = '0:0' + timeLoss;
//}
//if (timeLoss >= 10) {
//  timer.innerText = '0:' + timeLoss;
//}
//if (scoreIncrementer === 8){
//  clearInterval(countDown);
//  finalize();
//}
//timeLoss--;
//         }

//function finalize() {
//var restart = document.getElementsByTagName('button')[0];
//restart.addEventListener('click', dealDeck);

//endGame.style.display = 'flex';

//if (scoreIncrementer === 8) {
//  endGame.querySelector('h1').innerText = 'you win';
//}
//else {
//  endGame.querySelector('h1').innerText = 'you lose';
//}
//endGame.querySelector('.final-score').innerText = 'score: ' + scoreIncrementer;
//endGame.querySelector('.time').innerText = 'time left: ' + timeLoss + ' sec.';
//}

//function shuffle(array) {
//for (let i = array.length - 1; i > 0; i--) {
//  let j = Math.floor(Math.random() * (i + 1));
//  let temp = array[i];
//  array[i] = array[j];
//  array[j] = temp;
//}
//return array;
//}

//dealDeck();
//})();
