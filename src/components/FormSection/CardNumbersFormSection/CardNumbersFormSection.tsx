import { useRef } from 'react';

import FormSection from '../FormSection';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import useCardNumbersFormSection from '../../../hook/useCardNumbersFormSection';

import OPTION from '../../../constants/option';

interface CardNumbersFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const CardNumbersFormSection = (props: CardNumbersFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props
  const refs = useRef(new Array(OPTION.cardNumberInputCount).fill(null));
  const [inputState, onChange, handleOnFocus, handleOnBlur] = useCardNumbersFormSection({ cardInfo, dispatchCardInfo, refs })

  const CardNumbersForm = (
    <>
      {[...Array(OPTION.cardNumberInputCount)].map((_, index) => (
        <PaymentsInputField
          ref={(input) => refs.current[index] = input}
          key={index}
          placeholder="1234"
          maxLength={OPTION.cardNumberMaxLength}
          value={cardInfo.cardNumbers.value[index]}
          hasError={inputState[index].hasError}
          handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, index)}
          handleOnFocus={() => handleOnFocus(index)}
          handleOnBlur={() => handleOnBlur(index)}
          autoFocus={index === 0}
        />
      ))}
    </>
  )

  return (
    <FormSection title="결제할 카드 번호를 입력해 주세요"
      subTitle="본인 명의의 카드만 결제 가능합니다." label="카드번호" errorMessage={cardInfo.cardNumbers.errorMessage} Children={CardNumbersForm} />
  );
};

export default CardNumbersFormSection;
