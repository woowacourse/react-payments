import "./index.scss";

import Card from "../../common/Card";
import Input from "../../common/Input";
import NextButton from "../../common/NextButton";

import { useCardContext } from "../../../context/CardProvider";
import { useCardListContext } from "../../../context/CardListProvider";

import { CARD_LIST_ACTION } from "../../../hooks/useCardList";
import { CARD_ACTION } from "../../../hooks/useCard";
import { Link, useNavigate } from "react-router-dom";

const NicknameInputContainer = ({ setDone }) => {
  const { cardInfo, updateCard } = useCardContext();
  const { updateCardList } = useCardListContext();
  const navigate = useNavigate();
  const handleNickNameChange = (e) => {
    updateCard({
      type: CARD_ACTION.SET_NICKNAME,
      payload: {
        value: e.target.value,
      },
    });
  };

  const addCard = (e) => {
    e.preventDefault();
    updateCardList({ type: CARD_LIST_ACTION.ADD_CARD, payload: cardInfo });
    updateCard({ type: CARD_ACTION.INITIALIZE });
    setDone(false);
    navigate("/");
  };

  return (
    <div className="nickname--container">
      <h2>카드등록이 완료되었습니다.</h2>
      <Card cardInfo={cardInfo} />
      <form onSubmit={addCard}>
        <div className="input--container">
          <Input
            placeholder={"이름 입력(30자 이하로 입력해주세요)"}
            onChange={handleNickNameChange}
            value={cardInfo.nickname}
            maxLength={30}
          />
        </div>
        <div className="next-button--container">
          <Link to="/" onClick={addCard}>
            <NextButton>다음</NextButton>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NicknameInputContainer;
