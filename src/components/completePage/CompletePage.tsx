import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Wrapper, Message, ConfirmButton } from './CompletePage.styles';
import checkIcon from '../../assets/check.svg';

interface LocationState {
  cardNumberFirstSegment: string;
  cardBrand: string;
}

//카드번호 맨 앞 4자리와 카드 브랜드를 보여주는 확인 페이지 컴포넌트
export default function CompletePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;

  if (!state) return <Navigate to="/cards" replace />;

  const { cardNumberFirstSegment, cardBrand } = state;

  return (
    <Wrapper>
      <img src={checkIcon} alt="check" />
      <Message>
        {cardNumberFirstSegment}로 시작하는
        <br />
        {cardBrand}가 등록되었어요.
      </Message>
      <ConfirmButton onClick={() => navigate('/cards')}>확인</ConfirmButton>
    </Wrapper>
  );
}
