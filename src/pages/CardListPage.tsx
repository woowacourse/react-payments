import CardListEmpty from '../components/CardListResult/CardListEmpty';
import CardListError from '../components/CardListResult/CardListError';
import CardListLoading from '../components/CardListResult/CardListLoading';
import CardListView from '../components/CardListResult/CardListView';
import { useMyCard } from '../hooks/useMyCard';

export default function CardListPage() {
    const { myCards, status, deleteMyCard } = useMyCard();

    const renderContent = () => {
        if (status === 'idle' || status === 'loading') return <CardListLoading />;
        if (status === 'error') return <CardListError />;
        if (myCards.length === 0) return <CardListEmpty />;
        return <CardListView cardItemInfos={myCards} onDelete={deleteMyCard} />;
    };

    return (
        <div>
            <h3>보유 카드({myCards?.length})</h3>
            {renderContent()}
        </div>
    );
}
