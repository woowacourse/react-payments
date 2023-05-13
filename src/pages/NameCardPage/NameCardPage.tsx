import { useCallback, useContext } from "react";
import styled, { keyframes } from "styled-components";
import CardPreview from "../../components/CardPreview/CardPreview";
import { GlobalContext } from "../../context/GlobalProvider";
import { PAGE } from "../../constant/PagePath";
import { Button } from "../../components/common/Button";
import { AddCardStateContext } from "../../context/AddCardStateProvider";
import { Card } from "../../types";
import useSpinner from "../../hooks/useSpinner";

const NameCardPage = () => {
  const { isLoading, startLoading, navigateAfterLoading } = useSpinner();
  const { cards, setCards } = useContext(GlobalContext);
  const { cardInfo, setCardInfo } = useContext(AddCardStateContext);
  const { cardName, cardCompany, cardNumber, expirationDate, ownerName, securityCode, password } = cardInfo;

  const onSubmitHandler = useCallback(() => {
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
    startLoading();
  }, [isLoading]);

  if (isLoading) return navigateAfterLoading(PAGE.CARD_LIST);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardInfo({ ...cardInfo, cardName: e.target.value });
  };

  return (
    <Container>
      <Message>카드 별칭을 지어주세요.</Message>
      <CardPreview card={{ cardCompany, cardNumber, expirationDate, ownerName }} />
      <Form onSubmit={onSubmitHandler}>
        <Input value={cardName} placeholder={"카드이름을 지어주세요."} onChange={onChangeHandler} autoFocus />
        <Button isVisible={true}>확인</Button>
      </Form>
    </Container>
  );
};

const fadeIn = keyframes`
  from  { opacity: 0; }
  to  { opacity: 1; }
`;

const Message = styled.h2`
  animation: ${fadeIn} 1s;
`;

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
