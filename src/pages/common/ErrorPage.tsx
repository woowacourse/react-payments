import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ROUTE_PATH from '../constants/routePath';

export default function ErrorPage() {
  const navigate = useNavigate();

  const onClickReturnButton = () => navigate(ROUTE_PATH.cardRegister);

  return (
    <S.ErrorContainer>
      <S.ErrorMessage>⚠️ 잘못된 접근입니다.</S.ErrorMessage>
      <S.ReturnButton onClick={onClickReturnButton}>돌아가기</S.ReturnButton>
    </S.ErrorContainer>
  );
}

const S = {
  ErrorContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 50%;
  `,

  ErrorMessage: styled.div`
    font-size: 20px;
    font-weight: 600;
    width: fit-content;
  `,

  ReturnButton: styled.button`
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
    background-color: #333333;
    border-radius: 5px;
    padding: 15px 0;
    width: 200px;
    margin-top: 30px;
    cursor: pointer;
  `,
};
