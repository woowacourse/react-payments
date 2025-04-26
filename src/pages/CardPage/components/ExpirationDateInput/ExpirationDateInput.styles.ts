import styled from '@emotion/styled';

const StyledExpirationDateInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
`;

const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const StyledHelperTextWrapper = styled.div`
  height: 30px;
`;

export { StyledExpirationDateInput, StyledLabel, StyledInputWrapper, StyledHelperTextWrapper };
