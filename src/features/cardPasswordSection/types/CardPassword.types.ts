import { State, Error } from "../../../shared/types/index.types";

export type CardPasswordSectionProps = {
  password: State<"password", string>;
  passwordError: Error<"password">;
};
