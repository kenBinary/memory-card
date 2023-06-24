import Header from "./Header";
import GameBoard from "./GameBoard";
import "../styles/game-page.css"
import card from "./functionality/card"
import gameBoard from "./functionality/gameboard";
import alex from "./assets/alex.png";
import dj from "./assets/dj.png";
import dustin from "./assets/dustin.png";
import gsp from "./assets/gsp.jpg";
import isreal from "./assets/isreal.png";
import islam from "./assets/ma.png";
import manny from "./assets/manny.png";
import nonito from "./assets/nonito.png";
import { useEffect, useState } from "react";

export default function GamePage() {
    let cardImages = [alex, dj, dustin, gsp, isreal, islam, manny, nonito]
    let cardNames = ["Alex Pereira", "Demetrious Johnson", "Dustin Poirier", "Georges St-Pierre", "Israel Adesanya", "Islam Makhachev", "Manny Pacquiao", "Nonito Donaire"];
    let [gameCards, setGameCards] = useState([]);
    let [myGameBoard, setMyGameBoard] = useState(null);
    let [score, setScore] = useState(0)
    let [highScore, setHighScore] = useState(0);
    useEffect(() => {
        let newArray = [];
        cardImages.forEach((element, index) => {
            let newCard = card(cardNames[index], element);
            newArray = [...newArray, newCard]
        })

        setGameCards([...newArray]);
        let newGameBoard = gameBoard([...newArray]);
        setMyGameBoard(newGameBoard);
    }, []);
    function cardClicked(index) {
        if (myGameBoard.cardHit(index)) {
            setScore(0);
            setHighScore((score > highScore) ? score : highScore);
            myGameBoard.resetHits();
            alert("you lost")
        }
        else {
            setScore(score + 1);
        }
        myGameBoard.shuffleCards();
        let myNewArray = [...myGameBoard.getCards()];
        setGameCards([...myNewArray]);
    }
    return (
        <main>
            <Header score={score} highScore={highScore}></Header>
            <GameBoard cards={gameCards} cardClicked={cardClicked}></GameBoard>
        </main>
    );
}