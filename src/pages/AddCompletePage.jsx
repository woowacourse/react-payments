import { memo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useInput from '../hooks/useInput';

import { Button, Card } from '../components/common';
import { CardContext } from '../reducers';
import { splitCardNumbers } from '../utils/regExp';

const StyledPage = styled.div`
  align-items: center;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 400px;
  height: 757px;
`;

const CompleteMessage = styled.div`
  font-size: 24px;
  margin: 100px 0 77px;
`;

const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 18px;
  margin-top: 33px;
  padding-bottom: 5px;
  text-align: center;
  width: 250px;

  :focus {
    outline: none;
  }
`;

const CheckButton = styled(Button)`
  margin: auto 0 0 auto;
`;

function AddCompletePage({ card }) {
  const [cardName, setCardName] = useInput('');

  const navigate = useNavigate();
  const dispatch = useContext(CardContext);

  const onClickCheckButton = () => {
    dispatch({
      type: 'ADD_CARD',
      cardName,
    });

    navigate('/');
  };

  return (
    <StyledPage>
      <CompleteMessage>카드등록이 완료되었습니다.</CompleteMessage>
      <Card
        bgColor={card.cardColor}
        size="large"
        name={card.cardOwnerName}
        number={splitCardNumbers(card.cardNumber, ' ')}
        validDate={card.validDate}
      />
      <Input value={cardName} onChange={setCardName} />
      <CheckButton
        color="#04C09E"
        content="확인"
        fontWeight="bold"
        onClickFunc={onClickCheckButton}
      />
    </StyledPage>
  );
}

export default memo(AddCompletePage);
