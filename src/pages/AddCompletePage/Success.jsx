import { memo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useInput } from '../../hooks';

import { Button, Card, UnderlinedInput } from '../../components';

import { CardContext } from '../../contexts';
import { encryptCardNumber, makeValidDate } from '../../utils/processCard';
import { splitCardNumbers } from '../../utils/regExp';

const Message = styled.div`
  font-size: 24px;
  margin: 100px 0 77px;
`;

const CheckButton = styled(Button)`
  margin: auto 0 0 auto;
`;

function Success({
  card: { cardNumber, validDate, cardOwnerName, cardColor, cardCompany },
}) {
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
        bgColor={cardColor}
        company={cardCompany}
        size="large"
        name={cardOwnerName}
        number={splitCardNumbers(encryptCardNumber(cardNumber), ' ') ?? ''}
        validDate={makeValidDate(validDate)}
      />
      <UnderlinedInput
        margin={{ t: '33px' }}
        padding={{ b: '5px' }}
        width="250px"
        value={cardName}
        onChangeFunc={setCardName}
      />
      <CheckButton
        color="#04C09E"
        fontWeight="bold"
        onClickFunc={onClickCheckButton}
      >
        확인
      </CheckButton>
    </>
  );
}

export default memo(Success);
