import { useRef } from 'react';

import FormSection from '../FormSection';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import useExpirationDateFormSection from '../../../hook/useExpirationDateFormSection';

import OPTION from '../../../constants/option';

interface ExpirationDateFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const ExpirationDateFormSection = (props: ExpirationDateFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props
  const refs = useRef(new Array(OPTION.expirationDateInputCount).fill(null));
  const [inputState, onChange, handleOnFocus, handleOnBlur] = useExpirationDateFormSection({ cardInfo, dispatchCardInfo, refs })

  const ExpirationDateForm = (
    <>
      <PaymentsInputField
        ref={(input) => refs.current[0] = input}
        placeholder="MM"
        maxLength={OPTION.expirationDateMaxLength}
        value={cardInfo.expiration.value.month}
        hasError={inputState.month.hasError}
        handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, 'month')}
        handleOnFocus={() => handleOnFocus('month')}
        handleOnBlur={() => handleOnBlur('month')}
        autoFocus={true}
      />
      <PaymentsInputField
        ref={(input) => refs.current[1] = input}
        placeholder="YY"
        maxLength={OPTION.expirationDateMaxLength}
        value={cardInfo.expiration.value.year}
        hasError={inputState.year.hasError}
        handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, 'year')}
        handleOnFocus={() => handleOnFocus('year')}
        handleOnBlur={() => handleOnBlur('year')}
      />
    </>)

  return (
    <FormSection title="카드 유효기간을 입력해 주세요"
      subTitle="월/년도(MM/YY)를 순서대로 입력해 주세요."
      label="유효기간"
      errorMessage={cardInfo.expiration.errorMessage}
      Children={ExpirationDateForm} />
  );
};

export default ExpirationDateFormSection;
