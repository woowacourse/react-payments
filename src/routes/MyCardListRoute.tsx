import Header from '../components/@common/Header/Header';
import MyCardListPage from '../pages/MyCardList/MyCardListPage';

const MyCardListRoute = () => {
  return (
    <>
      <Header pageTitle='보유카드' />
      <MyCardListPage />
    </>
  );
};

export default MyCardListRoute;
