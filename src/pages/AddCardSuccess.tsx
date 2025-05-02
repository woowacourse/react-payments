import { useLocation, useNavigate } from 'react-router';
import { PAGE_URL } from '../constants/pageUrl';
import Button from '../components/common/Button/Button';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import check from '/check.png';
import { useEffect } from 'react';

function AddCardSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state) {
      navigate(PAGE_URL.NOT_FOUND);
      return;
    }
  }, []);

  const navigateToAddCard = () => {
    navigate(PAGE_URL.ADD_CARD);
  };

  return (
    <Layout>
      <Wrapper>
        <img src={check} alt="카드 등록 완료" />
        <Title>
          <p>{location.state?.firstCardNumber}로 시작하는</p>
          <p>{location.state?.selectedCard}가 등록되었어요.</p>
        </Title>
        <Button
          customStyle={addCardSuccessButtonStyle}
          text="확인"
          type="button"
          onClick={navigateToAddCard}
        >
          확인
        </Button>
      </Wrapper>
    </Layout>
  );
}

export default AddCardSuccess;

const Layout = styled.main`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 70px 30px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  word-break: break-all;
  text-align: center;
`;

const addCardSuccessButtonStyle = css`
  width: 100%;
  padding: 12px 0;
  background-color: #000000ba;
  color: #ffffff;
  border: none;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background-color: #000000;
  }
`;
