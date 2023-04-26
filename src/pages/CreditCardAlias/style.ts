import styled from 'styled-components';

export const CreditCardAlias = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  row-gap: 20px;
  button {
    justify-self: flex-end;
  }
`;

export const CompleteMessage = styled.span`
  align-self: flex-end;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #383838;
`;

export const AliasInputLayout = styled.div`
  width: 80%;
  display: grid;
  row-gap: 10px;
  justify-items: flex-end;
  input {
    width: 100%;
    margin: 0;
  }
`;
