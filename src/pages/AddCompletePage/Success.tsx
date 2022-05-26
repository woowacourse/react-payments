import { Button, Card, UnderlinedInput } from 'components';
import { makeCardOwnerName, makeValidDate } from 'utils/processCard';
import { memo, useContext } from 'react';

import { CardContext } from 'contexts';
import { CardType } from 'types';
import { actions } from 'actions';
import styled from 'styled-components';
import { useInput } from 'hooks';
import { useNavigate } from 'react-router-dom';

const Message = styled.div`
  font-size: 24px;
  margin: 100px 0 77px;
`;

const CheckButton = styled(Button)`
  margin: auto 0 0 auto;
`;

type Props = {
  card: CardType;
};

function Success({
  card: { cardNumber, validDate, cardOwnerName, cardColor, cardCompany },
}: Props) {
  const { value: cardName, setValue: setCardName } = useInput('');

  const navigate = useNavigate();
  const dispatch = useContext(CardContext);

  const onClickCheckButton = () => {
    dispatch(actions.addCardToList(cardName));

    navigate('/');
  };

  return (
    <>
      <Message>카드등록이 완료되었습니다.</Message>
      <Card
        bgColor={cardColor}
        company={cardCompany}
        size="large"
        name={makeCardOwnerName(cardOwnerName)}
        number={cardNumber}
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
