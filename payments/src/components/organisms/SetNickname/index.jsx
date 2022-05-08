import React, { useContext } from "react";
import Card from "../../common/Card";
import { Input } from "../../common/Input";
import NextButton from "../../common/NextButton";
import { CardContext } from "../../../context/CardProvider";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import { CardListContext } from "../../../context/CardListProvider";

const SetNickname = ({ setDone }) => {
  const { cardInfo, updateCard } = useContext(CardContext);
  const { updateCardList } = useContext(CardListContext);
  const navigate = useNavigate();
  const handleNickNameChange = (e) => {
    updateCard({
      type: "nickname",
      payload: {
        value: e.target.value,
      },
    });
  };

  const addCard = (e) => {
    e.preventDefault();
    updateCardList({ type: "addCardList", payload: cardInfo });
    updateCard({ type: "initialize" });
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

export default SetNickname;
