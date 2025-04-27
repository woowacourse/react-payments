import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button/Button';

export default function CardRegistrationCompletedPage() {
  const navigate = useNavigate();

  const handleGoToCardRegistrationPage = () => {
    navigate('/');
  };

  return (
    <div>
      <p>카드 등록 완료 페이지</p>
      <Button text="확인" height="44px" borderRadius="5px" onClick={handleGoToCardRegistrationPage} />
    </div>
  );
}
