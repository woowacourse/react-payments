import styled from "styled-components";

const CardFormWrapper = styled.div`
  width: 315px;
`;

const InputFieldWithInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ErrorMessageWrapper = styled.div`
  font-size: 9.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLOR.error};
  height: 14px;
`;

const S = {
  CardFormWrapper,
  InputFieldWithInfo,
  ErrorMessageWrapper,
};

export default S;
