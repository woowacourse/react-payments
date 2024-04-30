import { useRef } from 'react';

import FormSection from '../FormSection';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import useCVCFormSection from '../../../hook/useCVCFormSection';

import OPTION from '../../../constants/option';

interface CVCFormSectionProps {
  cardInfo: CardInfo
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  handleCardState: (cardState: CardState) => void
}

const CVCFormSection = (props: CVCFormSectionProps) => {
  const { cardInfo, dispatchCardInfo, handleCardState } = props
  const ref = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>

  const updateCardInfo = (cvc: string) => {
    dispatchCardInfo({ type: 'SET_CARD_CVC_VALUE', value: cvc })
  }

  const onComplete = () => {
    dispatchCardInfo({ type: 'SET_CARD_CVC_COMPLETED', value: true })
  }

  const { error, handleChange } = useCVCFormSection({ cardInfo, updateCardInfo, onComplete, handleCardState, ref })

  const CVCForm = (
    <PaymentsInputField
      ref={ref}
      className="cvc-form-section"
      placeholder="123"
      maxLength={OPTION.cvcMaxLength}
      value={cardInfo.cvc.value}
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
