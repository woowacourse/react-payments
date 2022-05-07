import { useEffect, useState } from 'react';
import { useCardFormContext } from '../../context/card-form-context';
import LinkButton from '../LinkButton';
import Header from '../Header';
import Card from '../Card';

import CardNumber from '../CardNumber';
import CardOwner from '../CardOwner';
import ExpiredDate from '../ExpiredDate';
import Password from '../Password';
import SecureCode from '../SecureCode';

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
        !passwordError,
    );
  }, [state]);

  return (
    <styled.Container>
      <Header title="카드 추가" />
      <Card onClick={openModal} />
      <CardNumber />
      <ExpiredDate />
      <CardOwner />
      <SecureCode />
      <Password />
      <styled.ButtonContainer>
        <LinkButton name="submitButton" to="/registerCard" state={state}>
          다음
        </LinkButton>
        {/* {isSubmittAble && (
          <LinkButton name="submitButton" to="/registerCard" state={state}>
            다음
          </LinkButton>
        )} */}
      </styled.ButtonContainer>
    </styled.Container>
  );
};

AddCardForm.propTypes = {
  openModal: PropTypes.func,
};

export default AddCardForm;
