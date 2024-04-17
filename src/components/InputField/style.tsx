import styled from "styled-components";

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
`;

const InputFieldWrapper = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

const InputsWrapper = styled.div`
  display: flex;
  gap: 8px;
  height: 32px;
`;

const ErrorMessageWrapper = styled.div`
  font-size: 9.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLOR.error};
  height: 14px;
`;

const S = { Label, InputsWrapper, ErrorMessageWrapper, InputFieldWrapper };

export default S;
