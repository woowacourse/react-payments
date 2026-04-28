import { css } from "@emotion/react";
import { useState } from "react";

type Mode = "CARD" | "EXP" | "CVC";

type ContainerMode = {
  mode: Mode;
};

const LABEL_MAP = {
  CARD: {
    title: "결제할 카드 번호를 입력해 주세요",
    message: "본인 명의의 카드만 결제 가능합니다.",
    tag: "카드 번호",
  },
  EXP: {
    title: "카드 유효기간을 입력해 주세요",
    message: "월/년도(MMYY)를 순서대로 입력해 주세요.",
    tag: "유효기간",
  },
  CVC: {
    title: "CVC 번호를 입력해 주세요",
    message: "",
    tag: "CVC",
  },
};

const INPUT_FIELD_COUNT = {
  CARD: 4,
  EXP: 2,
  CVC: 1,
};

const Container = ({ mode }: ContainerMode) => {
  const [errorMessage, setErrorMessage] = useState("");
  const label = LABEL_MAP[mode];
  const inputFieldCount = INPUT_FIELD_COUNT[mode];

  return (
    <>
      {/* 결제할 카드 번호 입력 제목*/}
      <h1
        css={css`
          font-size: 18px;
          font-weight: 700;
        `}
      >
        {label.title}
      </h1>
      {/* 결제할 카드 번호 입력 설명*/}
      <p
        css={css`
          font-size: 9.5px;
          font-weight: 400;
        `}
      >
        {label.message}
      </p>
      {/* 카드번호*/}
      <span
        css={css`
          font-size: 12px;
          font-weight: 500;
        `}
      >
        {label.tag}
      </span>

      {/* 인풋필드 4개*/}
      <section
        css={css`
          display: flex;
          flex-direction: row;
          gap: 10px;
        `}
      >
        {Array.from({ length: inputFieldCount }).map((_, i) => (
          <input
            key={i}
            css={css`
              width: 71.25px;
              height: 32px;
            `}
          ></input>
        ))}
      </section>
      <span
        css={css`
          font-size: 9.5px;
          font-weight: 400;
          color: #ff3d3d;
          display: none;
        `}
      >
        {errorMessage}
      </span>
    </>
  );
};

export default Container;
