import { State, Error } from "../../../types/index.types";

export type CardCVCNumberSectionProps = {
  CVCNumber: State<"CVCNumber", string>;
  CVCError: Error<"CVCNumber">;
};
