import { ChangeEvent, FormEvent, KeyboardEvent, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { setInitialState } from "../../reducer/cardReducer";
import { CardInfoContext } from "../../contexts/CardInfoContext";
import {
  CARD_REGISTER_SUCCESS_MESSAGE,
  ROUTES,
} from "../../constants/constants";

const StyledCardInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function CardInfoForm({ children }: { children: any }) {
  const { state, dispatch } = useContext(CardInfoContext);
  const navigate = useNavigate();

  const focusNextInput = (event: ChangeEvent<HTMLFormElement>) => {
    const { target } = event;

    if (target.value.length !== target.maxLength) return;

    const targetInputList = [...target.form].filter((input) =>
      input.classList.contains(`${target.name}`)
    );

    const nextIndex = targetInputList.indexOf(target) + 1;
    targetInputList[nextIndex]?.focus();
  };

  const focusPrevInput = (event: KeyboardEvent<HTMLFormElement>) => {
    const target = event.target as HTMLFormElement;

    if (target.value.length !== 0 || event.key !== "Backspace") return;

    const targetInputList = [...target.form].filter((input) =>
      input.classList.contains(`${target.name}`)
    );

    const prevIndex = targetInputList.indexOf(target) - 1;
    targetInputList[prevIndex]?.focus();
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

  return (
    <StyledCardInfoForm
      autoComplete="off"
      onChange={focusNextInput}
      onKeyDown={focusPrevInput}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {children}
    </StyledCardInfoForm>
  );
}
