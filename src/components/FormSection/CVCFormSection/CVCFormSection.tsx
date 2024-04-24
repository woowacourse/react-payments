import styled from 'styled-components';

import PaymentsFormTitle from '../../common/PaymentsFormTitle/PaymentsFormTitle';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import OPTION from '../../../constants/option';

import * as Styled from '../FormSection.styled';
import useCVCFormSection from '../../../hook/useCVCFormSection';

const PaymentsInputFieldUppercase = styled(PaymentsInputField)`
    text-transform: uppercase;
  `;

interface CVCFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  handleCardState: (cardState: CardState) => void;
}

const CVCFormSection = (props: CVCFormSectionProps) => {
  const { cardInfo, dispatchCardInfo, handleCardState } = props

  const [inputState, onChange, errorMessage, handleOnFocus, handleOnBlur] = useCVCFormSection({ cardInfo, dispatchCardInfo, handleCardState })

  return (
    <Styled.FormSection>
      <PaymentsFormTitle title="CVC 번호를 입력해 주세요" />
      <Styled.InputForm>
        <Styled.Label>cvc</Styled.Label>
        <Styled.InputFieldContainer className="input-field-container">
          <PaymentsInputFieldUppercase
            className="cvc-form-section"
            placeholder="123"
            maxLength={OPTION.cvcMaxLength}
            value={cardInfo.cvc.value}
            hasError={inputState.errorMessage.length !== 0}
            handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
            handleOnFocus={handleOnFocus}
            handleOnBlur={handleOnBlur}
          />
        </Styled.InputFieldContainer>
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      </Styled.InputForm>
    </Styled.FormSection>
  );
};

export default CVCFormSection;
