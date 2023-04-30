import Header from '../components/@common/Header/Header';
import MyCardList from '../pages/MyCardList/MyCardList';

const MyCardListRoute = () => {
  return (
    <>
      <Header pageTitle='보유카드' />
      <MyCardList />
    </>
  );
};

export default MyCardListRoute;
