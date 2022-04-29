import { useState } from "react";
import { MAX_LENGTH } from "../constants";

const isInValidCardPassword = (cardPassword) =>
  Object.values(cardPassword).some((password) => password.length !== 1);

const isCompletePasswordInput = (cardPassword) =>
  Object.values(cardPassword).every(
    (password) => password >= MAX_LENGTH.CARD_PASSWORD
  );

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState({
    first: "",
    second: "",
  });
  const [cardPasswordReady, setCardPasswordReady] = useState(false);

  const checkReady = () => {
    if (isInValidCardPassword(cardPassword) === cardPasswordReady) {
      setCardPasswordReady((prev) => !prev);
    }
  };

  const onChangeCardPassword = ({ target }) => {
    setCardPassword({
      [target.name]: target.value,
    });
  };

  const onClickCardPasswordVirtualKeyboard = (value) => {
    if (isCompletePasswordInput(cardPassword)) {
      return;
    }

    if (cardPassword.first === "") {
      setCardPassword((prev) => {
        return { ...prev, first: prev.first + value };
      });
      return;
    }

    setCardPassword((prev) => {
      return { ...prev, second: prev.second + value };
    });
  };

  const onClickCardPasswordBackspaceButton = () => {
    if (cardPassword.second === "") {
      setCardPassword((prev) => {
        return { ...prev, first: prev.first.slice(0, -1) };
      });
      return;
    }

    setCardPassword((prev) => {
      return { ...prev, second: prev.second.slice(0, -1) };
    });
  };

  checkReady();

  return [
    cardPassword,
    onClickCardPasswordBackspaceButton,
    onClickCardPasswordVirtualKeyboard,
    onChangeCardPassword,
    cardPasswordReady,
  ];
};

export default useCardPassword;
