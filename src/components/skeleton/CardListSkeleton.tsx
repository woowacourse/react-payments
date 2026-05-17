import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export default function CardListSkeleton() {
  return (
    <Wrapper>
      <Header>보유 카드</Header>
      {Array.from({ length: 3 }).map((_, i) => (
        <SkeletonContainer key={i}>
          <MiniCardSkeleton />
          <InfoContainer>
            <InfoLine width="60%" />
            <InfoLine width="80%" />
            <InfoLine width="40%" />
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
  border-radius: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
`;

const Header = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

const SkeletonContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
`;

const MiniCardSkeleton = styled(SkeletonBase)`
  width: 70px;
  height: 50px;
  border-radius: 6px;
  flex-shrink: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const InfoLine = styled(SkeletonBase)<{ width?: string }>`
  height: 12px;
  width: ${({ width }) => width ?? "100%"};
`;

const AddButtonSkeleton = styled(SkeletonBase)`
  height: 48px;
  border-radius: 8px;
`;
