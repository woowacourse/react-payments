import * as S from './CardNumber.styles';
import Title from './common/Title';
import Label from './common/Label';
import Input from './common/Input';
import Spacing from './common/Spacing';
import ErrorMessage from './common/ErrorMessage';
import { Dispatch, SetStateAction } from 'react';
import { ERROR_MESSAGE } from '../constants';

interface CardNumberProps {
  cardNumber: Record<SequenceType, string>;
  setCardNumber: Dispatch<SetStateAction<Record<SequenceType, string>>>;
  cardNumberErrorMessage: Record<SequenceType, string>;
  setCardNumberErrorMessage: Dispatch<SetStateAction<Record<SequenceType, string>>>;
}

export type SequenceType = 'first' | 'second' | 'third' | 'fourth';

interface HandleInputChangeProps {
  sequence: SequenceType;
  value: string;
}

export default function CardNumber({
  cardNumber,
  setCardNumber,
  cardNumberErrorMessage,
  setCardNumberErrorMessage,
}: CardNumberProps) {
  const handleInputChange = ({ value, sequence }: HandleInputChangeProps) => {
    setCardNumber({ ...cardNumber, [sequence]: value });

    if (/^[0-9]*$/.test(value)) {
      setCardNumberErrorMessage({ ...cardNumberErrorMessage, [sequence]: '' });
      return;
    }

    setCardNumberErrorMessage({ ...cardNumberErrorMessage, [sequence]: ERROR_MESSAGE.onlyNumber });
  };

  return (
    <div>
      <Title description="본인 명의의 카드만 결제 가능합니다.">결제할 카드 번호를 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-number">카드 번호</Label>
      <Spacing size={8} />
      <S.InputWrapper>
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.first}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              sequence: 'first',
            })
          }
          isError={cardNumberErrorMessage.first !== ''}
        />
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.second}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              sequence: 'second',
            })
          }
          isError={cardNumberErrorMessage.second !== ''}
        />
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.third}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              sequence: 'third',
            })
          }
          isError={cardNumberErrorMessage.third !== ''}
        />
        <Input
          placeholder="1234"
          maxLength={4}
          value={cardNumber.fourth}
          onChange={(event) =>
            handleInputChange({
              value: event.target.value,
              sequence: 'fourth',
            })
          }
          isError={cardNumberErrorMessage.fourth !== ''}
        />
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>
        {
          Object.entries(cardNumberErrorMessage)
            .filter(([_, errorMassage]) => errorMassage !== '')
            .at(0)?.[1]
        }
      </ErrorMessage>
    </div>
  );
}
