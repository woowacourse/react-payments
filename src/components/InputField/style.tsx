import styled from "styled-components";

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
`;

const InputFieldWrapper = styled.div`
  background-color: pink;
`;

const InputsWrapper = styled.div`
  display: flex;
  gap: 8px;
  height: 32px;
`;

const ErrorMessageWrapper = styled.div`
  font-family: Noto Sans KR;
  font-size: 9.5px;
  font-weight: 400;
`;

const S = { Label, InputsWrapper, ErrorMessageWrapper, InputFieldWrapper };

export default S;
