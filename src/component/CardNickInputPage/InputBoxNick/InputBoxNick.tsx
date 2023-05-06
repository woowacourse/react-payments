import { useNavigate } from "react-router-dom";
import { ChangeEvent, KeyboardEvent, useState } from "react";

import "./inputBoxNick.css";

interface InputBoxNickProps {
  submitNickAndSetCard: (nick: string) => void;
}

export default function InputBoxNick({
  submitNickAndSetCard,
}: InputBoxNickProps) {
  const [nick, setNick] = useState("");

  const changeNickInput = (e: ChangeEvent<HTMLInputElement>) => {
    const appropriateNick = e.target.value.slice(0, 10);
    setNick(appropriateNick);
    submitNickAndSetCard(appropriateNick);
  };

  const navigate = useNavigate();
  const submitNickInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") navigate("/CardListPage");
  };

  return (
    <label className="card-nick-input-container">
      <input
        className="card-nick-input"
        onChange={changeNickInput}
        onKeyDown={submitNickInput}
        value={nick}
        placeholder="카드 별명을 10자 이내로 입력해주세요."
      />
      <p
        className="card-nick-input-length"
        aria-label="현재 글자수/제한 글자수"
      >
        {nick.length} / 10
      </p>
    </label>
  );
}
