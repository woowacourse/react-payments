import styled, { keyframes } from 'styled-components';

const CardListSkeleton = () => {
  return (
    <Wrapper role="status" aria-label="카드 목록을 불러오는 중">
      {Array.from({ length: 3 }).map((_, index) => (
        <SkeletonItem key={index}>
          <SkeletonInfoGroup>
            <SkeletonColorBox />

            <SkeletonTextGroup>
              <SkeletonLine $width="80px" $height="16px" />
              <SkeletonLine $width="150px" $height="12px" />
              <SkeletonLine $width="100px" $height="12px" />
            </SkeletonTextGroup>
          </SkeletonInfoGroup>
        </SkeletonItem>
      ))}
      <SkeletonAddButton />
    </Wrapper>
  );
};

const shimmer = keyframes`
  0% {
    background-position: 100% 0;
  }

  100% {
    background-position: -100% 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  gap: 16px;

  width: 100%;
`;

const SkeletonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 18px 20px;

  border: 1px solid #e6e6e6;
  border-radius: 3px;

  position: relative;

  padding: 12px;
  border-radius: 8px;
  background-color: #ffffff;

  &::before {
    content: '';
    position: absolute;
    inset: 0;

    padding: 0%.5px;
    border-radius: inherit;

    background: linear-gradient(90deg, #f6f6f6 0%, #e8e8e8 50%, #f6f6f6 100%);
    background-size: 200% 100%;
    animation: ${shimmer} 1s ease-in-out infinite;

    mask: linear-gradient(#ffffff 0 0) content-box, linear-gradient(#ffffff 0 0);
    mask-composite: exclude;

    pointer-events: none;
  }
`;

const SkeletonInfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SkeletonColorBox = styled.div`
  width: 74px;
  height: 45px;

  border-radius: 4px;

  background: linear-gradient(90deg, #f6f6f6 0%, #e8e8e8 50%, #f6f6f6 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1s ease-in-out infinite;
`;

const SkeletonTextGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

const SkeletonLine = styled.span<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  border-radius: 3px;

  background: linear-gradient(90deg, #f6f6f6 0%, #e8e8e8 50%, #f6f6f6 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1s ease-in-out infinite;
`;

const SkeletonAddButton = styled.div`
  width: 100%;
  height: 40px;

  border: 1px dashed #f0f0f0;
  border-radius: 4px;

  background: linear-gradient(90deg, #f6f6f6 0%, #e8e8e8 50%, #f6f6f6 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1s ease-in-out infinite;
`;

export default CardListSkeleton;
