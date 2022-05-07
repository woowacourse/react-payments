import LinkButton from '../../components/LinkButton';

const NotFound = () => {
  return (
    <div>
      <h1>존재하지 않는 페이지입니다 </h1>
      <LinkButton to="/">홈으로 가기</LinkButton>
    </div>
  );
};

export default NotFound;
