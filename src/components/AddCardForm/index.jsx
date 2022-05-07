import { useEffect, useState } from 'react';
import { useCardFormContext } from '../../context/card-form-context';
import { pareCardFormState } from '../../utils';
import LinkButton from '../LinkButton';
import Header from '../Header';
import Card from '../Card';

import CardNumber from '../CardNumber';
import CardOwner from '../CardOwner';
import ExpiredDate from '../ExpiredDate';
import Password from '../Password';
import SecureCode from '../SecureCode';
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
      <CardNumber />
      <ExpiredDate />
      <CardOwner />
      <SecureCode />
      <Password />
      <styled.ButtonContainer>
        {isSubmittAble && (
          <LinkButton to="/registerCard" state={pareCardFormState(state)}>
            다음
          </LinkButton>
        )}
      </styled.ButtonContainer>
    </styled.Container>
  );
};

AddCardForm.propTypes = {
  openModal: PropTypes.func,
};

export default AddCardForm;
