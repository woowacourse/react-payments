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
  const onSubmitCardForm = (e) => {
    e.preventDefault();
    console.log(state);
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
        <Button name="submitButton" type="submit">
          다음
        </Button>
      </styled.ButtonContainer>
    </styled.Container>
  );
};

AddCardForm.propTypes = {
  openModal: PropTypes.func,
};

export default AddCardForm;
