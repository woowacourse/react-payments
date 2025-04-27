import { State, Error } from "../../../types/index.types";

export type CardPasswordInputsProps = {
  password: State<"password", string>;
  passwordError: Error<"password">;
};
