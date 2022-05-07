import { useCardFormContext } from '../../context/card-form-context';
import { useState } from 'react';
import Button from '../Button';
import Header from '../Header';
import Card from '../Card';
import Modal from '../Modal';
import Palette from '../Palette';

import CardNumber from '../CardNumber';
import CardOwner from '../CardOwner';
import ExpiredDate from '../ExpiredDate';
import Password from '../Password';
import SecureCode from '../SecureCode';

import * as styled from './index.styled';

const AddCardForm = () => {
  const { state } = useCardFormContext();
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onSubmitCardForm = (e) => {
    e.preventDefault();
    console.log(state);
    alert('카드 등록이 완료되었습니다!❤️🧡💛💚💙💜');
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
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
      {isModalOpened && (
        <Modal onClickDimmer={closeModal}>
          <Palette />
        </Modal>
      )}
    </styled.Container>
  );
};

export default AddCardForm;
