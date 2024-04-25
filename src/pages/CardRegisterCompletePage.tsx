import styled from 'styled-components';
import CompletionIconSrc from '../assets/images/completion-icon.png';
import { useLocation, useNavigate } from 'react-router-dom';
import ROUTE_PATH from './constants/routePath';
import ErrorPage from './common/ErrorPage';

interface ICardRegisterCompletePageState {
  cardNumberPrefix: string;
  cardType: string;
}

export default function CardRegisterCompletePage() {
  const navigate = useNavigate();
  const location = useLocation() as { state: ICardRegisterCompletePageState };

  const cardNumberPrefix = location.state?.cardNumberPrefix;
  const cardType = location.state?.cardType;

  const onClickConfirmButton = () => navigate(ROUTE_PATH.cardRegister);

  if (!cardNumberPrefix || !cardType) {
    return <ErrorPage />;
  }

  return (
    <PageContainer>
      <CompletionIcon src={CompletionIconSrc} alt="카드 등록 완료 이미지" />
      <CompletionText>{cardNumberPrefix}로 시작하는</CompletionText>
      <CompletionText>{cardType}가 등록되었어요.</CompletionText>
      <ConfirmButton onClick={onClickConfirmButton}>확인</ConfirmButton>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 45%;
`;

const CompletionIcon = styled.img`
  width: 80px;
  margin-bottom: 45px;
`;

const CompletionText = styled.div`
  letter-spacing: 0.2px;
  font-size: 23px;

  font-weight: 600;
  width: fit-content;
  margin-bottom: 12px;
`;

const ConfirmButton = styled.button`
  font-size: max(15px, 10%);
  font-weight: 500;
  color: #ffffff;
  background-color: #333333;
  border-radius: 5px;
  padding: 15px 0;
  width: 85%;
  margin-top: 30px;
  cursor: pointer;
`;
