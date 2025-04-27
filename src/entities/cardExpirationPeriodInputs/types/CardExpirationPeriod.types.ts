import { ExpirationPeriod, State, Error } from "../../../types/index.types";

export type ExpirationPeriodProps = {
  expirationPeriod: State<ExpirationPeriod, string>;
  monthError: Error<"month">;
  yearError: Error<"year">;
};
