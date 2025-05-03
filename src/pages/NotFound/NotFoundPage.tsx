import * as S from './NotFoundPage.styles';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router';
import { PAGE_ROUTES } from '../../constants';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate(PAGE_ROUTES.DEFAULT);
  };

  return (
    <S.Wrapper>
      <S.Title>⚠️ 404 NOT FOUND ⚠️</S.Title>
      <S.Description>없는 페이지입니다.</S.Description>
      <Button type={'button'} onClick={redirectToHome} borderRadius={'8px'}>
        💳 카드 등록하러 가기
      </Button>
    </S.Wrapper>
  );
}
