import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface Props {
  width: string;
  height: string;
}

export default function Skeleton({ width, height }: Props) {
  return <Wrapper $width={width} $height={height} />;
}

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Wrapper = styled.div<{ $width: string; $height: string }>`
  width: ${({ $width }) => ($width ? $width : '100%')};
  height: ${({ $height }) => ($height ? $height : '100%')};
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #f7f7f7 50%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
`;

