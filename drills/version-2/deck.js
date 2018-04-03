// Your code here
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }
  add(card) {
    this.cards.push(card);
  }
  filter(suit) {
    let filteredDeck = [];
    for (var i = 0; i < this.cards.length; i++) {
      if (this.cards[i].suit === suit) {
        filteredDeck.push(this.cards[i]);
      }
    }
    return filteredDeck;
  }
  populate(newCards) {
    for (var i = 0; i < newCards.length; i++) {
      let newCard = new Card(newCards[i][0], newCards[i][1]);
      this.cards.push(newCard);
    }
    return this.cards;
  }
}

module.exports = {
  Card,
  Deck
};
