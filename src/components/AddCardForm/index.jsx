import { useEffect, useState } from 'react';
import { useCardFormContext } from '../../context/card-form-context';
import { pareCardFormState } from '../../utils';
import Button from '../Button';
import Header from '../Header';
import Card from '../Card';

import CardNumberFieldSet from '../CardNumberFieldSet';
import CardOwnerFieldSet from '../CardOwnerFieldSet';
import ExpiredDateFieldSet from '../ExpiredDateFieldSet';
import PasswordFieldSet from '../PasswordFieldSet';
import SecureCodeFieldSet from '../SecureCodeFieldSet';
import ErrorMessage from '../ErrorMessage';

import PropTypes from 'prop-types';
import * as styled from './index.styled';

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
    <styled.Container>
      <Header title="카드 추가" hasBackButton={true} />
      <styled.CardContainer>
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
        <styled.ErrorMessageContainer>
          {!state.isCardTypeSelected && (
            <ErrorMessage>카드사를 선택해주세요.</ErrorMessage>
          )}
        </styled.ErrorMessageContainer>
      </styled.CardContainer>
      <CardNumberFieldSet />
      <ExpiredDateFieldSet />
      <CardOwnerFieldSet />
      <SecureCodeFieldSet />
      <PasswordFieldSet />
      <styled.ButtonContainer>
        {isSubmittAble && (
          <Button
            type="link"
            to="/registerCard"
            state={pareCardFormState(state)}
          >
            다음
          </Button>
        )}
      </styled.ButtonContainer>
    </styled.Container>
  );
};

AddCardForm.propTypes = {
  openModal: PropTypes.func,
};

export default AddCardForm;
