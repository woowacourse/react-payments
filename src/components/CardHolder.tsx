import {
  ERROR_MESSAGE,
  PAYMENTS_INPUT_MESSAGE,
  PAYMENTS_MESSAGE,
} from '../constants/message';

import { BOUND } from '../constants/number';
import FormItem from './FormItem';
import SectionTitle from './SectionTitle';
import TextInput from './TextInput';
import TextInputContainer from './InputContainer';
import { isOnlyEnglishOrSpace } from '../domain/checkIsValid';
import useValidateInput from '../hooks/useValidateInput';

export default function CardHolder({
  setCardHolder,
}: {
  setCardHolder: React.Dispatch<React.SetStateAction<string>>;
}) {
  const {
    input: holder,
    onChange,
    errorMessage,
  } = useValidateInput({ ...useValidateInputProps, setHook: setCardHolder });

  return (
    <section>
      <SectionTitle title={PAYMENTS_MESSAGE.cardHolderTitle} />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.cardHolderLabel}
        errorMessage={errorMessage}
      >
        <TextInputContainer>
          <TextInput
            placeholder={PAYMENTS_INPUT_MESSAGE.cardHolderPlaceHolder}
            onChange={onChange}
            value={holder}
            borderColor={errorMessage ? 'error' : undefined}
          />
        </TextInputContainer>
      </FormItem>
    </section>
  );
}

const useValidateInputProps = {
  decorateValue: (string: string) => string.toUpperCase(),
  validatorPropsArray: [
    {
      checkIsValid: isOnlyEnglishOrSpace,
      shouldReflect: false,
      errorMessage: ERROR_MESSAGE.notEnglishOrSpace,
    },
  ],
  maxLength: BOUND.cardHolderLengthUpper,
};
