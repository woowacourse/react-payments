import { ChangeEvent, useState } from "react";
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

  return (
    <div className="card-nick-input-container">
      <input
        className="card-nick-input"
        onChange={changeNickInput}
        value={nick}
      />
      <p className="card-nick-input-length">{nick.length} / 10</p>
    </div>
  );
}
