import CardItem from "@components/common/CardItem";
import AddCardNavigateButton from "@components/feature/AddCardNavigateButton";
import styled from "@emotion/styled";
import useDeleteCard from "@hooks/feature/mutation/useDeleteCard";
import useCards from "@hooks/feature/query/useCards";
import { COLOR_PALETTE } from "@styles/colorPalette";

import MyCardListSectionErrorFallback from "./MyCardListSectionErrorFallback";
import MyCardListSectionLoader from "./MyCardListSectionLoader";

const MyCardListSection = () => {
  const { data: cards, state, reload } = useCards();
  const { mutate: deleteCard } = useDeleteCard();

  if (state === "loading" || state === "idle")
    return <MyCardListSectionLoader />;

  if (state === "error" || !cards) return <MyCardListSectionErrorFallback />;

  return (
    <Wrapper>
      <Header>보유 카드 ({cards.length})</Header>
      {cards.length > 0 && (
        <>
          <CardContainer>
            {cards.map((props) => (
              <CardItem
                {...props}
                key={props.id}
                onClickDelete={({ number }) => {
                  if (!window.confirm(`${number} 카드를 삭제하시겠습니까?`))
                    return;
                  deleteCard(props.id, { onSuccess: () => reload() });
                }}
              />
            ))}
          </CardContainer>
          <AddCardNavigateButton buttonType="dashed" />
        </>
      )}
      {cards.length === 0 && (
        <EmptyStateContainer>
          <EmptyCard />
          <EmptyStateHeading>등록된 카드가 없습니다.</EmptyStateHeading>
          <EmptyStateText>
            아래 버튼을 눌러 첫 카드를 등록해보세요
          </EmptyStateText>
          <AddCardNavigateButton />
        </EmptyStateContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`;

const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  flex: 1;
`;

const EmptyCard = styled.div`
  width: 160px;
  height: 100px;
  background-color: ${COLOR_PALETTE["BLACK-500"]};
  border-radius: 5px;
  border-width: 1px;
  border-style: dashed;
  opacity: 1;
`;

const EmptyStateHeading = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin: 0;
`;

const EmptyStateText = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin: 0;
`;

export default MyCardListSection;
