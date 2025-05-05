/** @jsxImportSource @emotion/react */

import { useNavigate } from 'react-router';
import Button from '../components/common/Button/Button';
import { PAGE_URL } from '../constants/pageUrl';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

function Notfound() {
  const navigate = useNavigate();

  const navigateToAddCard = () => {
    navigate(PAGE_URL.ADD_CARD);
  };

  return (
    <Layout>
      유효하지 않은 페이지입니다!
      <Button
        css={NotFoundButton}
        text="카드 추가하기"
        type="button"
        onClick={navigateToAddCard}
      />
    </Layout>
  );
}

export default Notfound;

const Layout = styled.main`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 70px 30px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
`;

const NotFoundButton = css`
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
