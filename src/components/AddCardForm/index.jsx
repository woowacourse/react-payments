import { useEffect, useState } from 'react';
import { useCardFormContext } from '../../context/card-form-context';
import { pareCardFormState } from '../../utils';
import { PATH } from '../../constant';
import Link from '../Link';
import Card from '../Card';
import CardNumberFieldSet from '../CardNumberFieldSet';
import CardOwnerFieldSet from '../CardOwnerFieldSet';
import ExpiredDateFieldSet from '../ExpiredDateFieldSet';
import PasswordFieldSet from '../PasswordFieldSet';
import SecureCodeFieldSet from '../SecureCodeFieldSet';
import ErrorMessage from '../ErrorMessage';

import PropTypes from 'prop-types';
import * as Styled from './index.styled';

const AddCardForm = ({ openModal }) => {
  const { state } = useCardFormContext();

  const [isSubmittAble, setSubmittAble] = useState(false);

  useEffect(() => {
    const cardNumberError =
      state.isCardNumberError || state.isInitialCardNumber;
    const ownerNameError = state.isOwnerNameError || state.isInitialOwnerName;
    const secureCodeError =
      state.isSecureCodeError || state.isInitialSecureCode;
    const expiredDateError =
      state.isExpiredDateError || state.isInitialExpiredDate;
    const passwordError = state.isPasswordError || state.isInitialPassword;

    setSubmittAble(
      !cardNumberError &&
        !ownerNameError &&
        !secureCodeError &&
        !expiredDateError &&
        !passwordError &&
        state.isCardTypeSelected,
    );
  }, [state]);

  return (
    <Styled.Container>
      <Styled.CardContainer>
        <Card
          onClick={openModal}
          firstCardNumber={state.firstCardNumber}
          secondCardNumber={state.secondCardNumber}
          thirdCardNumber={state.thirdCardNumber}
          fourthCardNumber={state.fourthCardNumber}
          expiredMonth={state.expiredMonth}
          expiredYear={state.expiredYear}
          cardType={state.cardType}
          ownerName={state.ownerName}
        />
        <Styled.ErrorMessageContainer>
          {!state.isCardTypeSelected && (
            <ErrorMessage>카드사를 선택해주세요.</ErrorMessage>
          )}
        </Styled.ErrorMessageContainer>
      </Styled.CardContainer>
      <CardNumberFieldSet />
      <ExpiredDateFieldSet />
      <CardOwnerFieldSet />
      <SecureCodeFieldSet />
      <PasswordFieldSet />
      <Styled.ButtonContainer>
        {isSubmittAble && (
          <Link to={PATH.REGISTER_CARD} state={pareCardFormState(state)}>
            다음
          </Link>
        )}
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

AddCardForm.propTypes = {
  openModal: PropTypes.func,
};

export default AddCardForm;
