import { useCardAliasPage } from '../../../hooks/useCardAliasPage';

import * as styled from './CardAliasPage.styled';
import CardPreview from '../../CardPreview/CardPreview';
import Input from '../../Input/Input';

const CardAliasPage = () => {
  const { onChange, onClick, cardAlias, buttonRef } = useCardAliasPage();

  return (
    <styled.CardAliasPage>
      <styled.CardAliasMessage>카드 등록이 완료되었습니다</styled.CardAliasMessage>
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
      <styled.CardAliasSubmitButton ref={buttonRef} onClick={onClick}>
        확인
      </styled.CardAliasSubmitButton>
    </styled.CardAliasPage>
  );
};

export default CardAliasPage;
