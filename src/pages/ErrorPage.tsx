import styled from 'styled-components';
import ErrorPageLayout from '../components/layout/ErrorPageLayout';
import Title from '../components/common/Title';
import CardConfirmButton from '../components/CardConfirmButton';
import { useNavigate } from 'react-router-dom';
import { URL } from '../constants/card-app';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleConfirmButtonClick = () => {
    navigate(URL.defaultPage, {
      replace: true,
    });
  };

  return (
    <ErrorPageLayout>
      <ErrorContainer>
        <TextField>
          <Title content={'☹️'} fontSize={'100px'} fontWeight={'700'} lineHeight={'150px'} />
          <Title content={'잘못된 접근입니다'} fontSize={'32px'} fontWeight={'700'} lineHeight={'40px'} />
        </TextField>
        <CardConfirmButton content={'초기 페이지로 돌아가기'} onClick={handleConfirmButtonClick} />
      </ErrorContainer>
    </ErrorPageLayout>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const TextField = styled.div`
  width: 338px;
  height: 200px;

  text-align: center;
  margin-bottom: 50px;
`;

export default ErrorPage;
