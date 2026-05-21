import { css, type Theme, type Interpolation } from '@emotion/react';

interface SkeletonProps {
  style: Interpolation<Theme>;
}

export default function Skeleton({ style }: SkeletonProps) {
  return <div className="skeleton" css={[skeletonStyle, style]} />;
}

const skeletonStyle = css`
  animation: skeleton infinite 3s;
  border-radius: 3px;

  @keyframes skeleton {
    0% {
      background-color: #ebebeb;
    }

    30% {
      background-color: #f7f7f7;
    }

    100% {
      background-color: #ebebeb;
    }
  }
`;
