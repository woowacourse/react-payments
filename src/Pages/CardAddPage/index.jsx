import { useContext, useEffect } from 'react';
import { CardContext } from 'context/CardContext';
import styled from 'styled-components';
import Head from 'components/Modules/Head';
import Card from 'components/Modules/Card';
import CardAddForm from 'components/Templates/CardAddForm';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import { LINK } from '../../constant/Link';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const CardAddFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 19px;
`;

function CardAddPage() {
  const { inputtedInfo } = useContext(CardContext);

  return (
    <Page>
      <Head link={LINK.CARD_LIST_PAGE}>카드 추가</Head>
      <CardSection>
        <Card {...inputtedInfo} disable={true} />
      </CardSection>
      <CardAddFormContainer>
        <CardAddForm link={LINK.CARD_COMPLETE_PAGE} />
      </CardAddFormContainer>
    </Page>
  );
}

export default CardAddPage;
