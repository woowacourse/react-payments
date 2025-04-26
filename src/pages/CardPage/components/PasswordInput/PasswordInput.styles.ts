import styled from '@emotion/styled';

const StyledCardNumberInput = styled.div`
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
`;

const StyledHelperTextWrapper = styled.div`
  height: 30px;
`;

export { StyledCardNumberInput, StyledLabel, StyledInputWrapper, StyledHelperTextWrapper };
