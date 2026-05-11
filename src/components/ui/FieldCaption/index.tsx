import { css } from '@emotion/react';

export default function FieldCaption({
  variant = 'default',
  children,
}: {
  variant?: 'default' | 'error';
  children: React.ReactNode;
}) {
  return <span css={[fieldCaptionTypography, variants[variant]]}>{children}</span>;
}

const fieldCaptionTypography = css`
  font-size: 9.5px;
  line-height: 100%;
  padding: 2px 0 1px 0;
`;

const variants = {
  default: css`
    color: var(--color-text-caption);
  `,
  error: css`
    color: var(--color-text-error);
  `,
};
