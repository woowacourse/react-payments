// ValidatedInputGroup.tsx
import { css } from "@emotion/react";

const ValidatedInputGroup = ({
  onChange,
  onBlur,
  errorMessage,
  inputOption,
  values,
  errorIndex,
}: {
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
}) => {
  return (
    <>
      <section
        css={css`
          display: flex;
          flex-direction: row;
          gap: 10px;
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
              border-width: 1.01px;
              border-color: ${errorIndex === i ? "#ff3d3d" : "#ACACAC"};
            `}
            placeholder={inputOption.placeHolder[i]}
          />
        ))}
      </section>
      <span
        css={css`
          font-size: 9.5px;
          font-weight: 400;
          color: #ff3d3d;
          display: ${errorMessage ? "block" : "none"};
        `}
      >
        {errorMessage}
      </span>
    </>
  );
};

export default ValidatedInputGroup;
