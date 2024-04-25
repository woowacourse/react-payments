import { useLocation, useNavigate } from 'react-router-dom';
import GlobalStyles from '../../GlobalStyles';
import * as S from './confirmPage.style';
import ConfirmButton from './components/ConfirmButton';
import ConfirmImageIcon from './components/ConfirmImageIcon';
import CompleteText from './components/CompleteText';
import NotFoundPage from '../notFound/NotFoundPage';

export default function ConfirmPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const isSucceed = state?.isSucceed ?? false;
  const cardNumbers = state?.cardNumbers ?? '기본값';
  const cardIssuer = state?.cardIssuer ?? '기본 카드 발급자';

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <>
      <GlobalStyles />
      {isSucceed ? (
        <S.ContentCard>
          <S.Container>
            <ConfirmImageIcon />
            <CompleteText cardIssuer={cardIssuer} cardNumbers={cardNumbers} />
            <ConfirmButton onClick={goToHomePage} text={'확인'} />
          </S.Container>
        </S.ContentCard>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
}
