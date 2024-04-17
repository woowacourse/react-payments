import styled from "styled-components";

const InputsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  height: 32px;
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

const S = { InputsWrapper, InputBox, ErrorMessageWrapper };

export default S;
