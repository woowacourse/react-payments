import { Page } from '../../types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import PageTemplate from '../template/PageTemplate';
import CardCompanyModal from '../box/CardCompanyModal';
import CardNumberInput from '../box/inputSection/CardNumberInput';
import ExpireDateInput from '../box/inputSection/ExpireDateInput';
import OwnerNameInput from '../box/inputSection/OwnerNameInput';
import SecurityCodeInput from '../box/inputSection/SecurityCodeInput';
import CardPasswordInput from '../box/inputSection/CardPasswordInput';
import Card from '../common/Card';

import { useCardForm } from '../../context/cardForm';
import { validExpireDate } from '../../domain/validator';
import useFocusRef from '../../utils/useFocusRef';

interface Props {
  navigate: (page: Page) => void;
}

const CardRegisterPage = ({ navigate }: Props) => {
  const [{ cardCompany, cardNumber, expireDate, ownerName }] = useCardForm();
  const [insert, focus] = useFocusRef();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const submitNewCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

  useEffect(() => {
    if (cardCompany !== '') setIsModalOpen(false);
  }, []);

  const isValid = validExpireDate(expireDate) === '';

  return (
    <PageTemplate title="카드 추가" onClickBack={onClickBack}>
      <PointerBox>
        <Card
          cardCompany={cardCompany}
          cardNumber={cardNumber}
          ownerName={ownerName}
          expireDate={expireDate}
          onClick={openModal}
        />
      </PointerBox>
      <InputForm onSubmit={submitNewCard}>
        <CardNumberInput insert={insert} focus={focus} />
        <ExpireDateInput insert={insert} focus={focus} />
        <OwnerNameInput insert={insert} focus={focus} />
        <SecurityCodeInput insert={insert} focus={focus} />
        <CardPasswordInput insert={insert} focus={focus} />
        <ButtonWrapper>{isValid && <SubmitButton type="submit">다음</SubmitButton>}</ButtonWrapper>
      </InputForm>
      {isModalOpen && <CardCompanyModal closeModal={closeModal} />}
    </PageTemplate>
  );
};

export default CardRegisterPage;

const PointerBox = styled.div`
  cursor: pointer;
`;

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
  height: 34px;
  margin-top: auto;
  margin-bottom: 24px;
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
