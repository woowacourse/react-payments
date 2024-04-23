import { css } from '@emotion/react';
import InputTitle from './InputTitle';
import ErrorMessage from './ErrorMessage';
import { ErrorCardType } from '../../types/cardType';

interface InputGroupType {
  title: string;
  subtitle?: string;
  label: string;
  error?: ErrorCardType;
  children: React.ReactNode;
}

function InputGroup({ title, subtitle, label, error, children }: InputGroupType) {
  return (
    <div css={inputGroupStyle}>
      <div css={inputTitleStyle}>
        <InputTitle title={title} subtitle={subtitle} />
      </div>
      <div css={inputContainerStyle}>
        <label css={labelStyle}>{label}</label>
        <div css={inputBoxStyle}> {children}</div>
        {error && <ErrorMessage error={error}></ErrorMessage>}
      </div>
    </div>
  );
}
const inputBoxStyle = css`
  display: flex;
  gap: 10px;
`;
const inputGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const inputTitleStyle = css`
  display: flex;
  flex-direction: column;
`;

const labelStyle = css`
  font-size: 12px;
  color: #0a0d13;
`;

const inputContainerStyle = css`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 100%;
`;

export default InputGroup;
