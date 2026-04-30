import { css } from "@emotion/react";
import ValidatedInputGroup from "./ValidatedInputGroup.tsx";

import type { Mode } from "../types.ts";

// 이름 생각 필요
export type ContainerMode = {
  mode: Mode;
  onValueHandler: (cardInfo: string[], brand?: string) => void;
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

const Container = ({ mode, onValueHandler }: ContainerMode) => {
  const label = LABEL_MAP[mode];

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
      <ValidatedInputGroup mode={mode} onValueHandler={onValueHandler} />
    </>
  );
};

export default Container;
