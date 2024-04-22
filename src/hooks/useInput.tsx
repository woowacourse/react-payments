import { Validator } from "@/components/utils/validation";
import useInputs from "./useInputs";

type useInputProp = Omit<
  Parameters<typeof useInputs>[number],
  "initialValue" | "onChangeValidators" | "onBlurValidators"
> & {
  initialValue: string;
  onChangeValidators?: (input: string) => Validator[];
  onBlurValidators?: (input: string) => Validator[];
};

const useInput = ({
  initialValue = "",
  onChangeValidators,
  onBlurValidators,
  maxNumberLength,
  validLength,
}: useInputProp): ReturnType<typeof useInputs> => {
  const onChangeValidators2 =
    onChangeValidators === undefined
      ? undefined
      : (inputs: string[]) => onChangeValidators(inputs[0]);
  const onBlurValidators2 =
    onBlurValidators === undefined
      ? undefined
      : (inputs: string[]) => onBlurValidators(inputs[0]);

  return useInputs({
    initialValue: [initialValue],
    onChangeValidators: onChangeValidators2,
    onBlurValidators: onBlurValidators2,
    maxNumberLength,
    validLength,
  });
};

export default useInput;
