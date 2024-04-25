import TextField from '@components/common/TextField/TextField';
import CardNumberInput from '@components/payments/@cardRegister/@cardNumber/CardNumberInput/CardNumberInput';

import { useFocusInputs, useUUID } from '@hooks/index';

interface CardNumberTextFieldProps {
  isCardNumberError: boolean;
  cardNumbers: string[];
  onAddCardNumber: (index: number, value: string) => void;
  cardNumberError: { errorConditions: boolean[]; errorMessage: string };
}

const CardNumberTextField: React.FC<CardNumberTextFieldProps> = ({
  isCardNumberError,
  cardNumbers,
  onAddCardNumber,
  cardNumberError,
}) => {
  const { inputsRef, focusInputByIndex } = useFocusInputs(cardNumbers.length);

  const { current: uuids } = useUUID(cardNumbers.length);
  return (
    <section>
      <TextField.Title title="결제할 카드 번호를 입력해 주세요" />
      <TextField.SubTitle subTitle="본인 명의의 카드만 결제 가능합니다." />
      <TextField.Label htmlFor="cardNumber" labelText="카드 번호" />
      <TextField.Content>
        {cardNumbers.map((cardNumber, index) => (
          <CardNumberInput
            key={uuids[index]}
            refCallback={(element) => {
              inputsRef.current[index] = element;
            }}
            id={index === 0 ? 'cardNumber' : ''}
            isError={cardNumberError.errorConditions[index]}
            value={cardNumber}
            onAddCardNumber={(event) => {
              onAddCardNumber(index, String(event.target.value));

              const isMaxLength = event.target.value.replace(/\D/, '').length === event.target.maxLength;
              if (isMaxLength) focusInputByIndex(index + 1);
            }}
          />
        ))}
      </TextField.Content>
      <TextField.ErrorText isError={isCardNumberError} errorText={cardNumberError.errorMessage} />
    </section>
  );
};

export default CardNumberTextField;
