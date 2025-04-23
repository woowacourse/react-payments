import Title from '../common/Title/Title';
import Label from '../common/Label/Label';
import Input from '../common/Input/Input';
import Spacing from '../common/Spacing/Spacing';
import ErrorMessage from '../common/ErrorMessage/ErrorMessage';
import { CardCVCNumberProps } from './type';

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
