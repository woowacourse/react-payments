import { CreditCard } from 'components/common/Card/CreditCard';
import Header from 'components/common/Header/Header';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const goRegister = () => {
    navigate('/register');
  };

  return (
    <>
      <Header text={'보유카드'} />
      <h1>새로운 카드를 등록해주세요</h1>
      <CreditCard />
      <button onClick={goRegister}>+</button>
    </>
  );
}

export default Home;
