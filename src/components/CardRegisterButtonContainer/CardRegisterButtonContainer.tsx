import { COLOR } from '../../constants/cardInfo';
import { PATHNAME } from '../../constants/pathname';

import { useNavigationTo } from '../../hooks/useNavigationTo';

import * as styled from './CardRegisterButtonContainer.styled';

const CardRegisterButtonContainer = () => {
  const { handleClick } = useNavigationTo(PATHNAME.REGISTER);

  return (
    <styled.CardRegisterButtonContainer>
      <styled.CardRegisterMessage>새로운 카드를 등록해 주세요</styled.CardRegisterMessage>
      <styled.CardRegisterButton bgColor={COLOR.DEFAULT} onClick={handleClick}>
        <styled.ButtonIcon>+</styled.ButtonIcon>
      </styled.CardRegisterButton>
    </styled.CardRegisterButtonContainer>
  );
};

export default CardRegisterButtonContainer;
