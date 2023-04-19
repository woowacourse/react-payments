import CardPreviewList from '../components/CardPreviewList';
import CardRegister from '../components/CardRegister';
import Header from '../components/Header';

const MyCardPage = () => {
  return (
    <>
      <Header title="보유카드" />
      <CardPreviewList />
      <CardRegister />
    </>
  );
};

export default MyCardPage;
