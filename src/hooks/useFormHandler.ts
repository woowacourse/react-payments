import { FormEvent, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { CARD_REGISTER_SUCCESS_MESSAGE, ROUTES } from "../constants/constants";
import { setInitialState } from "../reducer/cardReducer";
import { IInitialState } from "../types/cardInfoState";

export default function useFormHandler(
  state: IInitialState,
  dispatch: (value: any) => void
) {
  const navigate = useNavigate();

  const handleFocusKeyDown = (event: KeyboardEvent<HTMLFormElement>) => {
    const target = event.target as HTMLFormElement;
    const key = event.key;
    const targetInputList = [...target.form].filter((input) =>
      input.classList.contains(`${target.name}`)
    );

    if (target.value.length === target.maxLength) {
      const nextIndex = targetInputList.indexOf(target) + 1;
      targetInputList[nextIndex]?.focus();

      return;
    }

    if (target.value.length === 0 && key === "Backspace") {
      const nextIndex = targetInputList.indexOf(target) - 1;
      targetInputList[nextIndex]?.focus();

      return;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert(CARD_REGISTER_SUCCESS_MESSAGE);

    const storage = JSON.parse(localStorage.getItem("cardInfo") || "[]");
    storage.push(state);
    localStorage.setItem("cardInfo", JSON.stringify(storage));

    dispatch(setInitialState());
    navigate(ROUTES.HOME, { replace: true });
  };

  return {
    handleFocusKeyDown,
    handleSubmit,
  };
}
