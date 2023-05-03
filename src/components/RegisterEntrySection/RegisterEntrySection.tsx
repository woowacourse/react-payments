import { COLOR } from '../../constants/card';
import { PATHNAME } from '../../constants/pathname';

import { useNavigationTo } from '../../hooks/useNavigationTo';

import * as styled from './RegisterEntrySection.styled';

const RegisterEntrySection = () => {
  const { navigationTo } = useNavigationTo(PATHNAME.REGISTER);

  return (
    <styled.RegisterEntrySection>
      <styled.GuideMessage>새로운 카드를 등록해 주세요</styled.GuideMessage>
      <styled.Button backgroundColor={COLOR.DEFAULT} onClick={navigationTo}>
        <styled.ButtonIcon>+</styled.ButtonIcon>
      </styled.Button>
    </styled.RegisterEntrySection>
  );
};

export default RegisterEntrySection;
