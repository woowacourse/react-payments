import Input from '../../../../../common/components/Input/Input';
import Label from '../../../../../common/components/Label/Label';
import type {CardNumbersType} from '../../../../../common/types/CardInfoType';
import styled from 'styled-components';

type Props = {
  cardNumbers: CardNumbersType;
  firstErrorIdx: number;
  errorMsg: string;
  onChange: (index: number, value: string) => void;
  onBlur: (index: number, value: string) => void;
};

const NumberField = ({cardNumbers, firstErrorIdx, errorMsg, onChange, onBlur}: Props) => {
  return (
    <StyledField>
      <Label value='카드 번호' />
      <InputWrapper>
        {cardNumbers.map((chunk, index) => (
          <CardNumberInput
            key={index}
            value={chunk}
            placeholder='1234'
            inputMode='numeric'
            maxLength={4}
            strokeMode={index === firstErrorIdx ? 'error' : 'default'}
            onChange={(e) => onChange(index, e.target.value)}
            onBlur={(e) => onBlur(index, e.target.value)}
          />
        ))}
      </InputWrapper>

      <ErrorMessage>{errorMsg}</ErrorMessage>
    </StyledField>
  );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 12px;

  width: 100%;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
`;

const CardNumberInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

const ErrorMessage = styled.span`
  min-height: 20px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;

export default NumberField;
