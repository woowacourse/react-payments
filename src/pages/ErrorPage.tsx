import { useNavigate, useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/common/Button';
import { Page } from '../components/common/Page';
import { Text } from '../components/common/Text';

const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  padding: 28px;
  padding-top: 130px;

  flex: 1;
`;

const ErrorDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

const ErrorContent = styled.pre`
  padding: 16px;

  border-radius: 8px;
  background: ${(props) => props.theme.color.grey2};
  font-size: ${(props) => props.theme.fontSize.small};
  white-space: pre-wrap;
`;

export const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  const handleClickNavigateMain = () => {
    navigate('/');
  };

  return (
    <Page>
      <Content>
        <Text size="xxlarge">Oops! 문제가 생겼습니다</Text>

        <ErrorDetail>
          <Text size="small">자세한 에러 내용입니다.</Text>
          <ErrorContent>{JSON.stringify(error, null, 2)}</ErrorContent>
        </ErrorDetail>

        <Button onClick={handleClickNavigateMain}>메인 페이지로 이동</Button>
      </Content>
    </Page>
  );
};
