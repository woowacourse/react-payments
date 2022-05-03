import React from 'react';
import LabeledInput from '.';
import MESSAGE from '../../constant/message';
import useCardNumbers from '../../hooks/useCardNumbers';
import useExpiredDate from '../../hooks/useExpiredDate';
import useOwnerName from '../../hooks/useOwnerName';
import usePassword from '../../hooks/usePassword';
import useSecurityNumber from '../../hooks/useSecurityNumber';

export default {
  title: 'Payment/LabeledInput',
  component: LabeledInput,
};

export const CardNumbers = args => {
  const { convertedCardNumbers, isValidCardNumbers, handleChangeCardNumbersInput } =
    useCardNumbers();

  return (
    <LabeledInput
      value={convertedCardNumbers.join('-')}
      handleInputChange={handleChangeCardNumbersInput}
      invalidMessage={MESSAGE.INVALID_CARD_NUMBER}
      inputProps={{
        type: 'text',
        width: '318px',
        maxLength: 19,
        placeholder: 'ex. 0000-0000-0000-0000',
        isValid: isValidCardNumbers,
      }}
      inputLabelProps={{
        label: '카드 번호',
      }}
      {...args}
    />
  );
};

export const ExpiredDate = args => {
  const { convertedExpiredDate, isValidExpiredDate, handleChangeExpiredDateInput } =
    useExpiredDate();

  return (
    <LabeledInput
      value={convertedExpiredDate}
      handleInputChange={handleChangeExpiredDateInput}
      invalidMessage={MESSAGE.INVALID_EXPIRED_DATE}
      inputProps={{
        type: 'text',
        width: '137px',
        isCenter: true,
        maxLength: 5,
        placeholder: 'MM / YY',
        isValid: isValidExpiredDate,
      }}
      inputLabelProps={{
        label: '만료일',
      }}
      {...args}
    />
  );
};

export const OwnerName = args => {
  const { ownerName, isValidOwnerName, handleChangeOwnerNameInput } = useOwnerName();
  return (
    <LabeledInput
      value={ownerName}
      handleInputChange={handleChangeOwnerNameInput}
      invalidMessage={MESSAGE.INVALID_OWNER_NAME}
      headerWidth="318px"
      isShowLengthChecker={true}
      inputProps={{
        type: 'text',
        width: '318px',
        placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
        isCenter: false,
        maxLength: 30,
        isValid: isValidOwnerName,
      }}
      inputLabelProps={{
        label: '카드 소유자 이름(선택)',
      }}
      {...args}
    />
  );
};

export const SecurityNumber = args => {
  const { securityNumber, isValidSecurityNumber, handleChangeSecurityNumber } = useSecurityNumber();
  return (
    <LabeledInput
      value={securityNumber}
      handleInputChange={handleChangeSecurityNumber}
      invalidMessage={MESSAGE.INVALID_SECURITY_NUMBER}
      inputProps={{
        type: 'password',
        width: '84px',
        maxLength: 3,
        isValid: isValidSecurityNumber,
      }}
      inputLabelProps={{
        label: '보안 코드(CVC/CVV)',
      }}
      {...args}
    />
  );
};

export const Password = args => {
  const { password, isValidPassword, handleChangePassword } = usePassword();
  return (
    <LabeledInput
      value={password}
      handleInputChange={handleChangePassword}
      invalidMessage={MESSAGE.INVALID_PASSWORD}
      countInput={2}
      inputProps={{
        type: 'password',
        width: '43px',
        maxLength: 1,
        isValid: isValidPassword,
      }}
      inputLabelProps={{
        label: '카드 비밀번호',
      }}
      {...args}
    />
  );
};
