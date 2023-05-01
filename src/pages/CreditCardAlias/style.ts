import styled from 'styled-components';

export const CreditCardAlias = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    align-self: flex-end;
  }
`;

export const CompleteMessage = styled.span`
  margin-top: 80px;
  margin-bottom: 35px;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #383838;
`;

export const AliasInputLayout = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  width: 80%;
  display: grid;
  row-gap: 10px;
  justify-items: flex-end;
  input {
    width: 100%;
    margin: 0;
  }
`;
