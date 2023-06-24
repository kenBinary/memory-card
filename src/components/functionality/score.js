const score = (score) => {
    let currentScore = score;
    let highScore = 0;
    function updateHighScore() {
        highScore = (currentScore > highScore) ? currentScore : highScore;
    }
    function getHighScore() {
        return highScore;
    }
    function setCurrentScore(sScore) {
        currentScore = sScore;
    }
    function getCurrentScore() {
        return currentScore;
    }
    return { getHighScore, setCurrentScore, getCurrentScore }
}
export default score;