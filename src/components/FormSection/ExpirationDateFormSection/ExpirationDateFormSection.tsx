import { useRef } from 'react';

import FormSection from '../FormSection';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import useExpirationDateFormSection from '../../../hook/useExpirationDateFormSection';

import OPTION from '../../../constants/option';

interface ExpirationDateFormSectionProps {
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const ExpirationDateFormSection = (props: ExpirationDateFormSectionProps) => {
  const { dispatchCardInfo } = props
  const refs = useRef(new Array(OPTION.expirationDateInputCount).fill(null));
  const { values, error, hasErrors, handleChange } = useExpirationDateFormSection({ dispatchCardInfo, refs })

  const ExpirationDateForm = (
    <>
      <PaymentsInputField
        ref={(input) => refs.current[0] = input}
        placeholder="MM"
        maxLength={OPTION.expirationDateMaxLength}
        value={values[0]}
        hasError={hasErrors[0]}
        handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 0)}
        autoFocus={true}
      />
      <PaymentsInputField
        ref={(input) => refs.current[1] = input}
        placeholder="YY"
        maxLength={OPTION.expirationDateMaxLength}
        value={values[1]}
        hasError={hasErrors[1]}
        handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 1)}
      />
    </>)

  return (
    <FormSection title="카드 유효기간을 입력해 주세요"
      subTitle="월/년도(MM/YY)를 순서대로 입력해 주세요."
      label="유효기간"
      errorMessage={error}
      Children={ExpirationDateForm} />
  );
};

export default ExpirationDateFormSection;
