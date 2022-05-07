import { Layout } from '../index.styled';
import Button from '../../components/Button';

const NotFound = () => {
  return (
    <Layout>
      <h1>존재하지 않는 페이지입니다 </h1>
      <Button type="link" to="/">
        홈으로 가기
      </Button>
    </Layout>
  );
};

export default NotFound;
