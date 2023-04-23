import { CardType } from "../types/card";

class CreditCards {
  private cards: CardType[] = [];

  constructor() {
    this.getSavedData();
  }

  formNewCard(data: { [k: string]: FormDataEntryValue }) {
    return {
      numbers: [
        String(data.cardNumber1),
        String(data.cardNumber2),
        String(data.cardNumber3),
        String(data.cardNumber4),
      ],
      expiryDate: String(data.expiryDate),
      owner: String(data.owner),
      CVC: Number(data.cvc),
      password: [Number(data.password1), Number(data.password2)],
      color: "#de75d0",
    };
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
