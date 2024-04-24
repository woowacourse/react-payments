import { useEffect, useRef } from 'react';

import FormSection from '../FormSection';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import useCVCFormSection from '../../../hook/useCVCFormSection';

import OPTION from '../../../constants/option';

interface CVCFormSectionProps {
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  handleCardState: (cardState: CardState) => void
}

const CVCFormSection = (props: CVCFormSectionProps) => {
  const { dispatchCardInfo, handleCardState } = props
  const ref = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>
  const { value, error, handleChange } = useCVCFormSection({ dispatchCardInfo, handleCardState, ref })

  const CVCForm = (
    <PaymentsInputField
      ref={ref}
      className="cvc-form-section"
      placeholder="123"
      maxLength={OPTION.cvcMaxLength}
      value={value}
      hasError={error.length !== 0}
      handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      autoFocus={true}
    />
  )

  return (
    <FormSection title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={error} Children={CVCForm} />
  );
};

export default CVCFormSection;
