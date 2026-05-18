import CardListEmpty from '../components/CardListResult/CardListEmpty';
import CardListError from '../components/CardListResult/CardListError';
import CardListLoading from '../components/CardListResult/CardListLoading';
import CardListView from '../components/CardListResult/CardListView';
import { useMyCard } from '../hooks/useMyCard';

export default function CardListPage() {
    const { myCards, isLoading, isError, deleteMyCard } = useMyCard();

    if (isLoading) return <CardListLoading />;
    if (isError) return <CardListError />;
    if (myCards.length === 0) return <CardListEmpty />;
    return (
        <div>
            <h3>보유 카드({myCards?.length})</h3>
            <CardListView cardItemInfos={myCards} onDelete={deleteMyCard} />
        </div>
    );
}
