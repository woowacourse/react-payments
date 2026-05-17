import { keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
`;

type SkeletonBlockProps = {
  width: string;
  height: string;
  borderRadius: string;
};

export default function SkeletonBlock({ width, height, borderRadius }: SkeletonBlockProps) {
  return (
    <div
      css={(theme) => ({
        width,
        height,
        borderRadius,
        backgroundImage: `linear-gradient(
          90deg,
          ${theme.colors.loading} 0%,
          #f7f7f7 50%,
          ${theme.colors.loading} 100%
        )`,
        backgroundSize: '200% 100%',
        animation: `${shimmer} 1.4s ease-in-out infinite`,
      })}
    />
  );
}
