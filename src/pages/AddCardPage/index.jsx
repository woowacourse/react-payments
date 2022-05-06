import { useState } from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Palette from '../../components/Palette';

import CardNumber from '../../components/CardNumber';
import CardOwner from '../../components/CardOwner';
import ExpiredDate from '../../components/ExpiredDate';
import Password from '../../components/Password';
import SecureCode from '../../components/SecureCode';
import { CardFormProvider } from '../../context/card-form-context';

import * as styled from './index.styled';

const AddCardPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onSubmitCardForm = (e) => {
    e.preventDefault();
    alert('카드 등록이 완료되었습니다!❤️🧡💛💚💙💜');
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <CardFormProvider>
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
    </CardFormProvider>
  );
};

export default AddCardPage;
