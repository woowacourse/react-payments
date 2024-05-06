import { useRef } from 'react';

import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import useCardNumbersFormSection from '../../../hook/useCardNumbersFormSection';

import OPTION from '../../../constants/option';
import FormSection from '../FormSection';


interface CardNumbersFormSectionProps {
  cardInfo: CardInfo,
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

enum CardInputErrorType {
  NotEnoughLength = 'notEnoughLength',
  InvalidInputType = 'invalidInputType'
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

  const { errors, onChangeHandler, onBlurHandler, onFocusHandler } = useCardNumbersFormSection(
    {
      refs,
      values: cardInfo.cardNumbers.value,
      updateValues,
      updateComplete,
    }
  )

  const getErrorMessage = (errors: string[]) => {
    if (errors.some(error => error === CardInputErrorType.NotEnoughLength)) return '카드번호는 16글자로 입력해 주세요.'
    if (errors.some(error => error === CardInputErrorType.InvalidInputType)) return '카드번호는 숫자만 입력 가능해요.'
    return ''
  }

  const CardNumbersForm = (
    <>
      {[...Array(OPTION.cardNumberInputCount)].map((_, index) => (
        <PaymentsInputField
          ref={(input) => refs.current[index] = input}
          key={index}
          placeholder="1234"
          maxLength={OPTION.cardNumberMaxLength}
          value={cardInfo.cardNumbers.value[index]}
          hasError={errors[index].length !== 0}
          handleValueChange={(e) => onChangeHandler(e, index)}
          handleOnBlur={() => onBlurHandler()}
          handleOnFocus={() => onFocusHandler()}
          autoFocus={index === 0}
        />
      ))}
    </>
  )

  return (
    <FormSection title="결제할 카드 번호를 입력해 주세요"
      subTitle="본인 명의의 카드만 결제 가능합니다." label="카드번호" errorMessage={getErrorMessage(errors)} Children={CardNumbersForm} />
  );
};

export default CardNumbersFormSection;
