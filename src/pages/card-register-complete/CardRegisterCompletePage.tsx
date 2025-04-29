import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Image from '../../components/common/Image';
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton';
import { useEffect } from 'react';

interface CardRegisterCompleteInfo {
  cardFirstPartNumbers: string;
  cardBrandName: string;
}

const CardRegisterCompletePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cardInfo = location.state as CardRegisterCompleteInfo | null;

  useEffect(() => {
    if (!cardInfo) {
      navigate('/card-register', { replace: true });
    }
  }, []);

  if (!cardInfo) return null;

  const completeIconSrc = `${import.meta.env.BASE_URL}images/checkIcon.svg`;

  return (
    <Main>
      <Image src={completeIconSrc} alt='Complete Icon' width={76} height={76} />
      <InfoMessage>
        {cardInfo.cardFirstPartNumbers}로 시작하는
        <br />
        {cardInfo.cardBrandName}가 등록되었습니다.
      </InfoMessage>
      <ConfirmButton>확인</ConfirmButton>
    </Main>
  );
};

export default CardRegisterCompletePage;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 28px 0;
  margin: 0 auto;
  width: 376px;
  height: auto;
  min-height: 100dvh;
  background-color: #f9f9f9;
  gap: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoMessage = styled.p`
  width: 338px;
  height: 100px;
  font-weight: 700;
  font-size: 25px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  margin: 20px;
  white-space: pre-wrap;
`;
