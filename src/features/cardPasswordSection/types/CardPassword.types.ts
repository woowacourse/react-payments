import { State, Error } from "../../../types/index.types";

export type CardPasswordSectionProps = {
  password: State<"password", string>;
  passwordError: Error<"password">;
};
