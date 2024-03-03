let playerOneCards: Array<string> = []
let playerTwoCards: Array<string> = []
let playerThreeCards: Array<string>  = []
let playerFourCards: Array<string>  = []
let cards: any = [
    "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS", "AS",
    "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AC",
    "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AH",
    "2D", "D3", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AD"
];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function dealCards() {
    for (let i = 0; i < cards.length; i++) {
        playerOneCards.push(cards.shift());
        playerTwoCards.push(cards.shift());
        playerThreeCards.push(cards.shift());
        playerFourCards.push(cards.shift());
    }
}

class playerOne {
    name: string;
    cards: Array<string>;
    isTurn: Boolean;
    position: string;

    constructor() {
        this.name = "";
        this.cards = playerOneCards;
        this.isTurn = true;
        this.position = "North"
    }
}

class playerTwo {
    name: string;
    cards: Array<string>;
    isTurn: Boolean;
    position: string;

    constructor() {
        this.name = "";
        this.cards = playerTwoCards;
        this.isTurn = false;
        this.position = "East"
    }
}

class playerThree {
    name: string;
    cards: Array<string>;
    isTurn: Boolean;
    position: string;

    constructor() {
        this.name = "";
        this.cards = playerThreeCards;
        this.isTurn = false;
        this.position = "South"
    }
}

class playerFour {
    name: string;
    cards: Array<string>;
    isTurn: Boolean;
    position: string;

    constructor() {
        this.name = "";
        this.cards = playerFourCards;
        this.isTurn = false;
        this.position = "West"
    }
}

shuffleArray(cards)
dealCards()
let playerOneActual = new playerOne();
let playerTwoActual = new playerTwo();
let playerThreeActual = new playerThree();
let playerFourActual = new playerFour();
let teamOne = [ playerOneActual, playerTwoActual ]
let teamTwo = [ playerThreeActual, playerFourActual ]
let gameRunning: boolean = false
let passCount: number = 0;
let bid: string = "";

function gameStatus() {
    console.log(playerOneActual)
    console.log(playerTwoActual)
    console.log(playerThreeActual)
    console.log(playerFourActual)
}

if (gameRunning) {
    gameStatus();
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