import styled from "styled-components";
import CardNumberInput from "./CardNumberInput";
import ExpirationDateInput from "./ExpirationDateInput";
import NameInput from "./NameInput";
import PasswordInput from "./PasswordInput";
import SecurityCodeInput from "./SecurityCodeInput";

const CardRegisterForm = () => {
  return (
    <form>
      <CardNumberInput />
      <ExpirationDateInput />
      <NameInput />
      <SecurityCodeInput />
      <PasswordInput />
      <S.Button>다음</S.Button>
    </form>
  );
};

const S = {
  Button: styled.button`
    display: flex;
    margin: 34px 0 0 auto;
    padding: 10px 16px;
    border: 1px solid #000;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    background: none;
  `,
};

export default CardRegisterForm;
