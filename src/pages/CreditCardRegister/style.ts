import styled from 'styled-components';

export const PreviewCreditCard = styled.div`
  display: grid;
  grid-template-rows: auto 18px;
  justify-content: center;
  row-gap: 10px;
  margin-bottom: 25px;
`;

export const ReSelectCardCompanyButton = styled.button`
  justify-self: flex-end;
  font-size: 12px;
  color: #666565;
  cursor: pointer;
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
