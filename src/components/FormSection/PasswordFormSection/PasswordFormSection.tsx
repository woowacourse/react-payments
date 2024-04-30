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

  const updateCardInfo = (password: string) => {
    dispatchCardInfo({ type: 'SET_CARD_PASSWORD_VALUE', value: password })
  }

  const onComplete = () => {
    dispatchCardInfo({ type: 'SET_CARD_PASSWORD_COMPLETED', value: true })
  }

  const { error, handleChange } = usePasswordFormSection({ cardInfo, updateCardInfo, onComplete, ref })

  const PasswordForm = (
    <PaymentsInputField
      ref={ref}
      className="password-form-section"
      placeholder="12"
      maxLength={OPTION.passwordMaxLength}
      value={cardInfo.password.value}
      hasError={error.length !== 0}
      handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      autoFocus={true}
      type='password'
    />
  )

  return (
    <FormSection title="비밀번호를 입력해 주세요" subTitle="앞의 2자리를 입력해주세요" label="비밀번호 앞 2자리" errorMessage={error} Children={PasswordForm} />
  );
};

export default PasswordFormSection;
