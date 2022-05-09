import { useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Card,
  CardForm,
  CardPickModal,
  Header,
  ModalPortal,
} from 'components';

import { CardContext } from 'contexts/CardContext';

import { ReactComponent as Arrow } from 'assets/arrow.svg';
import getMaskedNumbers from 'utils/maskNumbers';

import styled from 'styled-components';

function AddCard() {
  const { cardNumber, cardOwnerName, validDate, cardKind, setCardKind } =
    useContext(CardContext);
  const [isCardPickModal, toggleCardPickModal] = useReducer(
    (visible) => !visible,
    false
  );

  return (
    <Styled.Root>
      <Header title="카드 추가">
        <Link to="/card-list">
          <Button size="small">
            <Arrow />
          </Button>
        </Link>
      </Header>
      <Styled.Card
        bgColor={cardKind.color}
        size="medium"
        name={cardOwnerName}
        number={getMaskedNumbers(cardNumber, '')}
        onClickFunc={toggleCardPickModal}
        title={cardKind.title}
        validDate={validDate}
      />
      <CardForm />
      {isCardPickModal && (
        <ModalPortal>
          <CardPickModal
            setCardKind={setCardKind}
            toggleCardPickModal={toggleCardPickModal}
          />
        </ModalPortal>
      )}
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Card: styled(Card)`
    align-self: center;
    cursor: pointer;
    margin-bottom: 25px;
  `,

  CardAddForm: styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 19px;
  `,

  CardOwnerNameLength: styled.div`
    color: #525252;
    font-size: 12px;
    float: right;
  `,

  Bullet: styled.span`
    color: #04c09e;
    margin-right: 35px;
  `,

  NextButton: styled(Button)`
    align-self: end;
  `,

  CloseButton: styled(Button)`
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 10px;
  `,
};

export default AddCard;
