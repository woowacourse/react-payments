import CardListItemSkeleton from "@/components/CardList/CardListItemSkeleton";
import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";

const SKELETON_ITEM_COUNT = 3;

const CardListLoading = () => (
  <Container>
    {Array.from({ length: SKELETON_ITEM_COUNT }).map((_, index) => (
      <CardListItemSkeleton key={index} />
    ))}
    <AddButtonSkeleton />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const AddButtonSkeleton = styled.div`
  height: 2.75rem;
  border-radius: 0.3rem;
  background-color: ${COLOR_PALETTE["GREY-100"]};
`;

export default CardListLoading;
