import {
  ExpirationPeriod,
  State,
  Error,
} from "../../../shared/types/index.types";

export type ExpirationPeriodProps = {
  expirationPeriod: State<ExpirationPeriod, string>;
  monthError: Error<"month">;
  yearError: Error<"year">;
};
