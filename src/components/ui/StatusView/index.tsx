import { css } from '@emotion/react';

interface StatusViewProps {
  visual?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function StatusView({ visual, title, description, action }: StatusViewProps) {
  return (
    <section css={sectionStyle}>
      <div css={topStyle}>
        {visual && <div css={visualStyle}>{visual}</div>}
        <h2 css={titleStyle}>{title}</h2>
        {description && <p css={descriptionStyle}>{description}</p>}
        {action && <div css={actionStyle}>{action}</div>}
      </div>
      <div css={spacerStyle} />
    </section>
  );
}

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const topStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

const visualStyle = css`
  margin-bottom: 4px;
`;

const titleStyle = css`
  font-size: 20px;
  font-weight: bold;
  color: #353c49;
`;

const descriptionStyle = css`
  font-size: 13px;
  color: #8c8c8c;
`;

const actionStyle = css`
  width: 100%;
`;

const spacerStyle = css`
  flex: 1;
`;
