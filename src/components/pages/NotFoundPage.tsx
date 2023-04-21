import styled from 'styled-components';
import Title from '../common/Title';

const NotFoundPage = () => {
  return (
    <ContentContainer>
      <Title title='해당 페이지가 없습니다.' fontSize={25} />
    </ContentContainer>
  );
};
const ContentContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export default NotFoundPage;
