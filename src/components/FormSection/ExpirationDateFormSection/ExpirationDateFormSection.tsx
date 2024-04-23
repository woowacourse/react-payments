import PaymentsFormTitle from '../../common/PaymentsFormTitle/PaymentsFormTitle';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import OPTION from '../../../constants/option';

import * as Styled from '../FormSection.styled';
import useExpirationDateFormSection from '../../../hook/useExpirationDateFormSection';

interface ExpirationDateFormSectionProps {
  changeExpiration: (expiration: Expiration, isComplete?: boolean) => void;
  expiration: Expiration;
}

const ExpirationDateFormSection = ({ changeExpiration, expiration }: ExpirationDateFormSectionProps) => {

  const [inputState, onChange, errorMessage, handleOnFocus, handleOnBlur] = useExpirationDateFormSection({ changeExpiration, expiration })

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
            value={expiration.month}
            hasError={inputState.month.hasError}
            handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, 'month')}
            handleOnFocus={() => handleOnFocus('month')}
            handleOnBlur={() => handleOnBlur('month')}
          />
          <PaymentsInputField
            placeholder="YY"
            maxLength={OPTION.expirationDateMaxLength}
            value={expiration.year}
            hasError={inputState.year.hasError}
            handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, 'year')}
            handleOnFocus={() => handleOnFocus('year')}
            handleOnBlur={() => handleOnBlur('year')}
          />
        </Styled.InputFieldContainer>
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      </Styled.InputForm>
    </Styled.FormSection>
  );
};

export default ExpirationDateFormSection;
