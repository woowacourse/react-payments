import {
  ERROR_MESSAGE,
  PAYMENTS_INPUT_MESSAGE,
  PAYMENTS_MESSAGE,
} from '../constants/message';
import { isOnlyDigit, isUpperLength } from '../domain/checkIsValid';

import { BOUND } from '../constants/number';
import { CardNumbers as CardNumbersType } from '../hooks/useCardInfo';
import FormItem from './FormItem';
import SectionTitle from './SectionTitle';
import TextInput from './TextInput';
import TextInputContainer from './InputContainer';
import useLastValidValue from '../hooks/useLastValidValue';
import useValidateInput from '../hooks/useValidateInput';

export default function CardNumbers({
  setCardNumbers,
}: {
  setCardNumbers: React.Dispatch<React.SetStateAction<CardNumbersType>>;
}) {
  const firstInput = useValidateInput({
    ...useValidatedInputProps,
    setHook: (first: string) => {
      setCardNumbers([
        first,
        secondInput.input,
        thirdInput.input,
        fourthInput.input,
      ]);
    },
  });
  const secondInput = useValidateInput({
    ...useValidatedInputProps,
    setHook: (second: string) => {
      setCardNumbers([
        firstInput.input,
        second,
        thirdInput.input,
        fourthInput.input,
      ]);
    },
  });
  const thirdInput = useValidateInput({
    ...useValidatedInputProps,
    setHook: (third: string) => {
      setCardNumbers([
        firstInput.input,
        secondInput.input,
        third,
        fourthInput.input,
      ]);
    },
  });
  const fourthInput = useValidateInput({
    ...useValidatedInputProps,
    setHook: (fourth: string) => {
      setCardNumbers([
        firstInput.input,
        secondInput.input,
        thirdInput.input,
        fourth,
      ]);
    },
  });

  const hooks = [firstInput, secondInput, thirdInput, fourthInput];
  const errorMessages = hooks.map(hook => hook.errorMessage);

  const errorMessage = useLastValidValue({
    checkValues: errorMessages,
    invalidValues: [''],
  });

  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.cardNumbersTitle}
        description={PAYMENTS_MESSAGE.cardNumberDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardNumberLabel}
        errorMessage={errorMessage}
      >
        <TextInputContainer>
          {hooks.map((hook, idx) => (
            <TextInput
              key={idx}
              placeholder={PAYMENTS_INPUT_MESSAGE.cardNumberPlaceHolder}
              onChange={hook.onChange}
              value={hook.input}
              borderColor={hook.errorMessage ? 'error' : undefined}
              aria-invalid={!(hook.errorMessage === '')}
            />
          ))}
        </TextInputContainer>
      </FormItem>
    </section>
  );
}

const useValidatedInputProps = {
  validatorPropsArray: [
    {
      checkIsValid: isOnlyDigit,
      shouldReflect: false,
      errorMessage: ERROR_MESSAGE.notDigit,
    },
    {
      checkIsValid: (string: string) =>
        isUpperLength(string, BOUND.cardNumbersOnePartUpper),
      shouldReflect: true,
      errorMessage: `${BOUND.cardNumbersOnePartUpper}${ERROR_MESSAGE.invalidLengthTail}`,
    },
  ],
  maxLength: BOUND.cardNumbersOnePartUpper,
};
