import styled from 'styled-components';
import { AddNewCardForm } from '../../components/addCardForm';
import { Layout } from '../../layout';
import { BackButton } from '../../layout/BackButton';
import { BottomSheet } from '../../components/modal/template/BottomSheet';
import { SelectCardCompanyModal } from '../../components/modal/content/selectCardCompany';
import {
  useModalActionContext,
  useModalStateContext,
} from '../../hooks/useModalContext';
import { useEffect } from 'react';
import { CardViewer } from '../../components/cardViewer';
import { useCardInfoValueContext } from '../../hooks/cardInfoContext';

export const Register = () => {
  const { openModal } = useModalActionContext();
  const { isOpen } = useModalStateContext();
  const { cardNumber, expirationDate, ownerName, companyId } =
    useCardInfoValueContext();

  useEffect(() => {
    openModal();
  }, []);

  return (
    <Layout>
      <Style.Header>
        <BackButton path="/" />
        <Style.Title>카드추가</Style.Title>
      </Style.Header>
      <Style.CardContainer>
        <CardViewer
          cardInfo={{ cardNumber, expirationDate, ownerName, companyId }}
          handleClick={openModal}
        />
      </Style.CardContainer>
      <AddNewCardForm />
      {isOpen && (
        <BottomSheet>
          <SelectCardCompanyModal />
        </BottomSheet>
      )}
    </Layout>
  );
};

const Style = {
  Header: styled.div`
    display: flex;
    align-items: center;

    font-weight: bold;

    margin-bottom: 25px;
  `,
  Title: styled.span`
    font-size: 16px;

    margin-left: 18px;
  `,
  CardContainer: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  `,
};
