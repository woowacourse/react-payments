import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export default function CardItemSkeleton() {
  return (
    <CardItemContainer>
      <CardContentContainer>
        <CardContent>
          <MiniCardSkeleton />
          <CardInfoSkeleton>
            <LineSkeleton width={80} height={12} />
            <LineSkeleton width={140} height={11} />
            <LineSkeleton width={90} height={11} />
          </CardInfoSkeleton>
        </CardContent>
        <DeleteButtonSkeleton />
      </CardContentContainer>
    </CardItemContainer>
  );
}

const CardItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 73px;
  padding: 12px;
  border: solid #e6e6e6 1px;
  border-radius: 5px;
  box-sizing: border-box;
`;

const CardContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const CardInfoSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const shimmer = keyframes`
  0% { background-position: -320px 0; }
  100% { background-position: 320px 0; }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #e6e6e6 25%, #f0f0f0 50%, #e6e6e6 75%);
  background-size: 640px 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;
  border-radius: 4px;
`;

const MiniCardSkeleton = styled(SkeletonBase)`
  width: 64px;
  height: 40px;
  flex-shrink: 0;
`;

const LineSkeleton = styled(SkeletonBase)<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const DeleteButtonSkeleton = styled(SkeletonBase)`
  width: 30px;
  height: 27px;
  border-radius: 4px;
  align-self: center;
`;
