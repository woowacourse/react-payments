import { useState } from 'react';
import styled from 'styled-components';
import CardView from '../components/CardView';
import InputForm from '../components/InputForm';
import { Card } from '../types/card';
import { DEFAULT_CARD } from '../constants/card';
import SubmitCardBox from '../components/SubmitCardBox';
import { Link } from 'react-router-dom';
import { Page } from '../style/page.style';

export default function EnrollCard() {
  const [cardInfo, setCardInfo] = useState<Card>(DEFAULT_CARD);
  // const [isSubmit, setIsSubmit] = useState<boolean>(false);
  return (
    <Page>
      <Container>
        <CardView cardInfo={cardInfo} />
        <InputForm cardInfo={cardInfo} handleInput={setCardInfo} />
      </Container>
      <Link to="/addSucceed" state={{ cardInfo: cardInfo }}>
        <SubmitCardBox />
      </Link>
    </Page>
  );
}

const Container = styled.div`
  margin: 50px 0px 80px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 500px) {
    width: 85vw;
  }
`;
