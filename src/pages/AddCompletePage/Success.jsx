import { memo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useInput from '../../hooks/useInput';

import { Button, Card } from '../../components/common';
import { CardContext } from '../../contexts';
import { splitCardNumbers } from '../../utils/regExp';

const Message = styled.div`
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

function Success({ card }) {
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
    <>
      <Message>카드등록이 완료되었습니다.</Message>
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
    </>
  );
}

export default memo(Success);
