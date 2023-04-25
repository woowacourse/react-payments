import styled from 'styled-components';

export const PreviewCreditCard = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const CreditCardRegisterForm = styled.form`
  display: grid;
  row-gap: 30px;
`;

export const Box = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

type RegisterButtonType = {
  disabled: boolean;
};

export const RegisterButton = styled.button<RegisterButtonType>`
  font-weight: 700;
  cursor: ${(props) => (props.disabled ? 'pointer' : 'not-allowed')};
`;
