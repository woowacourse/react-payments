import PaymentsFormTitle from '../../common/PaymentsFormTitle/PaymentsFormTitle';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import OPTION from '../../../constants/option';

import * as Styled from '../FormSection.styled';
import useExpirationDateFormSection from '../../../hook/useExpirationDateFormSection';


const ExpirationDateFormSection = ({ changeExpiration }: ExpirationFormSectionProps) => {

  const [inputState, onChange, errorMessage, handleOnFocus, handleOnBlur] = useExpirationDateFormSection({ changeExpiration })

  return (
    <Styled.FormSection>
      <PaymentsFormTitle
        title="카드 유효기간을 입력해 주세요"
        subTitle="월/년도(MM/YY)를 순서대로 입력해 주세요."
      />
      <Styled.InputForm>
        <Styled.Label>유효기간</Styled.Label>
        <Styled.InputFieldContainer className="input-field-container">
          <PaymentsInputField
            placeholder="MM"
            maxLength={OPTION.expirationDateMaxLength}
            value={inputState[0].value}
            hasError={inputState[0].hasError}
            handleValueChange={(e) => onChange(e, 0)}
            handleOnFocus={() => handleOnFocus(0)}
            handleOnBlur={() => handleOnBlur(0)}
          />
          <PaymentsInputField
            placeholder="YY"
            maxLength={OPTION.expirationDateMaxLength}
            value={inputState[1].value}
            hasError={inputState[1].hasError}
            handleValueChange={(e) => onChange(e, 1)}
            handleOnFocus={() => handleOnFocus(1)}
            handleOnBlur={() => handleOnBlur(1)}
          />
        </Styled.InputFieldContainer>
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      </Styled.InputForm>
    </Styled.FormSection>
  );
};

export default ExpirationDateFormSection;
