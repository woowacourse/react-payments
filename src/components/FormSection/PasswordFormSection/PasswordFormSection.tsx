import { useRef } from 'react';

import FormSection from '../FormSection';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import usePasswordFormSection from '../../../hook/usePasswordFormSection';

import OPTION from '../../../constants/option';

interface PasswordFormSectionProps {
  cardInfo: CardInfo
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const PasswordFormSection = (props: PasswordFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props
  const ref = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>

  const updateValue = (password: string) => {
    dispatchCardInfo({ type: 'SET_CARD_PASSWORD_VALUE', value: password })
  }

  const updateComplete = () => {
    dispatchCardInfo({ type: 'SET_CARD_PASSWORD_COMPLETED', value: true })
  }

  const { errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler, } = usePasswordFormSection({
      ref,
      value: cardInfo.cvc.value,
      updateValue,
      updateComplete,
    })

  const PasswordForm = (
    <PaymentsInputField
      ref={ref}
      className="password-form-section"
      placeholder="12"
      maxLength={OPTION.passwordMaxLength}
      value={cardInfo.password.value}
      hasError={errorMessage.length !== 0}
      handleValueChange={onChangeHandler}
      handleOnBlur={onBlurHandler}
      handleOnFocus={onFocusHandler}
      autoFocus={true}
      type='password'
    />
  )

  return (
    <FormSection title="비밀번호를 입력해 주세요" subTitle="앞의 2자리를 입력해주세요" label="비밀번호 앞 2자리" errorMessage={errorMessage} Children={PasswordForm} />
  );
};

export default PasswordFormSection;
