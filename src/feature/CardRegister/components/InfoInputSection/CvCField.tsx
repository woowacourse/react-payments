import Label from '../../../../common/components/Label';
import Input from '../../../../common/components/Input';
import styled from 'styled-components';
import type { CvcFieldType } from '../../hooks/useCvcField';

const CvcField = ({
  autoFocus = false,
  field,
}: {
  autoFocus?: boolean;
  field: CvcFieldType;
}) => {
  return (
    <StyledField>
      <Label value="CVC" />
      <InputWrapper>
        <CvcInput
          value={field.cvcNumber}
          autoFocus={autoFocus}
          maxLength={3}
          inputMode="numeric"
          placeholder="123"
          strokeMode={field.hasError ? 'error' : 'default'}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={() => field.handleBlur()}
        />
      </InputWrapper>
      <ErrorMessage>{field.errorMessage}</ErrorMessage>
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
