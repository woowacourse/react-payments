import * as S from './CardExpirationDate.styles';
import Title from '../common/Title/Title';
import Label from '../common/Label/Label';
import Input from '../common/Input/Input';
import Spacing from '../common/Spacing/Spacing';
import ErrorMessage from '../common/ErrorMessage/ErrorMessage';
import { getFirstErrorMessage } from '../../utils';
import { CardExpirationDateProps, DateType } from './type';

export default function CardExpirationDate({
  cardExpirationDate,
  cardExpirationDateErrorMessage,
  handleCardExpirationDateInputChange,
}: CardExpirationDateProps) {
  const CardExpirationDateInputTypes: DateType[] = ['month', 'year'];

  return (
    <div>
      <Title description="월/년도(MMYY)를 순서대로 입력해 주세요.">카드 유효기간을 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-expiration-date">유효기간</Label>
      <Spacing size={8} />
      <S.InputWrapper>
        {CardExpirationDateInputTypes.map((dateType, index) => (
          <Input
            key={dateType}
            type="text"
            autoFocus={index === 0}
            placeholder={dateType === 'month' ? 'MM' : 'YY'}
            maxLength={2}
            id={index === 0 ? 'card-expiration-date' : undefined}
            value={cardExpirationDate[dateType]}
            onChange={(event) =>
              handleCardExpirationDateInputChange({
                value: event.target.value,
                dateType,
              })
            }
            isError={cardExpirationDateErrorMessage[dateType] !== ''}
          />
        ))}
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>{getFirstErrorMessage(cardExpirationDateErrorMessage)}</ErrorMessage>
    </div>
  );
}
