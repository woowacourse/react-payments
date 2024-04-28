import PAGE_ROUTES from '@/constants/routes';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();
  const handleClickBackButton = () => {
    navigate(PAGE_ROUTES.MAIN, { replace: true });
  };
  return (
    <div>
      Error가 발생했어요!
      <button onClick={handleClickBackButton}>되돌아가기</button>
    </div>
  );
}
