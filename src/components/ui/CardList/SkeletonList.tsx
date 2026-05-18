import { css, keyframes } from '@emotion/react';

export default function SkeletonList() {
  return (
    <div css={containerStyle}>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} css={itemStyle}>
          <div css={thumbnailStyle} />
          <div css={textGroupStyle}>
            <div css={[lineStyle, { width: 80, height: 14 }]} />
            <div css={[lineStyle, { width: 140, height: 10 }]} />
            <div css={[lineStyle, { width: 60, height: 9 }]} />
          </div>
        </div>
      ))}
      <div css={buttonStyle} />
    </div>
  );
}

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const skeletonBase = css`
  background: linear-gradient(
    90deg,
    var(--color-background-skeleton) 25%,
    var(--color-background-skeleton-highlight) 50%,
    var(--color-background-skeleton) 75%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  border-radius: 4px;
`;

const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const itemStyle = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--color-border-skeleton);
  border-radius: 5px;
`;

const thumbnailStyle = css`
  ${skeletonBase}
  width: 60px;
  height: 40px;
  flex-shrink: 0;
`;

const textGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

const lineStyle = css`
  ${skeletonBase}
`;

const buttonStyle = css`
  ${skeletonBase}
  width: 320px;
  height: 44px;
  border-radius: 5px;
`;
