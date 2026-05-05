import { css } from "@emotion/react";
const errorTextStyle = css`
  position: absolute;
  bottom: 2px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;
const InputSectionLayout = ({
  children,
  title,
  message,
  tag,
  errorMessage,
}: {
  children?: React.ReactNode;
  title: string;
  message: string;
  tag: string;
  errorMessage?: string;
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
          gap: 8px;
        `}
      >
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

        <div
          css={css`
            position: relative;
            padding-bottom: 20px;
          `}
        >
          <section
            css={css`
              display: flex;
              flex-direction: row;
              gap: 8px;
            `}
          >
            {children}
          </section>
          <span
            css={[
              errorTextStyle,
              css`
                visibility: ${errorMessage ? "visible" : "hidden"};
              `,
            ]}
          >
            {errorMessage}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputSectionLayout;
