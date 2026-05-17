import AddCardButton from '../components/CardListResult/AddCardButton';
import CardListEmpty from '../components/CardListResult/CardListEmpty';
import CardListError from '../components/CardListResult/CardListError';
import CardListLoading from '../components/CardListResult/CardListLoading';
import CardListView from '../components/CardListResult/CardListView';

export default function CardListPage() {
    return (
        <div>
            <h3>보유 카드</h3>
            <CardListView />
            <AddCardButton />
            <CardListLoading />
            <CardListEmpty />
            <CardListError />
        </div>
    );
}
