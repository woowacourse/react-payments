import styled from "@emotion/styled";
import CardItemSkeleton from "./CardItemSkeleton";

export default function CardListSkeleton({ count }: { count: number }) {
  return (
    <CardListSkeletonContainer>
      {Array.from({ length: count }, (_, i) => (
        <CardItemSkeleton key={i} />
      ))}
    </CardListSkeletonContainer>
  );
}

const CardListSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
