import AddCardButton from '../components/CardListResult/AddCardButton';
import CardListLoading from '../components/CardListResult/CardListLoading';
import MyCardItem from '../components/CardListResult/MyCardItem/MyCardItem';

export default function CardListPage() {
    return (
        <div>
            <h3>보유 카드</h3>
            <MyCardItem />
            <AddCardButton />
            <CardListLoading />
        </div>
    );
}
