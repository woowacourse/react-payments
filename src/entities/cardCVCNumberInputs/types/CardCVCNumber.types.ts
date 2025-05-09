import { State, Error } from "../../../shared/types/index.types";

export type CardCVCNumberSectionProps = State<"CVCNumber", string> &
  Error<"CVCNumber">;
