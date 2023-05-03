import { useNavigate } from 'react-router-dom';

import { COLOR } from '../../constants/card';
import { PATHNAME } from '../../constants/pathname';

import * as styled from './RegisterEntryBox.styled';

const RegisterEntryBox = () => {
  const navigation = useNavigate();

  return (
    <styled.RegisterEntryBox>
      <styled.GuideMessage>새로운 카드를 등록해 주세요</styled.GuideMessage>
      <styled.Button
        backgroundColor={COLOR.DEFAULT}
        onClick={() => navigation(PATHNAME.REGISTER)}
      >
        <styled.ButtonIcon>+</styled.ButtonIcon>
      </styled.Button>
    </styled.RegisterEntryBox>
  );
};

export default RegisterEntryBox;
