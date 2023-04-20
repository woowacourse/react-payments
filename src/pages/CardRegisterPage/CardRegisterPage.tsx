import CardNumberInputBox from '../../components/CardNumberInputBox/CardNumberBox';
import ExpirationDateInputBox from '../../components/ExpirationDateInputBox/ExpirationDateInputBox';
import OwnerNameInputBox from '../../components/OwnerNameInputBox/OwnerNameInputBox';
import PasswordInputBox from '../../components/PasswordInputBox/PasswordInputBox';
import SecurityCodeInputBox from '../../components/SecurityCodeInputBox/SecurityCodeInputBox';

import * as styled from './CardRegisterPage.styled';

const CardRegisterPage = () => {
  return (
    <>
      {/* <Header />
      <Card /> */}
      <styled.CardRegisterForm>
        <CardNumberInputBox />
        <ExpirationDateInputBox />
        <OwnerNameInputBox />
        <SecurityCodeInputBox />
        <PasswordInputBox />
      </styled.CardRegisterForm>
    </>
  );
};

export default CardRegisterPage;
