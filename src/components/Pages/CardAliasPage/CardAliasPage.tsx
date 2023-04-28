import { PATHNAME } from '../../../constants/pathname';
import { useCardAliasPage } from '../../../hooks/useCardAliasPage';
import { useTitle } from '../../../hooks/useTitle';
import { useNavigationTo } from '../../../hooks/useNavigationTo';

import * as styled from './CardAliasPage.styled';
import CardPreview from '../../CardPreview/CardPreview';
import Input from '../../Input/Input';

const CardAliasPage = () => {
  const { onChange, onClick, cardAlias, buttonRef } = useCardAliasPage();
  const { navigationTo, history } = useNavigationTo(PATHNAME.HOME);
  const isFromRegisterPage = history.at(-1) === '/register';
  const title = useTitle(
    isFromRegisterPage ? '카드 등록이 완료되었습니다' : '카드 별칭을 수정합니다'
  );

  return (
    <styled.CardAliasPage>
      <styled.CardAliasMessage>{title}</styled.CardAliasMessage>
      <CardPreview />
      <styled.CardAliasInputBox>
        <Input
          onChange={onChange}
          width="xl"
          type="text"
          maxLength={15}
          value={cardAlias}
          isFocus={true}
        />
      </styled.CardAliasInputBox>
      <styled.CardAliasSubmitButton
        ref={buttonRef}
        onClick={() => {
          onClick();
          navigationTo();
        }}
      >
        확인
      </styled.CardAliasSubmitButton>
    </styled.CardAliasPage>
  );
};

export default CardAliasPage;
