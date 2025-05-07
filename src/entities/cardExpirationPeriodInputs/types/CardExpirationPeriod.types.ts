import { ExpirationPeriod, State } from "../../../shared/types/index.types";

export type ExpirationPeriodProps = State<ExpirationPeriod, string> & {
  error: {
    month: string;
    year: string;
  };
  monthCheckValidation: (args: {
    length: number;
    value: string;
    type: "month";
  }) => void;
  yearCheckValidation: (args: {
    length: number;
    value: string;
    type: "year";
  }) => void;
};
