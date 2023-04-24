import { PageContainer } from 'components/style/PageContainer';

function NotFound() {
  return (
    <PageContainer>
      <span>존재하지 않는 페이지입니다. 뒤로가기를 눌러 이전 페이지로 이동하실 수 있습니다.</span>
      <br />
      <br />
      <span>
        혹은 <a href="https://regularpark.github.io/react-payments/">홈 화면</a> 링크를 클릭하여 홈
        화면으로 이동하실 수 있습니다.
      </span>
    </PageContainer>
  );
}

export default NotFound;
