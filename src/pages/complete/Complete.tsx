import { MouseEventHandler, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { FooterButton } from '../../components/common/FooterButton';
import { MobileLayoutContainer } from '../../components/common/MobileLayoutContainer';
import { ROUTE_PATH } from '../../constants/route';

function Complete() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoHome: MouseEventHandler<HTMLButtonElement> = () => {
    navigate(ROUTE_PATH.home);
  };

  useEffect(() => {
    if (!location.state) navigate(ROUTE_PATH.home);
  }, []);

  return (
    <MobileLayoutContainer>
      <CompleteContainer>
        <img src="./img/circle_check.png" />
        {location.state && (
          <InfoText>
            {location.state.cardNumberPart1}로 시작하는 <br />{' '}
            {location.state.cardBank}가 등록되었어요.
          </InfoText>
        )}
        <FooterButton size="middle" onClick={handleGoHome}>
          확인
        </FooterButton>
      </CompleteContainer>
    </MobileLayoutContainer>
  );
}

const CompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 44px 28px;
  box-sizing: border-box;
`;

const InfoText = styled.p`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  vertical-align: middle;
  white-space: pre-wrap;
`;

export default Complete;
