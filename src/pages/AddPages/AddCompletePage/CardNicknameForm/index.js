import { useRef, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Input } from '../../../../components';
import { MAX_NICKNAME_LENGTH, ROUTE } from '../../../../constants';
import { CardListContext } from '../../../../contexts';

export const CardNicknameForm = (props) => {
  const { cardInfo, setCardInfo, initialNickname } = props;
  const setNickname = (nickname) => setCardInfo((prevState) => ({ ...prevState, nickname }));
  const { nickname } = cardInfo;
  const { addCard } = useContext(CardListContext);
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Form className="CardNicknameForm">
      <Input
        className="CardNicknameInput__Field"
        placeholder="카드 별칭"
        container="CardNicknameInput__Filler--transparent"
        value={nickname}
        ref={ref}
        onChange={(e) => handleNicknameInputChange({ e, setNickname })}
      />
      <Button
        className="CardNicknameForm__Submit_Button"
        disabled={nickname === initialNickname}
        onClick={(e) => handleNicknameSubmit({ e, cardInfo, addCard, history })}
      >
        확인
      </Button>
    </Form>
  );
};

function handleNicknameInputChange({ e, setNickname }) {
  const slicedInputValue = e.target.value.slice(0, MAX_NICKNAME_LENGTH);
  setNickname(slicedInputValue);
}

function handleNicknameSubmit({ e, cardInfo, addCard, history }) {
  e.preventDefault();

  addCard(cardInfo);
  history.push(ROUTE.HOME);
}
