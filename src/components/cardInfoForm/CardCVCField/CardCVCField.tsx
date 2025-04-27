import styled from '@emotion/styled';
import Input from '../../common/Input/Input';

interface CardCVCFieldProps {
  cardCVC: string;
  isError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CardCVCField({ isError, cardCVC, onChange }: CardCVCFieldProps) {
  return (
    <div>
      <Label htmlFor="CardCVC">CVC</Label>
      <InputWrapper>
        <Input
          isError={isError}
          type="tel"
          name="CardCVC"
          id="CardCVC"
          value={cardCVC}
          aria-labelledby="CardCVC"
          onChange={onChange}
          placeholder="123"
          maxLength={3}
          regexString={/^\d*$/}
          autoFocus={true}
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
