import { useContext } from 'react';
import { CardContext } from 'context/CardContext';
import styled from 'styled-components';
import Head from 'components/Modules/Head';
import { LINK } from '../../constant/Link';
import CardContainer from 'containers/Card/CardContainer';
import CardAddFormContainer from 'containers/Form/CardAddFormContainer';

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

const CardAddFormSection = styled.div`
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
        <CardContainer {...inputtedInfo} disable={true} />
      </CardSection>
      <CardAddFormSection>
        <CardAddFormContainer link={LINK.CARD_COMPLETE_PAGE} />
      </CardAddFormSection>
    </Page>
  );
}

export default CardAddPage;
