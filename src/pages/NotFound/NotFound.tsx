import { useNavigate } from 'react-router';
import * as S from './NotFound.styles';
import Button from '../../components/Button/Button';

export default function NotFound() {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate('/react-payments');
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
