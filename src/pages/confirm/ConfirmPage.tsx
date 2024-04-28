import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './confirmPage.style';
import ConfirmButton from './components/ConfirmButton';
import ConfirmImageIcon from './components/ConfirmImageIcon';
import CompleteText from './components/CompleteText';
import NotFoundPage from '../error/NotFoundPage';
import PAGE_ROUTES from '../../constants/routes';

export default function ConfirmPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const isSucceed = state?.isSucceed;
  const cardNumbers = state?.cardNumbers;
  const cardIssuer = state?.cardIssuer;

  if (!isSucceed) {
    return <NotFoundPage />;
  }

  const goToHomePage = () => {
    navigate(PAGE_ROUTES.MAIN);
  };

  return (
    <>
      <S.ContentCard>
        <S.Container>
          <ConfirmImageIcon />
          <CompleteText cardIssuer={cardIssuer} cardNumbers={cardNumbers} />
          <ConfirmButton onClick={goToHomePage}>확인</ConfirmButton>
        </S.Container>
      </S.ContentCard>
    </>
  );
}
