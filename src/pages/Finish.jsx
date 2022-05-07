import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardListContext, CardDispatchContext } from "context/CardListProvider";
import Card from "components/common/Card";
import Button from "components/common/Button";
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

  const [nickname, setNickname] = useState("");

  const handleChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = () => {
    onEditNickname(Number(id), nickname);
    navigate("/", { replace: true });
  };

  const myCard = cardList.find((card) => Number(card.cardId) === Number(id));

  return (
    <FinishPageWrapper>
      <FinishTitleWrapper>
        <h1>카드 등록이 완료되었습니다.</h1>
      </FinishTitleWrapper>
      <CardWrapper>
        <Card
          key={myCard.cardId}
          size="big"
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
      />
      <FooterWrapper>
        <Button onClick={handleSubmit}>확인</Button>
      </FooterWrapper>
    </FinishPageWrapper>
  );
}

export default Finish;
