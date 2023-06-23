const card = (name, image) => {
    let cardInformation = {
        cardName: name,
        isHit: false
    }
    let cardImage = new Image();
    cardImage.src = image;
    function getImage() {
        return cardImage
    }
    function setImage(sImage) {
        cardImage.src = sImage;
    }
    function getCardInfo() {
        return cardInformation;
    }
    function setName(sName) {
        cardInformation.cardName = sName;
    }
    function setHit(sIsHit) {
        cardInformation.isHit = sIsHit;
    }
    return { getImage, setImage, getCardInfo, setName, setHit }
}
export default card;