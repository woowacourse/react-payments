import styled from '@emotion/styled';
import Input from '../../common/Input/Input';

interface CardCVCFieldProps {
  cardCVC: string;
  hasError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CardCVCField({ hasError, cardCVC, onChange }: CardCVCFieldProps) {
  return (
    <div>
      <Label htmlFor="CardCVC">CVC</Label>
      <InputWrapper>
        <Input
          hasError={hasError}
          type="tel"
          name="CardCVC"
          id="CardCVC"
          value={cardCVC}
          onChange={onChange}
          placeholder="123"
          min={0}
          max={999}
          autoFocus={cardCVC.length === 0 && !hasError}
        />
      </InputWrapper>
    </div>
  );
}

export default CardCVCField;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;
const Label = styled.label`
  font-size: 12px;
`;
