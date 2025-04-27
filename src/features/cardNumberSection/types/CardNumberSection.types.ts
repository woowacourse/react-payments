import { CardNumberPosition, State, Error } from "./../../../types/index.types";

export type CardNumberProps = {
  cardNumber: State<CardNumberPosition, string>;
  cardNumberError: Error<CardNumberPosition>;
};
