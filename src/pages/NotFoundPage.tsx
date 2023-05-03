import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button/Button';
import { PATH } from '../constants';
import NotFoundCharacter from '../assets/not-found-character.svg';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container center-vert-item">
      <h2 className="align-center">요청하신 페이지를 찾을 수 없어요</h2>
      <img
        src={NotFoundCharacter}
        alt="Not found page character"
        className="center-hoz-item mg-t-24"
      />
      <Button variant="secondary" className="mg-t-36" onClick={() => navigate(PATH.ROOT)}>
        홈으로 가기
      </Button>
    </div>
  );
};

export default NotFoundPage;
