// gameboard that facilitates the game loop
// store scores in gameboard
// keep track of already clicked cards
// each time an unclicked card is click increase score
// when card clicked is already clicked reset score and check if current score is high
// have function that shuffles card positions

const gameBoard = (cards, score) => {
    let gameCards = cards;
    let gameScore = score;
    function cardHit(index) {
        if (gameCards[index].getCardInfo().isHit) {
            return true;
        }
        else {
            gameCards[index].setHit(true);
        }
    }
    function shuffleCards() {
        for (let index = 0; index < gameCards.length; index++) {
            let pointer = gameCards.length - (index + 1);
            let randomNumber = Math.floor(Math.random() * pointer);
            let pointerElement = gameCards.splice(pointer, 1, gameCards[randomNumber])
            gameCards[randomNumber] = pointerElement[0];
        }
    }
    function getCards() {
        return gameCards;
    }
    function getGameScore() {
        return gameScore;
    }
    return { cardHit, shuffleCards, getCards, getGameScore }
}
export default gameBoard;