import styled from '@emotion/styled';

const SKELETON_COLOR = '#EBEBEB';

export const CardListLoadingContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SkeletonCardItem = styled.div`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;

  border-radius: 5px;
  border: 1px solid #e6e6e6;

  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SkeletonCardPreview = styled.div`
  flex-shrink: 0;
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background-color: ${SKELETON_COLOR};

  animation: pulse 1.4s ease-in-out infinite;
`;

export const SkeletonCardInfo = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SkeletonLine = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  height: 10px;
  border-radius: 4px;
  background-color: ${SKELETON_COLOR};

  animation: pulse 1.4s ease-in-out infinite;
`;

export const SkeletonAddButton = styled.div`
  width: 100%;
  height: 44px;
  box-sizing: border-box;

  border-radius: 5px;
  border: 1px dashed #e6e6e6;
  background-color: #fafafa;

  animation: pulse 1.4s ease-in-out infinite;
`;

export const GlobalAnimation = styled.div`
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.45;
    }
  }
`;
