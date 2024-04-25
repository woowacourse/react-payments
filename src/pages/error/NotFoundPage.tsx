import { useNavigate } from 'react-router-dom';
import PAGE_ROUTES from '../../constants/routes';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const handleClickNavigateHomeButton = () => {
    navigate(PAGE_ROUTES.MAIN, { replace: true });
  };
  return (
    <div>
      페이지를 찾을수 없어요!
      <button onClick={handleClickNavigateHomeButton}>Home 으로 이동</button>
    </div>
  );
}
