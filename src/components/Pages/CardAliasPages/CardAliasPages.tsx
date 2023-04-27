import { ChangeEvent, useContext } from 'react';

import CardInfoContext from '../../../contexts/CardInfoContext';

import { PATHNAME } from '../../../constants/pathname';
import { useNavigationTo } from '../../../hooks/useNavigationTo';

import * as styled from './CardAliasPages.styled';
import CardPreview from '../../CardPreview/CardPreview';
import Input from '../../Input/Input';

const CardAliasPages = () => {
  const {
    cardNumbers,
    expirationDate,
    ownerName,
    securityCode,
    password,
    cardCompany,
    cardAlias,
    setCardAlias,
    setCardInfoList,
  } = useContext(CardInfoContext);
  const { handleClick } = useNavigationTo(PATHNAME.HOME);

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setCardAlias(value);
  };

  const onClick = () => {
    setCardInfoList(prev => {
      return [
        ...prev,
        { cardNumbers, expirationDate, ownerName, securityCode, password, cardCompany, cardAlias },
      ];
    });

    handleClick();
  };

  return (
    <styled.CardAliasPages>
      <styled.CardAliasMessage>카드 등록이 완료되었습니다</styled.CardAliasMessage>
      <CardPreview />
      <styled.CardAliasInputBox>
        <Input onChange={onChange} width="xl" type="text" maxLength={15} value={cardAlias} />
      </styled.CardAliasInputBox>
      <styled.CardAliasSubmitButton onClick={onClick}>확인</styled.CardAliasSubmitButton>
    </styled.CardAliasPages>
  );
};

export default CardAliasPages;
