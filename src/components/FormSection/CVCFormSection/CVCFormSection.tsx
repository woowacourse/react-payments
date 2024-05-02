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

  const updateValue = (cvc: string) => {
    dispatchCardInfo({ type: 'SET_CARD_CVC_VALUE', value: cvc })
  }

  const updateComplete = () => {
    dispatchCardInfo({ type: 'SET_CARD_CVC_COMPLETED', value: true })
  }

  const { errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler, } = useCVCFormSection({
      value: cardInfo.cvc.value,
      updateValue,
      updateComplete,
    })

  const CVCForm = (
    <PaymentsInputField
      ref={ref}
      className="cvc-form-section"
      placeholder="123"
      maxLength={OPTION.cvcMaxLength}
      value={cardInfo.cvc.value}
      hasError={errorMessage.length !== 0}
      handleValueChange={(e) => onChangeHandler(e)}
      handleOnBlur={() => {
        onBlurHandler()
        handleCardState('front')
      }}
      handleOnFocus={() => {
        onFocusHandler()
        handleCardState('back')
      }}
      autoFocus={true}
    />
  )

  return (
    <FormSection title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={errorMessage} Children={CVCForm} />
  );
};

export default CVCFormSection;
