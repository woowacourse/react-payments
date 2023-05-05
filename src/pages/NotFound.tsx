import { Link } from 'react-router-dom';
import { PageWrapper, WrongPageText, WrongPageTitle } from './NotFound.styles';

export const NotFound = () => {
  return (
    <PageWrapper>
      <WrongPageTitle>잘못된 페이지 주소에요. 😥</WrongPageTitle>
      <WrongPageText>등록한 카드를 확인해보실래요?</WrongPageText>
      <Link to={'/'}>등록한 카드 확인하기</Link>
    </PageWrapper>
  );
};
