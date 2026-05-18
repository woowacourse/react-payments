class Card {
  #number;
  #brand;
  #expiryYear;
  #expiryMonth;
  #cvc;
  #password;
  constructor(
    number: string,
    brand: string,
    expiryYear: string,
    expiryMonth: string,
    cvc: string,
    password: string,
  ) {
    this.#number = number;
    this.#brand = brand;
    this.#expiryYear = expiryYear;
    this.#expiryMonth = expiryMonth;
    this.#cvc = cvc;
    this.#password = password;
  }
}

export default Card;
