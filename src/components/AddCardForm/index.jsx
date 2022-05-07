import { useEffect, useState } from 'react';
import { useCardFormContext } from '../../context/card-form-context';
import Button from '../Button';
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
      state.isCardNumberError || state.isCardNumberNotInput;
    const ownerNameError = state.isOwnerNameError || state.isOwnerNameNotInput;
    const secureCodeError =
      state.isSecureCodeError || state.isSecureCodeNotInput;
    const expiredDateError =
      state.isExpiredDateError || state.isExpiredDateNotInput;
    const passwordError = state.isPasswordError || state.isPasswordNotInput;

    setSubmittAble(
      !cardNumberError &&
        !ownerNameError &&
        !secureCodeError &&
        !expiredDateError &&
        !passwordError,
    );
  }, [state]);

  const onSubmitCardForm = (e) => {
    e.preventDefault();

    alert('카드 등록이 완료되었습니다!❤️🧡💛💚💙💜');
  };

  return (
    <styled.Container onSubmit={onSubmitCardForm}>
      <Header title="카드 추가" />
      <Card onClick={openModal} />
      <CardNumber />
      <ExpiredDate />
      <CardOwner />
      <SecureCode />
      <Password />
      <styled.ButtonContainer>
        {isSubmittAble && (
          <Button name="submitButton" type="submit">
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
