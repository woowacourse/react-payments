import Title from '../common/Title/Title';
import Label from '../common/Label/Label';
import Input from '../common/Input/Input';
import Spacing from '../common/Spacing/Spacing';
import ErrorMessage from '../common/ErrorMessage/ErrorMessage';
import { Dispatch, SetStateAction } from 'react';
import { ERROR_MESSAGE } from '../../constants';
import { SequenceType } from '../../types';
import * as S from './CardNumber.styles';
import { getErrorMessageFromObject } from '../../utils/message';
import { checkAllNumber } from '../../utils/validation';

interface CardNumberProps {
  cardNumber: Record<SequenceType, string>;
  setCardNumber: Dispatch<SetStateAction<Record<SequenceType, string>>>;
  cardNumberErrorMessage: Record<SequenceType, string>;
  setCardNumberErrorMessage: Dispatch<SetStateAction<Record<SequenceType, string>>>;
}

interface HandleInputChangeParams {
  sequence: SequenceType;
  value: string;
}

export default function CardNumber({
  cardNumber,
  setCardNumber,
  cardNumberErrorMessage,
  setCardNumberErrorMessage,
}: CardNumberProps) {
  const handleInputChange = ({ value, sequence }: HandleInputChangeParams) => {
    if (!checkAllNumber(value)) return;

    setCardNumber({ ...cardNumber, [sequence]: value });

    if (value.length < 4)
      setCardNumberErrorMessage({ ...cardNumberErrorMessage, [sequence]: ERROR_MESSAGE.cardNumber.length });
    else setCardNumberErrorMessage({ ...cardNumberErrorMessage, [sequence]: '' });
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
      <ErrorMessage>{getErrorMessageFromObject(cardNumberErrorMessage)}</ErrorMessage>
    </div>
  );
}
