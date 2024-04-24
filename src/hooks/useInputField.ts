import useInputWithValidation, { Validator } from "./useInputWithValidation";

export const enum ValidatorType {
  Individual = "individual",
  Overall = "overall",
}

export type VariousValidator = IndividualValidator | OverallValidator;

export interface IndividualValidator {
  validate: (input: string) => boolean;
  errorMessage: string;
  index?: number[];
}
export interface OverallValidator {
  validate: (inputs: string[]) => boolean;
  errorMessage: string;
}

interface useInputFieldProps {
  individualValidators?: IndividualValidator[];
  overallValidators?: OverallValidator[];
  length: number;
}
const useInputField = ({
  individualValidators,

  length,
}: useInputFieldProps) => {
  const result: Validator[][] = Array.from({ length }).map(() => []);
  const a: Validator[] = [];

  const range = Array.from({ length }).map((_, i) => i);
  if (individualValidators === undefined) return [];
  individualValidators.forEach((v) => {
    v.index ??
      range.forEach((i) => {
        result[i].push({
          validate: v.validate,
          errorMessage: v.errorMessage,
        });
      });
  });

  return result.map((v) => useInputWithValidation("", v));
};

export default useInputField;
