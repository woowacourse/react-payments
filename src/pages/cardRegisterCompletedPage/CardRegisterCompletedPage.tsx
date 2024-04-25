import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './CardRegisterCompletedPage.styled';
import CompletedCheck from '../../assets/images/completed_check.svg?react';
import CompletedButton from '../../components/common/button/CompletedButton';

const CardRegisterCompletedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  return (
    <S.RegisterLayout>
      {data && (
        <S.CompletedTextWrapper>
          <S.CheckImageWrapper>
            <CompletedCheck />
          </S.CheckImageWrapper>
          <S.RegisterText>
            {data.cardNumber}로 시작하는
            <br />
            {data.cardCompany}가 등록되었어요.
          </S.RegisterText>
          <CompletedButton onClick={() => navigate(-1)}>확인</CompletedButton>
        </S.CompletedTextWrapper>
      )}
    </S.RegisterLayout>
  );
};

export default CardRegisterCompletedPage;
