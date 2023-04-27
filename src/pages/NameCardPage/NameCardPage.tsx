import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardPreview from "../../components/CardPreview/CardPreview";
import { GlobalContext } from "../../context/GlobalProvider";
import { Button, ButtonBox } from "../AddCardPage/AddCardPage";
import { PAGE } from "../../constant/index";

const NameCardPage = () => {
  const navigate = useNavigate();

  const { cards, currentIndex, setCards } = useContext(GlobalContext);
  const [cardName, setCardName] = useState<string>("");

  const onSubmitHandler = () => {
    cards[currentIndex].cardName = cardName;
    setCards(cards);
    navigate(PAGE.CARD_LIST);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  return (
    <Container>
      <h2>카드등록이 완료되었습니다.</h2>
      <CardPreview card={cards[currentIndex]} />
      <Input placeholder={"카드이름을 지어주세요."} onChange={onChangeHandler} />
      <ButtonBox isVisible={true}>
        <Button onClick={onSubmitHandler}>다음</Button>
      </ButtonBox>
    </Container>
  );
};

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
