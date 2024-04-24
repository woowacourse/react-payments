import useInputWithValidation, { Validator } from "./useInputWithValidation";

export const enum ValidatorType {
  Individual = "individual",
  Overall = "overall",
}

export type VariousValidator = IndividualValidator | OverallValidator;

export interface IndividualValidator extends Validator {
  type: ValidatorType.Individual;
  index: number[];
}
export interface OverallValidator {
  validate: (inputs: string[]) => boolean;
  type: ValidatorType.Overall;
}

const filterIndividualValidators = (validators: VariousValidator[]) =>
  validators
    .filter((v) => v.type === ValidatorType.Individual)
    .map((v) => v as IndividualValidator);

const filterOverallValidators = (validators: VariousValidator[]) =>
  validators
    .filter((v) => v.type === ValidatorType.Overall)
    .map((v) => v as OverallValidator);

const makeIndividualValidators = (
  validators: VariousValidator[],
  length: number
) => {
  const inidividualValidators = filterIndividualValidators(validators);
  const overallValidators = filterOverallValidators(validators);

  const result: Validator[][] = Array.from({ length }).map(() => []);
  inidividualValidators.forEach((v) => {
    v.index.forEach((i) => {
      result[i].push({
        validate: v.validate,
        errorMessage: v.errorMessage,
      });
    });
  });
  return result;
};

const useInputField = (
  individualValidators: VariousValidator[],
  length: number
) => {
  const inidividualValidators = makeIndividualValidators(
    individualValidators,
    length
  );
  return inidividualValidators.map((v: Validator[]) =>
    useInputWithValidation("", v)
  );
};

export default useInputField;
