import styled from 'styled-components';
import { AddNewCardForm } from '../../components/addCardForm';
import { Layout } from '../../layout';
import { BackButton } from '../../layout/BackButton';
import { SelectCardCompanyModal } from '../../components/selectCardCompany';
import { useEffect } from 'react';
import { CardViewer } from '../../components/cardViewer';
import {
  useCardInfoActionContext,
  useCardInfoValueContext,
} from '../../hooks/cardInfoContext';
import {
  useModalStateContext,
  useModalActionContext,
  BottomSheet,
} from '@kyw0716/woowacourse-scent-modal';

export const Register = () => {
  const { openModal } = useModalActionContext();
  const { isOpen } = useModalStateContext();
  const { cardNumber, expirationDate, ownerName, companyId } =
    useCardInfoValueContext();
  const { resetAll } = useCardInfoActionContext();

  useEffect(() => {
    openModal();
  }, [openModal]);

  return (
    <Layout>
      <Style.Header>
        <BackButton path="/" callback={resetAll} />
        <Style.Title>카드추가</Style.Title>
      </Style.Header>
      <Style.CardContainer>
        <CardViewer
          cardNumber={cardNumber}
          expirationDate={expirationDate}
          ownerName={ownerName}
          companyId={companyId}
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
