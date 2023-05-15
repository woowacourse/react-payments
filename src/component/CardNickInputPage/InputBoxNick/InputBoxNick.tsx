import { useNavigate } from "react-router-dom";
import { ChangeEvent, KeyboardEvent, useState } from "react";

import "./inputBoxNick.css";
import { ARIA_LABEL_MESSAGE, PLACE_HOLDER } from "../../../constant/message";
import { INPUT_LENGTH_LIMIT } from "../../../constant/etc";
import { LINK_KEYWORD } from "../../../constant/page";

interface InputBoxNickProps {
  submitNickAndSetCard: (nick: string) => void;
}

export default function InputBoxNick({
  submitNickAndSetCard,
}: InputBoxNickProps) {
  const [nick, setNick] = useState("");

  const changeNickInput = (e: ChangeEvent<HTMLInputElement>) => {
    const appropriateNick = e.target.value.slice(
      0,
      INPUT_LENGTH_LIMIT.MAX_NICK
    );
    setNick(appropriateNick);
    submitNickAndSetCard(appropriateNick);
  };

  const navigate = useNavigate();
  const submitNickInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") navigate(LINK_KEYWORD.CARD_LIST);
  };

  return (
    <label className="card-nick-input-container">
      <input
        className="card-nick-input"
        onChange={changeNickInput}
        onKeyDown={submitNickInput}
        value={nick}
        placeholder={PLACE_HOLDER.NICK}
      />
      <p
        className="card-nick-input-length"
        aria-label={ARIA_LABEL_MESSAGE.COMPARE_NOW_LENGTH_AND_LIMIT}
      >
        {nick.length} / {INPUT_LENGTH_LIMIT.MAX_NICK}
      </p>
    </label>
  );
}
