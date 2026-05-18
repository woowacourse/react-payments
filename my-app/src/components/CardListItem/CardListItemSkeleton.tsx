import { css, keyframes } from "@emotion/react";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const skeletonStyle = css`
  border-radius: 3px;
  background: linear-gradient(90deg, #ebebeb 25%, #f5f5f5 50%, #ebebeb 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.4s ease infinite;
`;

const CardListItemSkeleton = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 69px;
        border-radius: 5px;
        padding: 12px;
        gap: 12px;
        border: 1px solid #f0f0f0;
        display: flex;
        flex-direction: row;
      `}
    >
      <div
        css={[
          skeletonStyle,
          css`
            width: 64px;
            height: 40px;
            border-radius: 4px;
          `,
        ]}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 4px;
        `}
      >
        <div css={[skeletonStyle, css`width: 80px; height: 14px;`]} />
        <div css={[skeletonStyle, css`width: 140px; height: 10px;`]} />
        <div css={[skeletonStyle, css`width: 60px; height: 9px;`]} />
      </div>
    </div>
  );
};

export default CardListItemSkeleton;
