import { useNavigate } from 'react-router-dom';
import ICONS from '../../constants/icons';
import * as S from './BackwardButton.styled';

const BackwardButton = ({ children, ...rest }) => {
  const navigate = useNavigate();

  return (
    <S.Button
      {...rest}
      type="button"
      onClick={() => {
        navigate(-1);
      }}
    >
      {ICONS.BACKWARD}
    </S.Button>
  );
};

export default BackwardButton;
