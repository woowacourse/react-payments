import {
  CardNumberPosition,
  State,
  Error,
} from "../../../shared/types/index.types";

export type CardNumberProps = {
  cardNumber: State<CardNumberPosition, string>;
  cardNumberError: Error<CardNumberPosition>;
};
