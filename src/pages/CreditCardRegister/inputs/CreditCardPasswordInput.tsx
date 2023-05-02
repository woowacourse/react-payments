import useCreditCardForm from 'hooks/useCreditCardForm';
import FlexBox from 'components/FlexBox';
import Input from '../../../components/Input';
import * as S from '../style';
import { validatePassword } from '../../../domains/validations';

function CreditCardPasswordInput() {
  const { creditCardForm, handleCreditCardPasswordChange } =
    useCreditCardForm();

  const isError =
    (creditCardForm.password[0].length > 0 ||
      creditCardForm.password[1].length > 0) &&
    !validatePassword(creditCardForm.password[0], creditCardForm.password[1]);

  return (
    <div>
      <S.CreditCardRegisterLabel>카드 비밀번호</S.CreditCardRegisterLabel>
      <FlexBox justifyContent="flex-start">
        <Input
          type="password"
          value={creditCardForm.password[0]}
          width="48px"
          textAlign="center"
          name="first"
          onChange={handleCreditCardPasswordChange}
        />
        <Input
          type="password"
          value={creditCardForm.password[1]}
          width="48px"
          textAlign="center"
          name="second"
          onChange={handleCreditCardPasswordChange}
        />
        <S.PasswordBox>•</S.PasswordBox>
        <S.PasswordBox>•</S.PasswordBox>
      </FlexBox>
      {isError && (
        <S.ErrorMessage>
          비밀 번호는 앞 2자리를 입력하셔야 합니다.
        </S.ErrorMessage>
      )}
    </div>
  );
}

export default CreditCardPasswordInput;
