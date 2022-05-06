import React, { useContext } from "react";
import Card from "../../components/common/Card";
import { Input } from "../../components/common/Input";
import NextButton from "../../components/common/NextButton";
import { CardContext } from "../../context/CardProvider";
import { Link } from "react-router-dom";
import "./index.scss";

const SetNickname = () => {
  const { cardInfo, dispatch } = useContext(CardContext);

  const handleNickNameChange = (e) => {
    dispatch({
      type: "nickname",
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <div className="nickname--container">
      <h2>카드등록이 완료되었습니다.</h2>
      <Card cardInfo={cardInfo} />
      <form>
        <div className="input--container">
          <Input
            placeholder={"nickname"}
            onChange={handleNickNameChange}
            value={cardInfo.nickname}
          />
        </div>
        <div className="next-button--container">
          <Link to="/">
            <NextButton>다음</NextButton>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SetNickname;
