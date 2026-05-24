import CardList from '../../components/CardListContainer/CardList/CardList';
import CardListContainer from '../../components/CardListContainer/CardListContainer';
import CardListEmpty from '../../components/CardListContainer/CardListEmpty/CardListEmpty';
import CardListError from '../../components/CardListContainer/CardListError/CardListError';
import CardListLoading from '../../components/CardListContainer/CardListLoading/CardListLoading';
import useGetCardList from '../../hooks/useGetCardList';

function CardListPage() {
  const { status, data, itemCount, refetchList } = useGetCardList();
  const isEmpty = data.length === 0;

  return (
    <CardListContainer itemCount={itemCount}>
      {status === 'loading' && <CardListLoading />}
      {status === 'error' && <CardListError onRetry={refetchList} />}
      {status === 'success' && isEmpty && <CardListEmpty />}
      {status === 'success' && !isEmpty && (
        <CardList cardList={data} onRefresh={refetchList} />
      )}
    </CardListContainer>
  );
}

export default CardListPage;
