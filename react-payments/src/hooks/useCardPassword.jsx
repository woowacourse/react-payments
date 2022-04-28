import { useState } from "react";

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState({
    first: "",
    second: "",
  });

  const onChangeCardPassword = (e) => {
    if (e.target.value.length > 1) {
      return;
    }

    if (
      cardPassword[e.target.name].length < e.target.value.length &&
      e.target.value.length === 1 &&
      e.target.name !== "second"
    ) {
      e.target.parentNode.nextSibling.children[0].focus();
    }

    if (
      cardPassword[e.target.name].length > e.target.value.length &&
      e.target.value.length === 0 &&
      e.target.name !== "first"
    ) {
      e.target.parentNode.previousSibling.children[0].focus();
    }

    setCardPassword({
      ...cardPassword,
      [e.target.name]: e.target.value,
    });
  };

  return [cardPassword, onChangeCardPassword];
};

export default useCardPassword;
