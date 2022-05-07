import { useContext, useEffect } from 'react';
import { CardContext } from '../../context/CardContext';
import styled from 'styled-components';
import Head from '../../components/Modules/Head';
import Card from '../../components/Modules/Card';
import CardAddForm from '../../components/Templates/CardAddForm';
import { INPUT_ACTION } from '../../Reducer/InputtedInfoReducer';

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
  const { inputtedInfo, inputtedInfoDispatch } = useContext(CardContext);

  useEffect(() => {
    if (Object.keys(inputtedInfo).length !== 0) {
      inputtedInfoDispatch({
        type: INPUT_ACTION.CLEAR,
      });
    }
  }, []);

  return (
    <Page>
      <Head link="/react-payments/cardList">카드 추가</Head>
      <CardSection>
        <Card {...inputtedInfo} disable={true} />
      </CardSection>
      <CardAddFormContainer>
        <CardAddForm link="/react-payments/cardComplete" />
      </CardAddFormContainer>
    </Page>
  );
}

export default CardAddPage;
