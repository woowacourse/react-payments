import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";

const CardListItemSkeleton = () => (
  <Item>
    <CardImage />
    <CardInfo>
      <CardCompanySkeleton />
      <CardNumberSkeleton />
      <CardExpirationDateSkeleton />
    </CardInfo>
  </Item>
);

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 4.25rem;
  padding: 0.75rem;
  border: 1px solid ${COLOR_PALETTE["GREY-200"]};
  border-radius: 0.35rem;
`;

const Skeleton = styled.div`
  border-radius: 0.25rem;
  background-color: ${COLOR_PALETTE["GREY-200"]};
`;

const CardImage = styled(Skeleton)`
  width: 4rem;
  height: 2.5rem;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const CardCompanySkeleton = styled(Skeleton)`
  width: 5rem;
  height: 0.85rem;
`;

const CardNumberSkeleton = styled(Skeleton)`
  width: 8.75rem;
  height: 0.65rem;
`;

const CardExpirationDateSkeleton = styled(Skeleton)`
  width: 4rem;
  height: 0.55rem;
`;

export default CardListItemSkeleton;
