import PaymentsFormTitle from '../../common/PaymentsFormTitle/PaymentsFormTitle';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import * as Styled from '../FormSection.styled';

import useExpirationDateFormSection from '../../../hook/useExpirationDateFormSection';

import OPTION from '../../../constants/option';

interface ExpirationDateFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const ExpirationDateFormSection = (props: ExpirationDateFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props

  const [inputState, onChange, handleOnFocus, handleOnBlur] = useExpirationDateFormSection({ cardInfo, dispatchCardInfo })

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
            value={cardInfo.expiration.value.month}
            hasError={inputState.month.hasError}
            handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, 'month')}
            handleOnFocus={() => handleOnFocus('month')}
            handleOnBlur={() => handleOnBlur('month')}
            autoFocus={true}
          />
          <PaymentsInputField
            placeholder="YY"
            maxLength={OPTION.expirationDateMaxLength}
            value={cardInfo.expiration.value.year}
            hasError={inputState.year.hasError}
            handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, 'year')}
            handleOnFocus={() => handleOnFocus('year')}
            handleOnBlur={() => handleOnBlur('year')}
          />
        </Styled.InputFieldContainer>
        <Styled.ErrorMessage>{cardInfo.expiration.errorMessage}</Styled.ErrorMessage>
      </Styled.InputForm>
    </Styled.FormSection>
  );
};

export default ExpirationDateFormSection;
