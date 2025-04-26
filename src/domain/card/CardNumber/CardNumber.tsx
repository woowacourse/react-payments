import * as S from './CardNumber.styles';
import { getFirstErrorMessage } from '../../../utils';
import { CardNumberProps, SequenceType } from './type';
import Title from '../../../components/Title/Title';
import Spacing from '../../../components/Spacing/Spacing';
import Label from '../../../components/Label/Label';
import Input from '../../../components/Input/Input';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

export default function CardNumber({
  cardNumber,
  cardNumberErrorMessage,
  handleCardNumberInputChange,
}: CardNumberProps) {
  const cardNumberInputSequences: SequenceType[] = ['first', 'second', 'third', 'fourth'];

  return (
    <div>
      <Title description="본인 명의의 카드만 결제 가능합니다.">결제할 카드 번호를 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-number">카드 번호</Label>
      <Spacing size={8} />
      <S.InputWrapper>
        {cardNumberInputSequences.map((sequence, index) => (
          <Input
            key={sequence}
            type="text"
            autoFocus={index === 0}
            placeholder="1234"
            maxLength={4}
            id={index === 0 ? 'card-number' : undefined}
            value={cardNumber[sequence]}
            onChange={(event) => {
              handleCardNumberInputChange({
                value: event.target.value,
                sequence,
              });
            }}
            isError={cardNumberErrorMessage[sequence] !== ''}
          />
        ))}
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>{getFirstErrorMessage(cardNumberErrorMessage)}</ErrorMessage>
    </div>
  );
}
