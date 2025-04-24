import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '../constants/setting';

function CompletePage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <CompleteImgContainer />
      <DescriptionContainer>
        <p>{state.cardInfo.number.first}로 시작하는</p>
        <p>{state.cardInfo.company}가 등록되었어요.</p>
      </DescriptionContainer>
      <ConfirmButton onClick={() => navigate(ROUTER_PATH.MAIN)}>확인</ConfirmButton>
    </>
  );
}

export default CompletePage;

const CompleteImgContainer = styled.div`
  width: 76px;
  height: 76px;
  background-image: url('./assets/complete-icon.png');
  background-position: center;
  background-size: cover;
  margin-bottom: 25px;
`;

const DescriptionContainer = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  color: #353c49;
  margin-bottom: 25px;
`;

const ConfirmButton = styled.button`
  width: 100%;
  border-radius: 5px;
`;
