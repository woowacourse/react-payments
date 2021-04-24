import { Button, Form, Input } from '../../../../components';
import './style.css';
import { PAGE } from '../../../../constants';

export const CardNicknameForm = (props) => {
  const { setRoute } = props;

  const handleNicknameSubmit = (e) => {
    e.preventDefault();
    setRoute(PAGE.CARD_LIST);
  };

  return (
    <Form className="CardNicknameForm">
      <Input
        className="CardNicknameInput__Field"
        container="CardNicknameInput__Filler--transparent"
        value="엄카"
      />
      <Button onClick={handleNicknameSubmit}>확인</Button>
    </Form>
  );
};
