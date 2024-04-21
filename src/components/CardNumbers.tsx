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
import { useEffect } from 'react';
import useLastValidValue from '../hooks/useLastValidValue';
import useValidateInput from '../hooks/useValidateInput';

export default function CardNumbers({
  setCardNumbers,
}: {
  setCardNumbers: React.Dispatch<React.SetStateAction<CardNumbersType>>;
}) {
  const firstInput = useValidateInput(useValidatedInputProps);
  const secondInput = useValidateInput(useValidatedInputProps);
  const thirdInput = useValidateInput(useValidatedInputProps);
  const fourthInput = useValidateInput(useValidatedInputProps);

  const hooks = [firstInput, secondInput, thirdInput, fourthInput];
  const inputs = hooks.map(hook => hook.input);
  const errorMessages = hooks.map(hook => hook.errorMessage);

  const errorMessage = useLastValidValue({
    checkValues: errorMessages,
    invalidValues: [''],
  });

  useEffect(() => {
    if (setCardNumbers)
      setCardNumbers([
        firstInput.input,
        secondInput.input,
        thirdInput.input,
        fourthInput.input,
      ]);
  }, inputs);

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
              maxLength={BOUND.cardNumbersOnePartUpper}
              borderColor={hook.errorMessage ? 'error' : undefined}
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
