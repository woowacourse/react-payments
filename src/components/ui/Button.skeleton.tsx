import { css } from '@emotion/react';
import Skeleton from './Skeleton.tsx';

export interface ButtonSkeletonProps {
  size?: 'lg' | 'md' | 'sm';
  rounded?: boolean;
}

export default function ButtonSkeleton({ size = 'md', rounded = true }: ButtonSkeletonProps) {
  return <Skeleton style={[buttonStyle, sizes[size], rounded ? roundedStyle : null]} />;
}

const buttonStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const roundedStyle = css`
  border-radius: 5px;
`;

const sizes = {
  lg: css`
    height: 52px;
    font-weight: 700;
    font-size: 16px;
  `,
  md: css`
    height: 44px;
    font-weight: 700;
    font-size: 15px;
  `,
  sm: css`
    height: 40px;
    font-weight: 500;
    font-size: 13px;
  `,
};
