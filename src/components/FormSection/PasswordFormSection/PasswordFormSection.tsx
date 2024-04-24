import { useRef } from 'react';

import FormSection from '../FormSection';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import usePasswordFormSection from '../../../hook/usePasswordFormSection';

import OPTION from '../../../constants/option';

interface PasswordFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const PasswordFormSection = (props: PasswordFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props
  const ref = useRef<HTMLInputElement>(null)
  const [onChange, handleOnFocus, handleOnBlur] = usePasswordFormSection({ cardInfo, dispatchCardInfo, ref })

  const PasswordForm = (
    <PaymentsInputField
      ref={ref}
      className="password-form-section"
      placeholder="123"
      maxLength={OPTION.passwordMaxLength}
      value={cardInfo.password.value}
      hasError={cardInfo.password.errorMessage.length !== 0}
      handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      handleOnFocus={handleOnFocus}
      handleOnBlur={handleOnBlur}
      autoFocus={true}
    />
  )

  return (
    <FormSection title="비밀번호를 입력해 주세요" subTitle="앞의 2자리를 입력해주세요" label="비밀번호 앞 2자리" errorMessage={cardInfo.password.errorMessage} Children={PasswordForm} />
  );
};

export default PasswordFormSection;
