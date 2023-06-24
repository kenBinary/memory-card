export default function GameBoard({ cardClicked, cards }) {
    return (
        <section className="game-board">
            <div className="card-container">
                {
                    cards.map((element, index) => {
                        return <div key={index} onClick={() => {
                            cardClicked(index)
                        }}>
                            <img src={element.getImage().src}></img>
                            {/* {element.getCardInfo().cardName} */}
                        </div>
                    })
                }
            </div>
        </section>
    )
}