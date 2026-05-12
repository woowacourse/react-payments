import { css, keyframes } from '@emotion/react';
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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const formFieldStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${slideIn} 0.5s ease;
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
