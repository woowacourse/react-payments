import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardPreview from "../../components/CardPreview/CardPreview";
import { GlobalContext } from "../../context/GlobalProvider";
import { PAGE } from "../../constant/index";
import { Button } from "../../components/common/Button";
import { AddCardStateContext } from "../../context/AddCardStateProvider";
import { Card } from "../../types";

const NameCardPage = () => {
  const navigate = useNavigate();

  const { cards, setCards } = useContext(GlobalContext);
  const { cardCompany, cardNumber, expirationDate, ownerName, securityCode, password, cardName, setCardName } =
    useContext(AddCardStateContext);

  const onSubmitHandler = () => {
    const card: Card = {
      cardName,
      cardCompany,
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      password,
    };

    setCards([...cards, card]);
    navigate(PAGE.CARD_LIST);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  return (
    <Container>
      <h2>카드등록이 완료되었습니다.</h2>
      <CardPreview card={{ cardCompany, cardNumber, expirationDate, ownerName }} />
      <Form onSubmit={onSubmitHandler}>
        <Input placeholder={"카드이름을 지어주세요."} onChange={onChangeHandler} autoFocus />
        <Button isVisible={true}>확인</Button>
      </Form>
    </Container>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 19px;

  width: 100%;
`;

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;

  width: 375px;
  height: 700px;

  padding: 26px 28px;

  background-color: #fff;
`;

const Input = styled.input`
  margin: 96px 0px;

  padding: 10px;

  width: 100%;

  border: none;
  border-bottom: 1px solid #000000;

  text-align: center;

  &:focus {
    outline: none;
  }
`;

export default NameCardPage;
