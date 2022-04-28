import { useState } from "react";
import { MAX_LENGTH } from "../constants";
import { checkNextFocus, checkPrevFocus, isOverMaxLength } from "../util";

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState({
    first: "",
    second: "",
  });

  const onChangeCardPassword = ({ target }) => {
    if (isOverMaxLength(target, MAX_LENGTH.CARD_PASSWORD)) {
      return;
    }

    const nextElement = target.parentNode.nextSibling?.children[0];
    const prevElement = target.parentNode.previousSibling?.children[0];

    checkNextFocus({
      target,
      value: cardPassword,
      maxLength: MAX_LENGTH.CARD_PASSWORD,
      nextElement,
    });
    checkPrevFocus({
      target,
      value: cardPassword,
      prevElement,
    });

    setCardPassword({
      ...cardPassword,
      [target.name]: target.value,
    });
  };

  return [cardPassword, onChangeCardPassword];
};

export default useCardPassword;
