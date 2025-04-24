import styled from 'styled-components';
import Button from '../components/button/Button';
import {useLocation, useNavigate} from 'react-router';
import {CARD_COMPANY} from '../components/constants/card';
import {CardCompany} from '../type/Card';

const Confirm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) return <div>잘못된 경로로 들어오셨습니다.</div>;

  const {firstSection, cardCompany} = location.state;

  return (
    <Container>
      <img src="./images/checkIcon.png" alt="체크표시" />
      <Description>
        {firstSection}로 시작하는
        <br />
        {CARD_COMPANY[cardCompany as CardCompany]?.name}가 등록되었어요.
      </Description>
      <Button onClick={() => navigate(-1)}>확인</Button>
    </Container>
  );
};

export default Confirm;

const Container = styled.div`
  width: 376px;
  padding: 77px 30px 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Description = styled.div`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;
