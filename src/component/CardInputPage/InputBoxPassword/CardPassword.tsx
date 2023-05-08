import { useState, ChangeEvent } from "react";

import CardInfoInput from "../../common/CardInfoInput";

import { makeAppropriatePassword } from "../../../util/trans";
import { nowStatus } from "../../../type";

import "./cardPassword.css";
import { INPUT_LENGTH_LIMIT } from "../../../CONSTANT";

interface CardPasswordProps {
  changeEachPasswordStatus: (partIndex: number, state: nowStatus) => void;
  changePasswordStatus: (
    completeState: boolean,
    value?: string,
    index?: number
  ) => void;
}

export default function CardPassword(props: CardPasswordProps) {
  const { changeEachPasswordStatus, changePasswordStatus } = props;

  const [passwordStatus, setPasswordStatus] = useState<string[]>([]);

  const onChangePassword = (partIndex: number) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const userPassword = e.target.value.slice(
        0,
        INPUT_LENGTH_LIMIT.MAX_EACH_PASSWORD
      );
      const appropriatePassword = makeAppropriatePassword(userPassword);

      if (appropriatePassword !== userPassword) {
        changeEachPasswordStatus(partIndex, 0);
      } else if (appropriatePassword.length === 1) {
        changeEachPasswordStatus(partIndex, 2);
        changePasswordStatus(true, appropriatePassword, partIndex);
      } else {
        changeEachPasswordStatus(partIndex, 1);
      }

      const result = [...passwordStatus];
      result[partIndex] = appropriatePassword;
      setPasswordStatus(result);
    };
  };

  return (
    <>
      {new Array(2).fill(0).map((_, index) => (
        <CardInfoInput
          inputPlace="essential"
          key={`card-password-${index + 1}`}
          name={`card-password-${index + 1}`}
          className="input-password input-password"
          type="password"
          onChange={onChangePassword(index)}
          value={passwordStatus[index]}
        />
      ))}
      {new Array(2).fill(0).map((_, index) => (
        <input
          key={`card-password-${index + 3}`}
          className="input-password"
          disabled
          type="password"
          defaultValue={0}
        />
      ))}
    </>
  );
}
