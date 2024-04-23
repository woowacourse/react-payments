/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styledTitle = css`
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
`;

const styledDescription = css`
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13.76px;
  color: #8b95a1;
`;

interface SectionTitleProps {
  title: string;
  description?: string;
}

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div>
      <h2 css={styledTitle}>{title}</h2>
      {description && <p css={styledDescription}>{description}</p>}
    </div>
  );
}
