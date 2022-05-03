import { useState } from 'react';
import Head from '../../components/Head';
import Card from '../../components/Card';
import CardNumbersInput from '../../components/CardNumbersInput';
import ExpiredDateInput from '../../components/ExpiredDateInput';
import OwnerNameInput from '../../components/OwnerNameInput';
import SecurityNumberInput from '../../components/SecurityNumberInput';
import LabeledInput from '../../components/LabeledInput';
import SubmitButton from '../../components/SubmitButton';
import Input from '../../components/Input';
import { Page, CardSection, Form, FormRow, SubmitButtonContainer } from './style';
import MESSAGE from '../../constant/message';
import useCardNumbers from '../../hooks/useCardNumbers';
import useExpiredDate from '../../hooks/useExpiredDate';
import useOwnerName from '../../hooks/useOwnerName';
import useSecurityNumber from '../../hooks/useSecurityNumber';
import usePassword from '../../hooks/usePassword';
import useCardAdd from '../../hooks/useCardAdd';

function CardAddPage() {
  const [companyName, setCompanyName] = useState('포코카드');

  const { cardNumbers, isValidCardNumbers, handleChangeCardNumbersInput } = useCardNumbers();
  const { expiredDate, convertedExpiredDate, isValidExpiredDate, handleChangeExpiredDateInput } =
    useExpiredDate();
  const { ownerName, isValidOwnerName, handleChangeOwnerNameInput } = useOwnerName();
  const { securityNumber, isValidSecurityNumber, handleChangeSecurityNumber } = useSecurityNumber();
  const { password, isValidPassword, handleChangePassword } = usePassword();
  const { addCard } = useCardAdd();

  const isAllValidInput = () => {
    return (
      isValidCardNumbers &&
      isValidExpiredDate &&
      isValidOwnerName &&
      isValidSecurityNumber &&
      isValidPassword
    );
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (isAllValidInput()) {
      addCard();
    }
  };

  return (
    <Page>
      <Head title="카드 추가" />
      <CardSection>
        <Card
          companyName={companyName}
          cardNumbers={cardNumbers}
          ownerName={ownerName}
          expiredDate={convertedExpiredDate}
        />
      </CardSection>
      <Form onSubmit={handleSubmit}>
        <CardNumbersInput
          cardNumbers={cardNumbers}
          handleInputChange={handleChangeCardNumbersInput}
          isValid={isValidCardNumbers}
          invalidMessage={MESSAGE.INVALID_CARD_NUMBER}
        />
        <ExpiredDateInput
          expiredDate={expiredDate}
          handleInputChange={handleChangeExpiredDateInput}
          isValid={isValidExpiredDate}
          invalidMessage={MESSAGE.INVALID_EXPIRED_DATE}
          width="137px"
        />
        <OwnerNameInput
          ownerName={ownerName}
          handleInputChange={handleChangeOwnerNameInput}
          isValid={isValidOwnerName}
          invalidMessage={MESSAGE.INVALID_OWNER_NAME}
        />
        <SecurityNumberInput
          securityNumber={securityNumber}
          handleInputChange={handleChangeSecurityNumber}
          isValid={isValidSecurityNumber}
          invalidMessage={MESSAGE.INVALID_SECURITY_NUMBER}
        />
        <FormRow alignItems="flex-end" gap={'4px'}>
          <LabeledInput
            value={password}
            handleInputChange={handleChangePassword}
            countInput={2}
            invalidMessage={MESSAGE.INVALID_PASSWORD}
            inputProps={{
              type: 'password',
              width: '43px',
              maxLength: 1,
              isValid: isValidPassword,
            }}
            inputLabelProps={{
              label: '카드 비밀번호',
            }}
          />
          {Array.from({ length: 2 }).map((_, index) => (
            <Input
              key={index}
              type="password"
              defaultValue="."
              width="43px"
              maxLength={1}
              disabled={true}
              backgroundColor="#fff"
            />
          ))}
        </FormRow>
        <SubmitButtonContainer>
          <SubmitButton label="다음" width={'51px'} height={'34px'} hidden={!isAllValidInput()} />
        </SubmitButtonContainer>
      </Form>
    </Page>
  );
}

export default CardAddPage;
