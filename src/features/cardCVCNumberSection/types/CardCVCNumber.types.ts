import { State, Error } from "../../../shared/types/index.types";

export type CardCVCNumberSectionProps = {
  CVCNumber: State<"CVCNumber", string>;
  CVCError: Error<"CVCNumber">;
};
