import { css } from "@emotion/react";

export const baseInputStyle = css`
  flex: 1;
  height: 32px;
  border-radius: 2px;
  min-width: 0;
  padding: 8px;
  box-sizing: border-box;
`;

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
      <fieldset
        css={css`
          display: flex;
          flex-direction: column;
          gap: 8px;
          border: none;
          padding: 0;
          margin: 0;
          min-width: 0;
        `}
      >
        <legend
          css={css`
            font-size: 12px;
            font-weight: 500;
            line-height: 15px;
            color: #0a0d13;
            float: left;
            width: 100%;
          `}
        >
          {tag}
        </legend>

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
      </fieldset>
    </div>
  );
};

export default InputSectionLayout;
