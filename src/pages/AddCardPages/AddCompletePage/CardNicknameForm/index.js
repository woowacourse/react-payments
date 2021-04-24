import { Button, Form, Input } from '../../../../components';
import './style.css';

export const CardNicknameForm = () => {
  return (
    <Form className="CardNicknameForm">
      <Input
        className="CardNicknameInput__Field"
        container="CardNicknameInput__Filler--transparent"
        value="엄카"
      />
      <Button onClick={() => {}}>확인</Button>
    </Form>
  );
};
