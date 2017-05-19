var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
	];
var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else { 
		console.log("Sorry, try again")};
}
var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
if (cardsInPlay.length === 2) {
	checkForMatch;
}
}

var createBoard = function() {
	for (var i = 0; cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute(i);

		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/queen-of-hearts.png');
		cardElement.setAttribute(i);

		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/queen-of-diamonds.png');
		cardElement.setAttribute(i);

		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/king-of-hearts.png');
		cardElement.setAttribute(i);

		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/king-of-diamonds.png');
		cardElement.setAttribute(i);
	}
}
createBoard;

var boxElement = document.createElement('div');
     boxElement.className = 'box-' + i;
     document.getElementsByTagName('body')[0].appendChild(boxElement);
 }