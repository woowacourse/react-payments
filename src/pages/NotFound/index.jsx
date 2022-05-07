import Button from '../../components/Button';

const NotFound = () => {
  return (
    <div>
      <h1>존재하지 않는 페이지입니다 </h1>
      <Button type="link" to="/">
        홈으로 가기
      </Button>
    </div>
  );
};

export default NotFound;
