import styled from '@emotion/styled';

interface CardListSkeletonProps {
  rowCount?: number;
}

export default function CardListSkeleton({ rowCount = 3 }: CardListSkeletonProps) {
  return (
    <Container>
      {Array.from({ length: rowCount }).map((_, i) => (
        <SkeletonRow key={i}>
          <SkeletonMini />
          <SkeletonInfo>
            <SkeletonLine $width="80px" $height="14px" />
            <SkeletonLine $width="140px" $height="10px" />
            <SkeletonLine $width="60px" $height="9px" />
          </SkeletonInfo>
          <DeleteSpot />
        </SkeletonRow>
      ))}
      <AddSkeleton />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SkeletonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 320px;
  height: 69px;
  padding: 16px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  box-sizing: border-box;
`;

const SkeletonMini = styled.div`
  width: 64px;
  height: 40px;
  background: #ebebeb;
  border-radius: 4px;
  flex-shrink: 0;
`;

const SkeletonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const SkeletonLine = styled.div<{ $width: string; $height: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background: #ebebeb;
  border-radius: 3px;
`;

const DeleteSpot = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

const AddSkeleton = styled.div`
  width: 320px;
  height: 44px;
  background: #f7f7f7;
  border: 1px dashed #f0f0f0;
  border-radius: 5px;
  box-sizing: border-box;
`;
