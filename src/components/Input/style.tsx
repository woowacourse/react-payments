import styled from "styled-components";

const InputsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  gap: 8px;
`;

const InputBox = styled.input`
  border: 1px solid #acacac;
  padding: 8px;
  border-radius: 2px;
  font-size: 11px;
`;

const ErrorMessageWrapper = styled.div`
  font-family: Noto Sans KR;
  font-size: 9.5px;
  font-weight: 400;
`;

export default { InputsWrapper, InputBox };
