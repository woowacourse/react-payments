import useInputWithValidation, {
  Validator as InidividualValidator,
  Validator,
} from "./useInputWithValidation";

export const enum ValidatorType {
  Individual = "individual",
  Overall = "overall",
}

export type VariousValidator = IndividualValidator | OverallValidator;

export interface IndividualValidator {
  validate: (input: string) => boolean;
  errorMessage: string;
  index: number[];
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

  if (individualValidators === undefined) return [];
  individualValidators.forEach((v) => {
    v.index.forEach((i) => {
      result[i].push({
        validate: v.validate,
        errorMessage: v.errorMessage,
      });
    });
  });

  return result.map((v: InidividualValidator[]) =>
    useInputWithValidation("", v)
  );
};

export default useInputField;
