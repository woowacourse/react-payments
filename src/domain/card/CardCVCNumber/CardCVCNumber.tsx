import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import Input from '../../../components/Input/Input';
import Label from '../../../components/Label/Label';
import Spacing from '../../../components/Spacing/Spacing';
import Title from '../../../components/Title/Title';
import { CardCVCNumberProps } from './types';

export default function CardCVCNumber({
  cardCVCNumber,
  cardCVCNumberErrorMessage,
  handleCardCVCNumberInputChange,
}: CardCVCNumberProps) {
  return (
    <div>
      <Title>CVC 번호를 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-cvc-number">CVC</Label>
      <Spacing size={8} />
      <div>
        <Input
          type="text"
          placeholder="123"
          maxLength={3}
          autoFocus
          id="card-cvc-number"
          value={cardCVCNumber}
          onChange={(event) => handleCardCVCNumberInputChange(event.target.value)}
          isError={cardCVCNumberErrorMessage !== ''}
        />
      </div>
      <Spacing size={8} />
      <ErrorMessage>{cardCVCNumberErrorMessage}</ErrorMessage>
    </div>
  );
}
