import { State, Error } from "../../../shared/types/index.types";

export type CardPasswordInputsProps = State<"password", string> &
  Error<"password">;
