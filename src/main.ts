import express, { Express, NextFunction, Request, Response } from 'express';
import path from 'path';

const app: Express = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.use(function(inRequest: Request, inResponse: Response, inNext: NextFunction) {
    inResponse.header('Access-Control-Allow-Origin', '*');
    inResponse.header('Access-Control-Allow-Methods', 'GET,POST');
    inResponse.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    inNext();
});

// Establish player deck variables, and the deck of 52 cards to be shuffled among then
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

// Functions to shuffle and deal cards, show game status, as well as an errorhandler function at the end
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

function gameStatus() {
    console.log(playerOneActual)
    console.log(playerTwoActual)
    console.log(playerThreeActual)
    console.log(playerFourActual)
}

function errorHandler (err: any) {
    console.error(err);
}

// Create our players. No option to input custom names here, we can do that for the second assignment
class playerOne {
    name: string;
    cards: Array<string>;
    position: string;

    constructor() {
        this.name = "Peter";
        this.cards = playerOneCards;
        this.position = "North"
    }
}

class playerTwo {
    name: string;
    cards: Array<string>;
    position: string;

    constructor() {
        this.name = "Erica";
        this.cards = playerTwoCards;
        this.position = "East"
    }
}

class playerThree {
    name: string;
    cards: Array<string>;
    position: string;

    constructor() {
        this.name = "Robert";
        this.cards = playerThreeCards;
        this.position = "South"
    }
}

class playerFour {
    name: string;
    cards: Array<string>;
    position: string;

    constructor() {
        this.name = "Hannah";
        this.cards = playerFourCards;
        this.position = "West"
    }
}

// Initializes a lot of useful variables, although we haven't started using all of them yet.
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

if (gameRunning) {
    gameStatus();
}

// Server and RESTful API code from this point on. Initialize these through the RESTful.rest file in the root folder.
app.post('/startGame', (req: Request, res: Response) => {
    try {
        if (gameRunning) {
            res.status(400).json({ message: 'The game is already running' });
        } else if (!gameRunning) {
            res.status(200).json({ message: `The game has started! The first bid belongs to: ${playerOneActual.name}` });
            gameStatus()
            gameRunning = true;
        }
    } catch (error) {
        errorHandler(error);
    }
})

app.post('/restartGame', (req: Request, res: Response) => {
    try {
        if (gameRunning) {
            gameRunning = false;
            gameRunning = true;
            res.status(200).json({ message: `The game has restarted! The first bid belongs to: ${playerOneActual.name}` })
        } else if (!gameRunning) {
            res.status(200).json({ message: 'The game is not running.' })
        }
    } catch (error) {
        errorHandler(error)
    }
})

app.post('/bidOne', (req: Request, res: Response) => {
    try {
        if (gameRunning) {
            bid = playerOneActual.cards[0];
            res.status(200).json({ message: `${playerOneActual.name} bids ${bid}` });
        } else if (!gameRunning) {
            res.status(200).json({ message: 'The game is not running.' })
        }
    } catch (error) {
        errorHandler(error)
    }
})

app.post('/bidTwo', (req: Request, res: Response) => {
    try {
        if (gameRunning) {
            bid = "PASS";
            res.status(200).json({ message: `${playerTwoActual.name} bids ${bid}` });
        } else if (!gameRunning) {
            res.status(200).json({ message: 'The game is not running.' })
        }
    } catch (error) {
        errorHandler(error)
    }
})

app.post('/bidThree', (req: Request, res: Response) => {
    try {
        if (gameRunning) {
            bid = "PASS";
            res.status(200).json({ message: `${playerThreeActual.name} bids ${bid}` });
        } else if (!gameRunning) {
            res.status(200).json({ message: 'The game is not running.' })
        }
    } catch (error) {
        errorHandler(error)
    }
})

app.post('/bidFour', (req: Request, res: Response) => {
    try {
        if (gameRunning) {
            bid = "PASS";
            res.status(200).json({ message: `${playerFourActual.name} bids ${bid}. Three players have passed in a row, and the game is now ending.` });
            gameRunning = false;
        } else if (!gameRunning) {
            res.status(200).json({ message: 'The game is not running.' })
        }
    } catch (error) {
        errorHandler(error)
    }
})

const port = process.env.PORT || 3000;

// Start server with 'npm run dev'
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});