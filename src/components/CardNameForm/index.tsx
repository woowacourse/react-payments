import React, { useEffect, useState, useContext } from "react";

import Input from "../../common/Input";
import { useNavigate } from "react-router-dom";
import { Context } from "../../contexts/store";

export default function CardNameForm() {
  const [isNextButtonShown, setIsNextButtonShown] = useState(false);
  const [cardName, setCardName] = useState("");
  const navigate = useNavigate();
  const [state, dispatch] = useContext(Context);

  const onChangeCardName = e => {
    setCardName(e.target.value);
  };

  useEffect(() => {
    if (cardName.length > 0) {
      setIsNextButtonShown(true);

      return;
    }
    setIsNextButtonShown(false);
  }, [cardName]);

  return (
    <form
      className="card-name-form h-100"
      onSubmit={e => {
        e.preventDefault();
        // ToDo: 서버에 모든 정보 저장
        const date = new Date();
        const data = JSON.parse(localStorage.getItem("card-list"));
        const id = date.getTime();

        let newData;

        if (data) {
          newData = [...data, { ...state, cardName, id }];
        } else {
          newData = [{ ...state, cardName, id }];
        }

        localStorage.setItem("card-list", JSON.stringify(newData));
        dispatch({ type: "RESET" });
        navigate("/cardList");
      }}
    >
      <Input
        shape="input-underline"
        placeholder="카드 이름을 입력해주세요."
        size="large"
        type="text"
        maxLength={10}
        value={cardName}
        onChange={onChangeCardName}
      ></Input>
      {isNextButtonShown && (
        <button type="submit" className="submit-button card-name-form-button">
          확인
        </button>
      )}
    </form>
  );
}
