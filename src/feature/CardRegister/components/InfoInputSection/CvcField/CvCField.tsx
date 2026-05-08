import Input from '../../../../../common/components/Input/Input';
import styled from 'styled-components';
import type {useCvcNumber} from '../../../hooks/useCvcNumber';

type Props = ReturnType<typeof useCvcNumber>;

const CvcField = ({cvcNumber, firstErrorIdx, errorMsg, handleChange, handleBlur}: Props) => {
  return (
    <StyledField>
      <InputWrapper>
        <CvcInput
          value={cvcNumber}
          maxLength={3}
          inputMode='numeric'
          placeholder='123'
          strokeMode={0 === firstErrorIdx ? 'error' : 'default'}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value)}
        />
      </InputWrapper>
      <ErrorMessage>{errorMsg}</ErrorMessage>
    </StyledField>
  );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

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

const ErrorMessage = styled.span`
  min-height: 20px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;

export default CvcField;
