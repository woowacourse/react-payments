import { css } from "@emotion/react";

type InputSectionLayoutProps = {
  children?: React.ReactNode;
  title: string;
  message: string;
  tag: string;
};

const InputSectionLayout = ({
  children,
  title,
  message,
  tag,
}: InputSectionLayoutProps) => {
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
          gap: 8px;
        `}
      >
        {/*제목*/}
        <h2
          css={css`
            font-size: 18px;
            font-weight: 700;
            line-height: 1;
            color: #000;
          `}
        >
          {title}
        </h2>
        {/*설명*/}
        <p
          css={css`
            font-size: 9.5px;
            font-weight: 400;
            line-height: 1;
            color: #8b95a1;
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
            line-height: 15px;
            color: #0a0d13;
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
