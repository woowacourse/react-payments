import { useRef, useEffect } from 'react';
import { Button, Form, Input } from '../../../../components';
import { handleNicknameInputChange, handleNicknameSubmit } from './handler';

export const CardNicknameForm = (props) => {
  const { setRoute, cardInfo, setCardInfo, initialNickname, addCardInfoToList } = props;
  const setNickname = (nickname) => setCardInfo((prevState) => ({ ...prevState, nickname }));
  const { nickname } = cardInfo;
  const ref = useRef();

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
        onClick={(e) => handleNicknameSubmit({ e, setRoute, cardInfo, addCardInfoToList })}
      >
        확인
      </Button>
    </Form>
  );
};
