import {
  State,
  Error,
  CardNumberPosition,
} from "../../../shared/types/index.types";

export type CardNumberProps = State<CardNumberPosition, string> &
  Error<CardNumberPosition>;
