import styled from "styled-components";
import CardNumberInput from "./FormInputs/CardNumberInput";
import ExpirationDateInput from "./FormInputs/ExpirationDateInput";
import NameInput from "./FormInputs/NameInput";
import PasswordInput from "./FormInputs/PasswordInput";
import SecurityCodeInput from "./FormInputs/SecurityCodeInput";
import CardPreview from "./CardPreview";

const CardRegisterForm = () => {
  return (
    <div>
      <CardPreview />

      <form>
        <CardNumberInput />
        <ExpirationDateInput />
        <NameInput />
        <SecurityCodeInput />
        <PasswordInput />

        <S.Button>다음</S.Button>
      </form>
    </div>
  );
};

const S = {
  Button: styled.button`
    display: flex;
    margin: 38px 0 30px auto;
    padding: 10px 16px;
    color: var(--darken-color);
    border: 1px solid var(--darken-color);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    background: none;
    cursor: pointer;
  `,
};

export default CardRegisterForm;
