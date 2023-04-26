import type { CardType } from '../../types';
import { Page } from '../../types';
import { useState } from 'react';
import styled from 'styled-components';

import PageTemplate from '../template/PageTemplate';
import Modal from '../template/Modal';
import CardNumberInput from '../box/inputSection/CardNumberInput';
import ExpireDateInput from '../box/inputSection/ExpireDateInput';
import OwnerNameInput from '../box/inputSection/OwnerNameInput';
import SecurityCodeInput from '../box/inputSection/SecurityCodeInput';
import CardPasswordInput from '../box/inputSection/CardPasswordInput';
import Card from '../common/Card';

import useList from '../../utils/useList';
import useFocusRef from '../../utils/useFocusRef';
import { pushList } from '../../utils/localStorageUtils';
import { LOCAL_STORAGE_KEY } from '../../constants';

interface Props {
  navigate: (page: Page) => void;
}

const CardRegisterPage = ({ navigate }: Props) => {
  const [cardCompany, setCardCompany] = useState('');
  const [cardNumber, setCardNumberIndex] = useList(['', '', '', '']);
  const [expireDate, setExpireDateIndex] = useList(['', '']);
  const [ownerName, setOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardPassword, setCardPasswordIndex] = useList(['', '']);

  const [insert, focus] = useFocusRef();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const submitNewCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCard: CardType = {
      id: Date.now(),
      cardCompany,
      cardNumber,
      expireDate,
      ownerName,
      securityCode,
      cardPassword,
      cardName: '',
    };

    pushList(LOCAL_STORAGE_KEY.cardList, newCard);
    navigate(Page.name);
  };

  const onClickBack = () => {
    navigate(Page.list);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageTemplate title="카드 추가" onClickBack={onClickBack}>
      <Card
        cardCompany={cardCompany}
        cardNumber={cardNumber}
        ownerName={ownerName}
        expireDate={expireDate}
        onClick={openModal}
      />
      <InputForm onSubmit={submitNewCard}>
        <CardNumberInput
          cardNumber={cardNumber}
          setCardNumber={setCardNumberIndex}
          insert={insert}
          focus={focus}
        />
        <ExpireDateInput
          expireDate={expireDate}
          setExpireDateIndex={setExpireDateIndex}
          insert={insert}
          focus={focus}
        />
        <OwnerNameInput ownerName={ownerName} setOwnerName={setOwnerName} insert={insert} focus={focus} />
        <SecurityCodeInput
          securityCode={securityCode}
          setSecurityCode={setSecurityCode}
          insert={insert}
          focus={focus}
        />
        <CardPasswordInput
          cardPassword={cardPassword}
          setCardPasswordIndex={setCardPasswordIndex}
          insert={insert}
          focus={focus}
        />
        <ButtonWrapper>
          <SubmitButton type="submit">다음</SubmitButton>
        </ButtonWrapper>
      </InputForm>
      {isModalOpen && <Modal closeModal={closeModal} setCardCompany={setCardCompany} />}
    </PageTemplate>
  );
};

export default CardRegisterPage;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  margin-top: 38px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
`;

const SubmitButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;

  height: 34px;
  border: none;

  background-color: transparent;

  text-align: right;
  font-weight: 700;
  font-size: 14px;
  color: #000000;
`;
