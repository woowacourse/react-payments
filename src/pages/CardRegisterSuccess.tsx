import { useLocation, useNavigate } from 'react-router-dom';

import IMAGES from '../assets/images';
import Button from '../components/common/Button';

function CardRegisterSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardNumber, cardCompany } = location.state;

  const handleConfirmButtonClick = () => {
    navigate('/');
  };

  return (
    <div>
      <img src={IMAGES.check} alt="체크 아이콘 이미지" />
      <p>
        <div>{cardNumber}로 시작하는</div>
        <div>{cardCompany}가 등록되었어요.</div>
      </p>
      <Button onClick={handleConfirmButtonClick}>확인</Button>
    </div>
  );
}

export default CardRegisterSuccess;
