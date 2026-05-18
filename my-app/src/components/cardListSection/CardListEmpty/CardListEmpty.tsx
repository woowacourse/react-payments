import { CardAddButton, CardListPageLayout, EmptyCardIcon, EmptyListContainer, EmptySubTitle, EmptyTitle, Title } from "./CardListEmpty.styles";

interface Props {
    onClick: () => void;
}

const CardListEmpty = ({ onClick }: Props) => {
    return (
      <CardListPageLayout>
        <Title>보유 카드</Title>
        <EmptyListContainer>
            <EmptyCardIcon />
            <EmptyTitle>등록된 카드가 없습니다.</EmptyTitle>
            <EmptySubTitle>아래 버튼을 눌러 첫 카드를 등록해보세요</EmptySubTitle>
            <CardAddButton onClick={onClick} aria-label='카드 추가 버튼'>카드 추가하기</CardAddButton>
        </EmptyListContainer>
      </CardListPageLayout>
    );
};

export default CardListEmpty;