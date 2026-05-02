import { css } from "@emotion/react";

const errorTextStyle = css`
  position: absolute;
  bottom: 2px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;

type ValidatedInputGroupProps = {
  onChange: (index: number, value: string) => void;
  onBlur: (i: number) => void;
  errorMessage: string;
  inputOption: {
    count: number;
    maxLength: number;
    placeHolder: string[];
  };
  values: string[];
  errorIndex: number;
};

const ValidatedInputGroup = ({
  onChange,
  onBlur,
  errorMessage,
  inputOption,
  values,
  errorIndex,
}: ValidatedInputGroupProps) => {
  return (
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
        {Array.from({ length: inputOption.count }).map((_, i) => (
          <input
            key={i}
            maxLength={inputOption.maxLength}
            value={values[i] || ""}
            onChange={(e) => onChange(i, e.target.value)}
            onBlur={() => onBlur(i)}
            css={css`
              flex: 1;
              height: 32px;
              border-radius: 2px;
              min-width: 0;
              border: 1.01px solid ${errorIndex === i ? "#ff3d3d" : "#ACACAC"};
              padding: 8px;
              box-sizing: border-box;
            `}
            placeholder={inputOption.placeHolder[i]}
          />
        ))}
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
  );
};

export default ValidatedInputGroup;
