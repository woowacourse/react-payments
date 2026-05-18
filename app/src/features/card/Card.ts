export interface CardInterface {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

class Card implements CardInterface {
  #number: string;
  #expirationDate: string;
  #cvc: string;
  #issuerCode: string;
  constructor(
    number: string,
    expirationDate: string,
    cvc: string,
    issuerCode: string,
  ) {
    this.#number = number;
    this.#expirationDate = expirationDate;
    this.#cvc = cvc;
    this.#issuerCode = issuerCode;
  }
  get number() {
    return this.#number;
  }
  get expirationDate() {
    return this.#expirationDate;
  }
  get cvc() {
    return this.#cvc;
  }
  get issuerCode() {
    return this.#issuerCode;
  }
}

export default Card;
