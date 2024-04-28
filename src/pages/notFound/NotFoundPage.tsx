import * as Styled from './NotFoundPage.styled';
import PlanetImage from '../../assets/planet.png';
import Button from '../../components/common/button/Button';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const navigateToNewCardPage = () => {
    navigate('/new-card');
  };
  return (
    <Styled.NotFoundContainer>
      <Styled.PlanetImage src={PlanetImage} alt='' />
      <Styled.NotFoundText>페이지를 찾을 수 없어요 🥺</Styled.NotFoundText>
      <Button
        text='홈으로 이동하기'
        onClick={navigateToNewCardPage}
        style={{ width: 140, borderRadius: 8 }}
      ></Button>
    </Styled.NotFoundContainer>
  );
};

export default NotFoundPage;
