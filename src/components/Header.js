import ScoreIndicator from "./ScoreIndicator";
export default function Header({ score, highScore }) {
    return (
        <header>
            <h1>Fighter Memory</h1>
            <ScoreIndicator currentScore={score} highScore={highScore}></ScoreIndicator>
        </header>
    );
}