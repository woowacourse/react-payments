/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const errorColor = "#ff3d3d";

const styledTextError = css`
  color: ${errorColor};
  font-size: 9.5px;
  line-height: 13.76px;
  font-weight: 400;
  margin-top: 5px;
  height: 10px;
`;

const styledLabel = css`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 500;
  margin-top: 10px;
  gap: 5px;
`;

const styledInputContainer = css`
  display: flex;
  width: 100%;
  gap: 5px;

  input {
    width: 0px;
    flex: 1;
    border: 1px solid #acacac;
    border-radius: 2px;
    padding: 8px;
    outline: none;
  }

  input::placeholder {
    color: #acacac;
  }

  input:invalid {
    border: 1px solid ${errorColor};
  }

  input:focus {
    border: 1px solid black;
  }
`;

interface FormItemProps {
  labelText: string;
  errorMessage?: string;
}

export default function FormItem({
  labelText,
  errorMessage = "",
  children,
}: React.PropsWithChildren<FormItemProps>) {
  return (
    <div>
      <label css={styledLabel}>
        {labelText}
        <div css={styledInputContainer}> {children}</div>
      </label>
      <p css={styledTextError}>{errorMessage}</p>
    </div>
  );
}
