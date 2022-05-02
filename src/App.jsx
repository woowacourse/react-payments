import React, { memo } from 'react';
import styled from 'styled-components';

import {
  useCardNumber,
  useValidDate,
  useCardOwnerName,
  useCVC,
  useCardPassword,
  useModal,
} from './hooks';
import CardInputs from './components/CardInputs';
import { Button, Card } from './components/common';

import { ReactComponent as Arrow } from './assets/arrow.svg';

const StyledPage = styled.form`
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 400px;
  height: 757px;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 25px;
`;

const Title = styled.span`
  font-size: 16px;
  margin-left: 18px;
`;

const StyledCard = styled(Card)`
  align-self: center;
  margin-bottom: 25px;
`;

const NextButton = styled(Button)`
  align-self: end;
`;

function App() {
  const [cardNumber, setCardNumber, encryptedCardNumber] = useCardNumber('');
  const [cardOwnerName, setCardOwnerName] = useCardOwnerName('');
  const [validDate, setValidDate] = useValidDate('');
  const [CVC, setCVC] = useCVC('');
  const [firstPassword, setFirstPassword] = useCardPassword('');
  const [secondPassword, setSecondPassword] = useCardPassword('');
  const requiredList = [
    cardNumber,
    validDate,
    CVC,
    firstPassword,
    secondPassword,
  ];
  const [isModalOpen, toggleIsModalOpen] = useModal(false);

  return (
    <StyledPage>
      <Header>
        <Button size="small" content={<Arrow />} />
        <Title>카드 추가</Title>
      </Header>
      <StyledCard
        bgColor="#ADD8E6"
        size="medium"
        name={cardOwnerName}
        number={encryptedCardNumber.split('-').join(' ')}
        validDate={validDate}
      />
      <CardInputs
        cardNumber={encryptedCardNumber}
        setCardNumber={setCardNumber}
        validDate={validDate}
        setValidDate={setValidDate}
        cardOwnerName={cardOwnerName}
        setCardOwnerName={setCardOwnerName}
        CVC={CVC}
        setCVC={setCVC}
        isModalOpen={isModalOpen}
        toggleModal={toggleIsModalOpen}
        firstPassword={firstPassword}
        setFirstPassword={setFirstPassword}
        secondPassword={secondPassword}
        setSecondPassword={setSecondPassword}
      />
      {requiredList.every(value => value !== '') && (
        <NextButton color="#04C09E" content="다음" fontWeight="bold" />
      )}
    </StyledPage>
  );
}

export default memo(App);
