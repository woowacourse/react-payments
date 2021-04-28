import { createRef, useEffect } from 'react';
import { Button, Form, Input } from '../../../../components';
import { handleNicknameInputChange, handleNicknameSubmit } from './handler';
import './style.css';

export const CardNicknameForm = (props) => {
  const { setRoute, setCardInfo, nickname, initialCardInfo } = props;
  const ref = createRef();

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
        onChange={(e) => handleNicknameInputChange({ e, setCardInfo })}
      />
      <Button disabled={nickname === initialCardInfo.nickname} onClick={(e) => handleNicknameSubmit({ e, setRoute })}>
        확인
      </Button>
    </Form>
  );
};
