import { useRef } from 'react';

import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import useCardNumbersFormSection from '../../../hook/useCardNumbersFormSection';

import OPTION from '../../../constants/option';
import FormSection from '../FormSection';

interface CardNumbersFormSectionProps {
  cardInfo: CardInfo,
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const CardNumbersFormSection = (props: CardNumbersFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props
  const refs = useRef(new Array(OPTION.cardNumberInputCount).fill(null));


  const updateValues = (cardNumbers: string[]) => {
    dispatchCardInfo({ type: 'SET_CARD_NUMBERS_VALUE', value: cardNumbers })
  }

  const updateComplete = () => {
    dispatchCardInfo({ type: 'SET_CARD_NUMBERS_COMPLETED', value: true })
  }

  const { hasErrors, errorMessage, onChangeHandler, onBlurHandler, onFocusHandler } = useCardNumbersFormSection(
    {
      refs,
      values: cardInfo.cardNumbers.value,
      updateValues,
      updateComplete,
    }
  )

  const CardNumbersForm = (
    <>
      {[...Array(OPTION.cardNumberInputCount)].map((_, index) => (
        <PaymentsInputField
          ref={(input) => refs.current[index] = input}
          key={index}
          placeholder="1234"
          maxLength={OPTION.cardNumberMaxLength}
          value={cardInfo.cardNumbers.value[index]}
          hasError={hasErrors[index]}
          handleValueChange={(e) => onChangeHandler(e, index)}
          handleOnBlur={() => onBlurHandler(index)}
          handleOnFocus={() => onFocusHandler(index)}
          autoFocus={index === 0}
        />
      ))}
    </>
  )

  return (
    <FormSection title="결제할 카드 번호를 입력해 주세요"
      subTitle="본인 명의의 카드만 결제 가능합니다." label="카드번호" errorMessage={errorMessage} Children={CardNumbersForm} />
  );
};

export default CardNumbersFormSection;
