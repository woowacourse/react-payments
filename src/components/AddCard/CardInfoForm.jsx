import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useResetInput from "../../Hooks/useResetInput";

const StyledCardInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function CardInfoForm({ children }) {
  const navigate = useNavigate();
  const { handleResetInput } = useResetInput();

  const focusNextInput = ({ target }) => {
    if (target.value.length !== target.maxLength) return;

    const targetInputList = [...target.form].filter((input) =>
      input.classList.contains(`${target.name}`)
    );

    const nextIndex = targetInputList.indexOf(target) + 1;
    targetInputList[nextIndex]?.focus();
  };

  const focusPrevInput = (event) => {
    const { target } = event;
    if (target.value.length !== 0 || event.key !== "Backspace") return;

    const targetInputList = [...target.form].filter((input) =>
      input.classList.contains(`${target.name}`)
    );

    const prevIndex = targetInputList.indexOf(target) - 1;
    targetInputList[prevIndex]?.focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const cardDataList = [...formData.entries()];

    const completeCardInfo = cardDataList.reduce((resultCardInfo, cardData) => {
      const [cardInfoKey, cardInfoValue] = cardData;
      resultCardInfo[cardInfoKey] = resultCardInfo[cardInfoKey]
        ? (resultCardInfo[cardInfoKey] += `,${cardInfoValue}`)
        : (resultCardInfo[cardInfoKey] = cardInfoValue);

      return resultCardInfo;
    }, {});

    const cardInfo = JSON.parse(localStorage.getItem("cardInfo")) ?? [];
    cardInfo.push(completeCardInfo);
    localStorage.setItem("cardInfo", JSON.stringify(cardInfo));

    navigate("/possess-card", { replace: true });
  };

  return (
    <StyledCardInfoForm
      autoComplete="off"
      onChange={focusNextInput}
      onKeyDown={focusPrevInput}
      onSubmit={(e) => {
        handleSubmit(e);
        handleResetInput();
      }}
    >
      {children}
    </StyledCardInfoForm>
  );
}
