import { ChangeEvent, useContext } from 'react';

import CardInfoContext from '../../../contexts/CardInfoContext';

import { PATHNAME } from '../../../constants/pathname';
import { useTitle } from '../../../hooks/useTitle';
import { useNavigationTo } from '../../../hooks/useNavigationTo';
import { useUpdateCardInfoList } from '../../../hooks/useUpdateCardInfoList';
import { useFocusButtonOnTextStateLength } from '../../../hooks/useFocusButtonOnTextStateLength';
import { useCheckFormCompletion } from '../../../hooks/useCheckFormCompletion';

import * as styled from './CardAliasPage.styled';
import CardPreview from '../../CardPreview/CardPreview';
import Input from '../../Input/Input';

const CardAliasPage = () => {
  const {
    setCardInfoList,
    cardNumbers,
    expirationDate,
    ownerName,
    securityCode,
    password,
    cardCompany,
    cardAlias,
    setCardAlias,
  } = useContext(CardInfoContext);
  const buttonRef = useFocusButtonOnTextStateLength(cardAlias, 15);
  const updateCardInfoList = useUpdateCardInfoList(
    { cardNumbers, expirationDate, ownerName, securityCode, password, cardCompany, cardAlias },
    setCardInfoList
  );
  useCheckFormCompletion();
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
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setCardAlias(value)}
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
          updateCardInfoList();
          navigationTo();
        }}
      >
        확인
      </styled.CardAliasSubmitButton>
    </styled.CardAliasPage>
  );
};

export default CardAliasPage;
