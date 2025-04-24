import styled from 'styled-components';
import Button from '../common/button/Button';
import { useCardInfo } from '../main-page/CardInfoContext';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const StyledIconWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 76px;
`;

const StyledAnnounce = styled.p`
  display: flex;
  width: 338px;
  height: 100px;
  justify-content: center;
  color: #353c49;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

type CheckSrc = './images/Check.svg';

const checkSrc: Record<string, CheckSrc> = {
  check: './images/Check.svg',
};

export default function AnnounceSection() {
  const { cardNumber, selectedCardCompany, resetCardInfo } = useCardInfo();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    resetCardInfo();
    navigate('/add-card');
  };

  return (
    <StyledContainer>
      <StyledIconWrap>
        <img src={checkSrc.check} alt="체크 아이콘" />
      </StyledIconWrap>
      <StyledAnnounce>
        {cardNumber.first || '----'}로 시작하는 <br />
        {selectedCardCompany || '카드사'}가 등록되었어요.
      </StyledAnnounce>
      <Button onClick={handleButtonClick} />
    </StyledContainer>
  );
}
