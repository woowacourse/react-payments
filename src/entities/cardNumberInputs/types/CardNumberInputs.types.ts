import {
  State,
  Error,
  CardNumberPosition,
} from "../../../shared/types/index.types";

export type CardNumberProps = {
  cardNumber: State<CardNumberPosition, string>;
  cardNumberError: Error<CardNumberPosition>;
};
