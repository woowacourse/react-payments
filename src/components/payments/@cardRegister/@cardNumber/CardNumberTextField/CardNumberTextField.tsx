import { CardNumberInputs } from '@components/payments/@cardRegister';

import { TextField } from '@components/common';

export interface CardNumberTextFieldProps {
  isCardNumberError: boolean;
  cardNumbers: string[];
  onAddCardNumber: (index: number, value: string) => void;
  cardNumberError: { errorConditions: boolean[]; errorMessage: string };
}

const CardNumberTextField: React.FC<CardNumberTextFieldProps> = ({
  isCardNumberError,
  cardNumbers,
  cardNumberError,
  onAddCardNumber,
}) => {
  return (
    <section>
      <TextField.Title title="결제할 카드 번호를 입력해 주세요" />
      <TextField.SubTitle subTitle="본인 명의의 카드만 결제 가능합니다." />
      <TextField.Label htmlFor="cardNumber" labelText="카드 번호" />
      <TextField.Content>
        <CardNumberInputs
          cardNumbers={cardNumbers}
          onAddCardNumber={onAddCardNumber}
          cardNumberError={cardNumberError}
        />
      </TextField.Content>
      <TextField.ErrorText isError={isCardNumberError} errorText={cardNumberError.errorMessage} />
    </section>
  );
};

export default CardNumberTextField;
