import { useCardList } from "./useCardList";

const CardListPage = () => {
    const { status, cards, fetchCards, handleCardAdd } = useCardList();

    // 로딩 중, 기본 상태
    if (status === 'loading' || status === 'idle') {
        return <CardListLoading />;
    }

    // 에러 상태 ui
    if (status === 'error') {
        return <CardListError onClick={fetchCards}/>;
    }

    // 성공 상태 목록 빔
    if (status === 'success' && cards.length === 0) {
        return <CardListEmpty onClick={handleCardAdd}/>;
    }

    // 성공 상태 목록 렌더링
    return <CardListSuccess onClick={handleCardAdd}/>;
}