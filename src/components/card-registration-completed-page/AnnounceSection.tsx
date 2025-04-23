import styled from 'styled-components';
import Button from '../common/button/Button';

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
  return (
    <StyledContainer>
      <StyledIconWrap>
        <img src={checkSrc.check}></img>
      </StyledIconWrap>
      <StyledAnnounce>
        5511로 시작하는 <br />
        BC카드가 등록되었어요.
      </StyledAnnounce>
      <Button />
    </StyledContainer>
  );
}
