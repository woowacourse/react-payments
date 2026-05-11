import { css } from '@emotion/react';
import FieldTitle from '../FieldTitle';
import FieldCaption from '../FieldCaption';

export interface FormFieldProps {
  title: string;
  caption: string;
  error: boolean;
  errorMessage: string;
  children: React.ReactNode;
}

export default function FormField({ title, caption, error, errorMessage, children }: FormFieldProps) {
  return (
    <div css={formFieldStyle}>
      <div css={formFieldTitleWrapperStyle}>
        <FieldTitle>{title}</FieldTitle>
        {caption && <FieldCaption>{caption}</FieldCaption>}
      </div>
      <div css={formFieldInputWrapperStyle}>
        {children}
        <FieldCaption variant={'error'}>{error ? errorMessage : '\u00A0'}</FieldCaption>
      </div>
    </div>
  );
}

const formFieldStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const formFieldTitleWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const formFieldInputWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;

  legend,
  label {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--color-text-label);
  }
`;
