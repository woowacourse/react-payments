import { useRef } from 'react';

import FormSection from '../FormSection';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import useExpirationDateFormSection from '../../../hook/useExpirationDateFormSection';

import OPTION from '../../../constants/option';

interface ExpirationDateFormSectionProps {
  cardInfo: CardInfo
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const ExpirationDateFormSection = (props: ExpirationDateFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props
  const refs = useRef(new Array(OPTION.expirationDateInputCount).fill(null));

  const updateValues = (expiration: string[]) => {
    dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_VALUE', value: expiration })
  }

  const updateComplete = () => {
    dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_COMPLETED', value: true })
  }

  const { hasErrors, errorMessage, onChangeHandler, onBlurHandler, onFocusHandler } = useExpirationDateFormSection(
    {
      refs,
      values: cardInfo.expiration.value,
      updateValues,
      updateComplete,
    }
  )

  const ExpirationDateForm = (
    <>
      <PaymentsInputField
        ref={(input) => refs.current[0] = input}
        placeholder="MM"
        maxLength={OPTION.expirationDateMaxLength}
        value={cardInfo.expiration.value[0]}
        hasError={hasErrors[0]}
        handleValueChange={(e) => onChangeHandler(e, 0)}
        handleOnBlur={() => onBlurHandler(0)}
        handleOnFocus={() => onFocusHandler(0)}
        autoFocus={true}
      />
      <PaymentsInputField
        ref={(input) => refs.current[1] = input}
        placeholder="YY"
        maxLength={OPTION.expirationDateMaxLength}
        value={cardInfo.expiration.value[1]}
        hasError={hasErrors[1]}
        handleValueChange={(e) => onChangeHandler(e, 1)}
        handleOnBlur={() => onBlurHandler(1)}
        handleOnFocus={() => onFocusHandler(1)}
      />
    </>)

  return (
    <FormSection title="카드 유효기간을 입력해 주세요"
      subTitle="월/년도(MM/YY)를 순서대로 입력해 주세요."
      label="유효기간"
      errorMessage={errorMessage}
      Children={ExpirationDateForm} />
  );
};

export default ExpirationDateFormSection;
