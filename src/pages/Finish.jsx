import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardListContext, CardDispatchContext } from "context/CardListProvider";
import Card from "components/common/Card";
import Button from "components/common/Button";
import useInput from "hooks/useInput";
import { isValidNickname } from "validation";
import { CARD_SIZE } from "constant";
import {
  CardWrapper,
  FooterWrapper,
  FinishPageWrapper,
  FinishTitleWrapper,
  NicknameInput,
} from "./style";

function Finish() {
  const navigate = useNavigate();
  const { id } = useParams();
  const cardList = useContext(CardListContext);
  const { onEditNickname } = useContext(CardDispatchContext);
  const [nickname, handleChangeNickname] = useInput({
    initialValue: "",
    validator: isValidNickname,
  });

  const myCard = cardList.find((card) => Number(card.cardId) === Number(id));

  const handleSubmit = () => {
    onEditNickname(Number(id), nickname);
    navigate("/", { replace: true });
  };

  return (
    <FinishPageWrapper>
      <FinishTitleWrapper>
        <h1>카드 등록이 완료되었습니다.</h1>
      </FinishTitleWrapper>
      <CardWrapper>
        <Card
          key={myCard.cardId}
          size={CARD_SIZE.BIG}
          color={myCard.company.color}
          company={myCard.company.name}
          cardNumbers={myCard.cardNumbers}
          owner={myCard.owner}
          dueMonth={myCard.dueDate.month}
          dueYear={myCard.dueDate.year}
        />
      </CardWrapper>
      <NicknameInput
        type="text"
        name="nickname"
        color="black"
        value={nickname}
        onChange={handleChangeNickname}
        autoFocus
      />
      <FooterWrapper>
        <Button onClick={handleSubmit}>확인</Button>
      </FooterWrapper>
    </FinishPageWrapper>
  );
}

export default Finish;
