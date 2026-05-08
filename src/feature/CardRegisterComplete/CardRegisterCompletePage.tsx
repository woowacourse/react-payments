import styled from 'styled-components';
import Button from '../../common/components/Button';
import checkIconImg from './assets/Group 54.png';

const CardRegisterCompletePage = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <CheckIcon src={checkIconImg} alt="" />
          <CheckDescription>
            5511로 시작하는
            <br />
            BC카드가 등록되었어요.
          </CheckDescription>
          <CheckButton>확인</CheckButton>
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  background-color: #d3d3d3;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 376px;
  min-height: 100vh;

  background-color: #ffffff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 0 24px;
`;

const CheckIcon = styled.img`
  width: 76px;
  height: 76px;
`;

const CheckDescription = styled.p`
  margin-top: 48px;

  color: #333d4b;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.45;
  text-align: center;
`;

const CheckButton = styled(Button)`
  width: 100%;
  min-height: 48px;
  margin-top: 44px;

  border-radius: 4px;
  background-color: #333333;

  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
`;

export default CardRegisterCompletePage;
