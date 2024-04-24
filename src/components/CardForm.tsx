import CardHolder from './CardHolder';
import CardNumbers from './CardNumbers';
import ExpiredDate from './CardExpiredDate';
import { ValidateInput } from '../hooks/useValidateInput';
import styled from '@emotion/styled';

interface props {
  cardNumberValidateInputs: ValidateInput[];
  expiredDateMonthValidateInput: ValidateInput;
  expiredDateYearValidateInput: ValidateInput;
  cardHolderValidateInput: ValidateInput;
}
export default function CardForm({
  cardNumberValidateInputs,
  expiredDateMonthValidateInput,
  expiredDateYearValidateInput,
  cardHolderValidateInput,
}: props) {
  return (
    <CardFormContainer>
      <CardNumbers partValidateInputs={cardNumberValidateInputs} />
      <ExpiredDate
        monthValidateInput={expiredDateMonthValidateInput}
        yearValidateInput={expiredDateYearValidateInput}
      />
      <CardHolder validateInput={cardHolderValidateInput} />
    </CardFormContainer>
  );
}

const CardFormContainer = styled.form({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});
