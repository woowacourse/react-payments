import { css } from "@emotion/react";

// 현재 : ValidatedInputGroup을 감싸는 형태 => 자식으로 받는 형태 (합성)

const InputSectionLayout = ({
  children,
  title,
  message,
  tag,
}: {
  children?: React.ReactNode;
  title: string;
  message: string;
  tag: string;
}) => {
  return (
    <>
      {/*제목*/}
      <h1
        css={css`
          font-size: 18px;
          font-weight: 700;
        `}
      >
        {title}
      </h1>
      {/*설명*/}
      <p
        css={css`
          font-size: 9.5px;
          font-weight: 400;
        `}
      >
        {message}
      </p>
      {/* 카드번호*/}
      <span
        css={css`
          font-size: 12px;
          font-weight: 500;
        `}
      >
        {tag}
      </span>
      {children}
    </>
  );
};

export default InputSectionLayout;
