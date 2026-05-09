import Input from '../../../../../common/components/Input/Input';
import styled from 'styled-components';
import {StyledField, ErrMessage} from '../fieldStyles';
type Props = {
  cvcNumber: string;
  firstErrIdx: number;
  errMsg: string;
  handleChange: (value: string) => void;
  handleBlur: (value: string) => void;
};

const CvcField = ({cvcNumber, firstErrIdx, errMsg, handleChange, handleBlur}: Props) => {
  return (
    <StyledField>
      <InputWrapper>
        <CvcInput
          value={cvcNumber}
          maxLength={3}
          inputMode='numeric'
          placeholder='123'
          strokeMode={firstErrIdx === 0 ? 'error' : 'default'}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value)}
        />
      </InputWrapper>
      <ErrMessage>{errMsg}</ErrMessage>
    </StyledField>
  );
};


const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
`;

const CvcInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;


export default CvcField;
