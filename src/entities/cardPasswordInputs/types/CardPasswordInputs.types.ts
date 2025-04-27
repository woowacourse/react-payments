import { State, Error } from "../../../shared/types/index.types";

export type CardPasswordInputsProps = {
  password: State<"password", string>;
  passwordError: Error<"password">;
};
