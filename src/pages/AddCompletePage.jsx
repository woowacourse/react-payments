import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Card } from '../components/common';

const StyledPage = styled.div`
  align-items: center;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 400px;
  height: 757px;
`;

const CompleteMessage = styled.div`
  font-size: 24px;
  margin: 100px 0 77px;
`;

const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 18px;
  margin-top: 33px;
  padding-bottom: 5px;
  text-align: center;
  width: 250px;

  :focus {
    outline: none;
  }
`;

const CheckButton = styled(Button)`
  margin: auto 0 0 auto;
`;

function AddCompletePage() {
  const navigate = useNavigate();

  const onClickCheckButton = () => {
    navigate('/');
  };

  return (
    <StyledPage>
      <CompleteMessage>카드등록이 완료되었습니다.</CompleteMessage>
      <Card
        bgColor="#ADD8E6"
        size="large"
        name="HALEE"
        number="1111 2222 •••• ••••"
        validDate="05/22"
      />
      <Input />
      <CheckButton
        color="#04C09E"
        content="확인"
        fontWeight="bold"
        onClickFunc={onClickCheckButton}
      />
    </StyledPage>
  );
}

export default memo(AddCompletePage);
