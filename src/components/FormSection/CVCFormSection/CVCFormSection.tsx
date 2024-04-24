import { useRef } from 'react';

import FormSection from '../FormSection';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import useCVCFormSection from '../../../hook/useCVCFormSection';

import OPTION from '../../../constants/option';

interface CVCFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  handleCardState: (cardState: CardState) => void
}

const CVCFormSection = (props: CVCFormSectionProps) => {
  const { cardInfo, dispatchCardInfo, handleCardState } = props
  const ref = useRef<HTMLInputElement>(null)
  const [onChange, handleOnFocus, handleOnBlur] = useCVCFormSection({ cardInfo, dispatchCardInfo, handleCardState, ref })

  const CVCForm = (
    <PaymentsInputField
      ref={ref}
      className="cvc-form-section"
      placeholder="123"
      maxLength={OPTION.cvcMaxLength}
      value={cardInfo.cvc.value}
      hasError={cardInfo.cvc.errorMessage.length !== 0}
      handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      handleOnFocus={handleOnFocus}
      handleOnBlur={handleOnBlur}
      autoFocus={true}
    />
  )

  return (
    <FormSection title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={cardInfo.cvc.errorMessage} Children={CVCForm} />
  );
};

export default CVCFormSection;
