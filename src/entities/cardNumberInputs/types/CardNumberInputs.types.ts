import { State, Error, CardNumberPosition } from "../../../types/index.types";

export type CardNumberProps = {
  cardNumber: State<CardNumberPosition, string>;
  cardNumberError: Error<CardNumberPosition>;
};
