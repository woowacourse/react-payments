import CardListItemSkeleton from "@/components/CardList/CardListItemSkeleton";
import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";

const SKELETON_ITEM_COUNT = 3;

const CardListLoading = () => (
  <Container>
    <List>
      {Array.from({ length: SKELETON_ITEM_COUNT }).map((_, index) => (
        <CardListItemSkeleton key={index} />
      ))}
    </List>
    <AddButtonSkeleton />
  </Container>
);

const Container = styled.div`
  margin-top: 1rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const AddButtonSkeleton = styled.div`
  height: 2.75rem;
  margin-top: 1rem;
  border-radius: 0.3rem;
  background-color: ${COLOR_PALETTE["GREY-100"]};
`;

export default CardListLoading;
