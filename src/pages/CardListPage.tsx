import AddCardButton from '../components/CardListResult/AddCardButton';
import MyCardItem from '../components/CardListResult/MyCardItem/MyCardItem';
import MyCardItemSkeleton from '../components/CardListResult/MyCardItem/MyCardItemSkeleton';

export default function CardListPage() {
    return (
        <div>
            <h3>보유 카드</h3>
            <MyCardItem />
            <AddCardButton />
            <MyCardItemSkeleton />
        </div>
    );
}
