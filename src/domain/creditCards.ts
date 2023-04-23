import { CardType } from "../types/card";

class CreditCards {
  private cards: CardType[] = [];

  constructor() {
    this.getSavedData();
  }

  addNewCard(newCard: CardType) {
    this.cards.push(newCard);
    this.saveInLocalStorage();
  }

  getCards() {
    return this.cards;
  }

  private saveInLocalStorage() {
    localStorage.setItem("cards", JSON.stringify(this.cards));
  }

  private getSavedData() {
    const data = localStorage.getItem("cards");

    if (data) {
      this.cards = JSON.parse(data);
    }
  }
}

export default new CreditCards();
