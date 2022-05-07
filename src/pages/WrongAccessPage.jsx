import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { GuideMessage } from '../components/common/styled';
import Button from '../components/common/Button';

const Main = styled.main`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const GuideMessageWrapper = styled.div`
  margin: 80px auto;
`;

export default function WrongAccessPage() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/', {
      replace: true,
    });
  };

  return (
    <>
      <Main>
        <GuideMessageWrapper>
          <GuideMessage>잘못된 접근입니다.</GuideMessage>
        </GuideMessageWrapper>
        <Button onClick={navigateHome}>홈으로</Button>
      </Main>
    </>
  );
}
