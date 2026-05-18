import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export default function CardListSkeleton() {
  return (
    <Wrapper>
      {Array.from({ length: 3 }).map((_, i) => (
        <SkeletonContainer key={i}>
          <MiniCardSkeleton />
          <InfoContainer>
            <InfoLine width="80px" height="14px" />
            <InfoLine width="140px" height="10px" />
            <InfoLine width="60px" height="9px" />
          </InfoContainer>
        </SkeletonContainer>
      ))}
      <AddButtonSkeleton />
    </Wrapper>
  );
}

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 800px 100%;
  animation: ${shimmer} 1.5s infinite;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkeletonContainer = styled.div`
  width: 320px;
  height: 69px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  padding: 12px;
  gap: 12px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const MiniCardSkeleton = styled.div`
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background-color: #ebebeb;
  flex-shrink: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const InfoLine = styled(SkeletonBase)<{ width?: string; height?: string }>`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "12px"};
  border-radius: 3px;
`;

const AddButtonSkeleton = styled(SkeletonBase)`
  width: 100%;
  height: 44px;
  border-radius: 5px;
`;
