import { css } from '@emotion/react';

export default function FieldTitle({ children }: { children: React.ReactNode }) {
  return <h3 css={fieldTitleTypography}>{children}</h3>;
}

const fieldTitleTypography = css`
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  padding: 2px 0;
  color: var(--color-text-title);
`;
