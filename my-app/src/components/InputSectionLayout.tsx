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
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 16px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 4px;
        `}
      >
        {/*제목*/}
        <h2
          css={css`
            font-size: 18px;
            font-weight: 700;
          `}
        >
          {title}
        </h2>
        {/*설명*/}
        <p
          css={css`
            font-size: 9.5px;
            font-weight: 400;
          `}
        >
          {message}
        </p>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 8px;
        `}
      >
        {/* 카드번호*/}
        <label
          css={css`
            font-size: 12px;
            font-weight: 500;
          `}
        >
          {tag}
        </label>
        {children}
      </div>
    </div>
  );
};

export default InputSectionLayout;
