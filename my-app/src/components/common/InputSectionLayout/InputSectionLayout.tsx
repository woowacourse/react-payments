import { css } from "@emotion/react";

type InputSectionLayoutProps = {
  children?: React.ReactNode;
  title: string;
  message: string;
  tag?: string;
};

const InputSectionLayout = ({ children, title, message, tag }: InputSectionLayoutProps) => {
  return (
    <div css={containerStyle}>
      <div css={columnStyle}>
        <h2 css={titleStyle}>{title}</h2>
        <p css={messageStyle}>{message}</p>
      </div>
      <div css={columnStyle}>
        {tag && <label css={labelStyle}>{tag}</label>}
        {children}
      </div>
    </div>
  );
};

export default InputSectionLayout;

const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const columnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const titleStyle = css`
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  color: #000;
`;

const messageStyle = css`
  font-size: 9.5px;
  font-weight: 400;
  line-height: 1;
  color: #8b95a1;
`;

const labelStyle = css`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  color: #0a0d13;
`;
