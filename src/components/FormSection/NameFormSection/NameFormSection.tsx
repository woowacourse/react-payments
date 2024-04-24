import PaymentsFormTitle from '../../common/PaymentsFormTitle/PaymentsFormTitle';
import PaymentsInputField from '../../common/PaymentsInputField/PaymentsInputField';

import styled from 'styled-components';
import * as Styled from '../FormSection.styled';

import useNameFormSection from '../../../hook/useNameFormSection';

import OPTION from '../../../constants/option';

const PaymentsInputFieldUppercase = styled(PaymentsInputField)`
    text-transform: uppercase;
  `;

interface NameFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const NameFormSection = (props: NameFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props

  const [onChange, handleOnFocus, handleOnBlur] = useNameFormSection({ cardInfo, dispatchCardInfo })

  return (
    <Styled.FormSection>
      <PaymentsFormTitle title="카드 소유자 이름을 입력해 주세요" />
      <Styled.InputForm>
        <Styled.Label>소유자 이름</Styled.Label>
        <Styled.InputFieldContainer className="input-field-container">
          <PaymentsInputFieldUppercase
            className="name-form-section"
            placeholder="FAMILY / GIVEN"
            maxLength={OPTION.nameMaxLength}
            value={cardInfo.name.value}
            hasError={cardInfo.name.errorMessage.length !== 0}
            handleValueChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
            handleOnFocus={handleOnFocus}
            handleOnBlur={handleOnBlur}
          />
        </Styled.InputFieldContainer>
        <Styled.ErrorMessage>{cardInfo.name.errorMessage}</Styled.ErrorMessage>
      </Styled.InputForm>
    </Styled.FormSection>
  );
};

export default NameFormSection;
