import { useRef } from 'react';

import FormSection from '../FormSection';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import useExpirationDateFormSection from '../../../hook/useExpirationDateFormSection';

import OPTION from '../../../constants/option';

interface ExpirationDateFormSectionProps {
  cardInfo: CardInfo
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

enum CardInputErrorType {
  NotEnoughLength = 'notEnoughLength',
  InvalidInputType = 'invalidInputType',
  InvalidMonth = 'invalidMonth',
  Expired = 'expired'
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

  const { errors, onChangeHandler, onBlurHandler, onFocusHandler } = useExpirationDateFormSection(
    {
      refs,
      values: cardInfo.expiration.value,
      updateValues,
      updateComplete,
    }
  )

  const getErrorMessage = (errors: string[]) => {
    if (errors.some(error => error === CardInputErrorType.InvalidMonth)) return '유효기간 월은 01~12 사이만 입력이 가능해요.'
    if (errors.some(error => error === CardInputErrorType.NotEnoughLength)) return '유효기간은 MM / YY 형식의 4자리로 입력해 주세요.'
    if (errors.some(error => error === CardInputErrorType.Expired)) return '만료된 카드입니다.'
    if (errors.some(error => error === CardInputErrorType.InvalidInputType)) return '유효기간은 숫자만 입력 가능해요.'
    return ''
  }

  const ExpirationDateForm = (
    <>
      <PaymentsInputField
        ref={(input) => refs.current[0] = input}
        placeholder="MM"
        maxLength={OPTION.expirationDateMaxLength}
        value={cardInfo.expiration.value[0]}
        hasError={errors[0].length !== 0}
        handleValueChange={(e) => onChangeHandler(e, 0)}
        handleOnBlur={() => onBlurHandler(0)}
        handleOnFocus={() => onFocusHandler()}
        autoFocus={true}
      />
      <PaymentsInputField
        ref={(input) => refs.current[1] = input}
        placeholder="YY"
        maxLength={OPTION.expirationDateMaxLength}
        value={cardInfo.expiration.value[1]}
        hasError={errors[1].length !== 0}
        handleValueChange={(e) => onChangeHandler(e, 1)}
        handleOnBlur={() => onBlurHandler(1)}
        handleOnFocus={() => onFocusHandler()}
      />
    </>)

  return (
    <FormSection title="카드 유효기간을 입력해 주세요"
      subTitle="월/년도(MM/YY)를 순서대로 입력해 주세요."
      label="유효기간"
      errorMessage={getErrorMessage(errors)}
      Children={ExpirationDateForm} />
  );
};

export default ExpirationDateFormSection;
