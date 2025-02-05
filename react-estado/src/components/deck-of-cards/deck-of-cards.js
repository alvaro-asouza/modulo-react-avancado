import { useState, useEffect } from "react"
import '../deck-of-cards/cards.css'
import Form from '../forms/form'

async function createDeck() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await response.json()
    return deck.deck_id
}

async function getCards(deckId) {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    return await response.json()
}



const CardList = (props) => {
    return (
        <ul>
            {
                props.cards.map((card, index) => {
                    return (
                        <li className="child" key={index}>
                            <img src={card.image} alt={card.value} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

const DeckOfCards = () => {

    const [deck, setDeck] = useState({
        cards: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const deckId = await createDeck()
        const data = await getCards(deckId)

        setDeck({
            cards: data.cards
        })
    }
    fetchData()
    }, [])

    const addCard = (newCard) => {
        console.log(newCard);
        setDeck({
            cards: [...deck.cards, newCard]
        })
    }

    return (
       
        <section className="container">
             <Form addCard={addCard} />
            { deck.cards.length > 0 ? <CardList cards={deck.cards} /> : 'nehuma carta encontrada' }
        </section>
    )

    // constructor(){
    //     super()
    //     this.state = {
    //         cards: []
    //     }
    // }

    // async componentDidMount(){
    //     const deckId =  await createDeck()
    //     const data =  await getCards(deckId)

    //     this.setState({
    //         cards: data.cards
    //     })
    // }


    // render(){
    //     return(
    //         <section className="container">
    //             <ul>
    //                {
    //                 this.state.cards.map((card, index) => {
    //                     return(
    //                         <li className="child" key={index}>
    //                             <img src={card.image} alt={card.value} />
    //                         </li>
    //                     )
    //                 })
    //                }
    //             </ul>
    //         </section>
    //     )
    // }
}

export default DeckOfCards