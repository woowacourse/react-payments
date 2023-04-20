import { CreditCard } from 'components/common/Card/CreditCard';
import AddCardForm from 'components/Form/AddCardForm';
import Header from 'components/common/Header/Header';
import { useNavigate } from 'react-router-dom';

function RegisterCard() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
    <>
      <Header onClickBackButton={goHome} text={'카드 추가'} />
      {/* <CreditCard /> */}
      <AddCardForm onSubmit={goHome} />
    </>
  );
}

export default RegisterCard;
