export default function ScoreIndicator({ currentScore, highScore }) {
    return (
        <section className="score-tally">
            <div>Current score is {currentScore}</div>
            <div>High Score is {highScore}</div>
        </section>
    );
}