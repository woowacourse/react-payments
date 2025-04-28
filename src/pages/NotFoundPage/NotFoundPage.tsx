import * as S from './NotFoundPage.styles';

export default function NotFoundPage() {
  return (
    <S.ErrorContainer>
      <S.Title>404</S.Title>
      <S.Description>페이지를 찾을 수 없습니다.</S.Description>
      <S.HomeLink to='/'>홈으로 돌아가기</S.HomeLink>
    </S.ErrorContainer>
  );
}
