import { useNavigate } from 'react-router-dom';
import * as Styled from './style';
import Button from '../../components/Button/Button';
import Failure from '../../assets/image/failure.png';

const ERROR_MESSAGE = `잘못된 접근입니다
돌아가세요`;

const Fallback = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate('/');
  };

  return (
    <Styled.Container>
      <Styled.FailureIcon src={Failure} alt="" />
      <Styled.ErrorMessage>{ERROR_MESSAGE}</Styled.ErrorMessage>
      <Styled.BackButton>
        <Button style={{ borderRadius: 8 }} onClick={goMain}>
          확인
        </Button>
      </Styled.BackButton>
    </Styled.Container>
  );
};

export default Fallback;
