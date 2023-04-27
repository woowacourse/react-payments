import * as styled from './CardRegisterForm.styled';
import CardNumberInputBox from '../CardNumberInputBox/CardNumberInputBox';
import ExpirationDateInputBox from '../ExpirationDateInputBox/ExpirationDateInputBox';
import OwnerNameInputBox from '../OwnerNameInputBox/OwnerNameInputBox';
import PasswordInputBox from '../PasswordInputBox/PasswordInputBox';
import SecurityCodeInputBox from '../SecurityCodeInputBox/SecurityCodeInputBox';
import CardInfoSubmitButtonContainer from '../CardInfoSubmitButtonContainer/CardInfoSubmitButtonContainer';

const CardRegisterForm = () => {
  return (
    <styled.CardRegisterForm>
      <CardNumberInputBox />
      <ExpirationDateInputBox />
      <OwnerNameInputBox />
      <SecurityCodeInputBox />
      <PasswordInputBox />
      <CardInfoSubmitButtonContainer />
    </styled.CardRegisterForm>
  );
};

export default CardRegisterForm;
