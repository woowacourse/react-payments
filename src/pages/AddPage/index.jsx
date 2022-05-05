import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  useCardNumber,
  useCardOwnerName,
  useCardPassword,
  useCVC,
  useModal,
  useValidDate,
} from '../../hooks';
import CardInputs from './CardInputs';
import { Button, Card } from '../../components';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

import { CardContext, CardInfoContext } from '../../contexts';
import isValidCardInputs from '../../utils/validator';

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

function AddPage() {
  const {
    cardNumber,
    handler: setCardNumber,
    encryptedCardNumber,
  } = useCardNumber('');
  const [cardOwnerName, setCardOwnerName] = useCardOwnerName('');
  const [validDate, setValidDate] = useValidDate('');
  const [CVC, setCVC] = useCVC('');
  const [firstPassword, setFirstPassword] = useCardPassword('');
  const [secondPassword, setSecondPassword] = useCardPassword('');
  const [isModalOpen, toggleIsModalOpen] = useModal(false);
  const [isPossible, setIsPossible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useContext(CardContext);

  const forwardValue = useMemo(
    () => ({
      cardNumber: encryptedCardNumber,
      setCardNumber,
      validDate,
      setValidDate,
      cardOwnerName,
      setCardOwnerName,
      CVC,
      setCVC,
      isModalOpen,
      toggleModal: toggleIsModalOpen,
      firstPassword,
      setFirstPassword,
      secondPassword,
      setSecondPassword,
    }),
    [
      cardNumber,
      validDate,
      cardOwnerName,
      CVC,
      isModalOpen,
      firstPassword,
      secondPassword,
    ]
  );

  useEffect(() => {
    try {
      isValidCardInputs(
        cardNumber,
        validDate,
        CVC,
        firstPassword,
        secondPassword
      );
      setIsPossible(true);
    } catch (e) {
      setIsPossible(false);
    }
  }, [cardNumber, validDate, CVC, firstPassword, secondPassword]);

  const onClickArrowButton = () => {
    navigate(-1);
  };

  const onClickNextButton = () => {
    dispatch({
      type: 'SAVE_CARD',
      card: {
        cardColor: '#ADD8E6',
        cardNumber,
        cardOwnerName,
        validDate,
        CVC,
        password: firstPassword + secondPassword,
      },
    });

    navigate('/complete');
  };

  return (
    <CardInfoContext.Provider value={forwardValue}>
      <StyledPage>
        <Header>
          <Button
            size="small"
            content={<Arrow />}
            onClickFunc={onClickArrowButton}
          />
          <Title>카드 추가</Title>
        </Header>
        <StyledCard
          bgColor="#ADD8E6"
          size="medium"
          name={cardOwnerName}
          number={encryptedCardNumber.split('-').join(' ')}
          validDate={validDate}
        />
        <CardInputs />
        {isPossible && (
          <NextButton
            color="#04C09E"
            content="다음"
            fontWeight="bold"
            onClickFunc={onClickNextButton}
          />
        )}
      </StyledPage>
    </CardInfoContext.Provider>
  );
}

export default memo(AddPage);
