var playerOneCards = [];
var playerTwoCards = [];
var playerThreeCards = [];
var playerFourCards = [];
var cards = [
    "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AS",
    "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AC",
    "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AH",
    "2D", "D3", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AD"
];
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function dealCards() {
    for (var i = 0; i < cards.length; i++) {
        playerOneCards.push(cards.shift());
        playerTwoCards.push(cards.shift());
        playerThreeCards.push(cards.shift());
        playerFourCards.push(cards.shift());
    }
}
var playerOne = /** @class */ (function () {
    function playerOne() {
        this.name = "";
        this.cards = playerOneCards;
        this.isTurn = true;
        this.position = "North";
    }
    return playerOne;
}());
var playerTwo = /** @class */ (function () {
    function playerTwo() {
        this.name = "";
        this.cards = playerTwoCards;
        this.isTurn = false;
        this.position = "East";
    }
    return playerTwo;
}());
var playerThree = /** @class */ (function () {
    function playerThree() {
        this.name = "";
        this.cards = playerThreeCards;
        this.isTurn = false;
        this.position = "South";
    }
    return playerThree;
}());
var playerFour = /** @class */ (function () {
    function playerFour() {
        this.name = "";
        this.cards = playerFourCards;
        this.isTurn = false;
        this.position = "West";
    }
    return playerFour;
}());
shuffleArray(cards);
dealCards();
var playerOneActual = new playerOne();
var playerTwoActual = new playerTwo();
var playerThreeActual = new playerThree();
var playerFourActual = new playerFour();
var teamOne = [playerOneActual, playerTwoActual];
var teamTwo = [playerThreeActual, playerFourActual];
var gameRunning = false;
function gameStatus() {
    console.log(playerOneActual);
    console.log(playerTwoActual);
    console.log(playerThreeActual);
    console.log(playerFourActual);
}
// FAILED ATTEMPT AT GETTING USER INPUT TO ASSIGN NAMES
// function getNames() {
//     readline.question('Hello Player One, What is your name?', name => {
//         console.log(`Hey there ${name}!`);
//         playerOneActual.name = name;
//         readline.close();
//         });
//         readline.question('Hello Player One, What is your name?', name => {
//         console.log(`Hey there ${name}!`);
//         playerTwoActual.name = name;
//         readline.close();
//         });
//         readline.question('Hello Player One, What is your name?', name => {
//         console.log(`Hey there ${name}!`);
//         playerThreeActual.name = name;
//         readline.close();
//         });
//         readline.question('Hello Player One, What is your name?', name => {
//         console.log(`Hey there ${name}!`);
//         playerFourActual.name = name;
//         readline.close();
//         });
//         gameRunning = true;
//     }
if (gameRunning) {
    gameStatus();
}
// let passCount: number = 0;
// let bid: string = "";
// while (gameRunning) {
//     if 
// }
