import { useRef } from 'react';
import styled from 'styled-components';

import FormSection from '../FormSection';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import useNameFormSection from '../../../hook/useNameFormSection';

import OPTION from '../../../constants/option';

interface NameFormSectionProps {
  cardInfo: CardInfo
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const PaymentsInputFieldUppercase = styled(PaymentsInputField)`
text-transform: uppercase`

const NameFormSection = (props: NameFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props
  const ref = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>

  const updateValue = (name: string) => {
    dispatchCardInfo({ type: 'SET_CARD_NAME_VALUE', value: name })
  }

  const updateComplete = () => {
    dispatchCardInfo({ type: 'SET_CARD_NAME_COMPLETED', value: true })
  }

  const { errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler, } = useNameFormSection({
      ref,
      value: cardInfo.name.value,
      updateValue,
      updateComplete,
    })

  const NameForm = (
    <PaymentsInputFieldUppercase
      ref={ref}
      className="name-form-section"
      placeholder="FAMILY / GIVEN"
      maxLength={OPTION.nameMaxLength}
      value={cardInfo.name.value}
      hasError={errorMessage.length !== 0}
      handleValueChange={onChangeHandler}
      handleOnBlur={onBlurHandler}
      handleOnFocus={onFocusHandler}
      autoFocus={true}
    />)

  return (
    <FormSection title="카드 소유자 이름을 입력해 주세요" label="소유자 이름" errorMessage={errorMessage} Children={NameForm} />
  );
};

export default NameFormSection;