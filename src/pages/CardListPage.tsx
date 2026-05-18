import CardListEmpty from '../components/CardListResult/CardListEmpty';
import CardListError from '../components/CardListResult/CardListError';
import CardListLoading from '../components/CardListResult/CardListLoading';
import CardListView from '../components/CardListResult/CardListView';
import { useMyCard } from '../hooks/useMyCard';

export default function CardListPage() {
    const { myCards, isLoading, isError, deleteMyCard } = useMyCard();

    return (
        <div>
            <h3>보유 카드({myCards?.length})</h3>
            {isLoading && <CardListLoading />}
            {isError && <CardListError />}
            {myCards?.length === 0 && <CardListEmpty />}
            {myCards?.length > 0 && <CardListView cardItemInfos={myCards} onDelete={deleteMyCard} />}
        </div>
    );
}
