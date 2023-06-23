const score = (currentScore) => {
    let currentScore = currentScore;
    let highScore = 0;
    function checkHighScore(currentScore) {
        highScore = (currentScore > highScore) ? currentScore : highScore;
    }
    function getHighScore() {
        return highScore;
    }
    function setCurrentScore(sScore) {
        currentScore = sScore;
    }
    return { checkHighScore, getHighScore, setCurrentScore }
}