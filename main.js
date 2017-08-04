(function(){

	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.binding();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     	this.guess = null;
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png"\
				alt="Codepen" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "bull_ballpark",
			img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/bull_ballpark.jpg",
			id: 1,
		},
		{
			name: "cameron",
			img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/cameron.jpg",
			id: 2
		},
		{
			name: "central_park",
			img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/central_park.jpg",
			id: 3
		},
		{
			name: "duke_chapel",
			img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/duke_chapel.jpg",
			id: 4
		},
		{
			name: "durm_art",
			img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/durm_art.jpg",
			id: 5
		},
		{
			name: "elmos",
			img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/elmos.jpg",
			id: 6
		},
		{
			name: "kings",
			img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/kings.jpg",
			id: 7
		},
		{
			name: "lucky_strike",
			img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/lucky_strike.jpg",
			id: 8
		},
		{
			name: "major_bull",
			img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/major_bull.jpg",
			id: 9
		},
		{
			name: "old_bull_sign",
			img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/old_bull_sign.jpg",
			id: 10
		},
		{
			name: "skyline",
			img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/skyline.jpg",
			id: 11
		},
		{
			name: "water_tower",
			img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/water_tower.jpg",
			id: 12
		},
	];

	Memory.init(cards);


})();












/*wrapperID : "my-memory-game",
cards : [
  {
    id : 1,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/american_tobacco.jpg"
  },
  {
    id : 2,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/black_wall_street.jpg"
  },
  {
    id : 3,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/bull_ballpark.jpg"
  },
  {
    id : 4,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/central_park.jpg"
  },
  {
    id : 5,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/duke_chapel.jpg"
  },
  {
    id : 6,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/elmos.jpg"
  },
  {
    id : 7,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/kings.jpg"
  },
  {
    id : 8,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/lucky_strike.jpg"
  },
  {
    id : 9,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/major_bull.jpg"
  },
  {
    id : 10,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/skyline.jpg"
  },
  {
    id : 11,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/water_tower.jpg"
  },
  {
    id : 12,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/wool-e.jpg"
  },
  {
    id : 13,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/cameron.jpg"
  },
  {
    id : 14,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/durm_flag.jpg"
  },
  {
    id : 15,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/old_bull_sign.jpg"
  },
  {
    id : 16,
    img: "/Users/jerusmacbook/Documents/Projects/memory-game/images/durm_art.jpg"
  }
],
onGameStart : function() { return false; },
onGameEnd : function() { return false; }







/*(function() {
  let cards = document.querySelectorAll(".card.effect__click");
  for ( let i  = 0; len = cards.length; i < len; i++ ) {
    let card = cards[i];
    clickListener( card );
  }

  function clickListener(card) {
    card.addEventListener( "click", function() {
      let c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})();











/*let memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
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







$(".click").click(function () {
    $flipper = $(".flipper");

    if (!$flipper.hasClass("flipped") && !$flipper.hasClass("second-flip")) {
        $flipper.addClass("flipped");
    } else {
        $flipper.toggleClass("flipped");
        $flipper.toggleClass("second-flip");
    }
});














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
