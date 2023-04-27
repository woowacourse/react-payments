import { useContext } from 'react';

import CardInfoListContext from '../../../contexts/CardInfoListContext';

import * as styled from './AliasSettingPages.styled';
import CardPreview from '../../CardPreview/CardPreview';

const AliasSettingPages = () => {
  const { cardInfoList, setCardInfoList } = useContext(CardInfoListContext);
  const currentCardInfo = cardInfoList.at(-1);

  return (
    <styled.AliasSettingPages>
      <h2>카드 등록이 완료 되었습니다</h2>
      {currentCardInfo && <CardPreview cardInfo={currentCardInfo} />}
      <input type="text"></input>
      <styled.AliasSubmitButtonContainer>
        <styled.AliasSubmitButton>확인</styled.AliasSubmitButton>
      </styled.AliasSubmitButtonContainer>
    </styled.AliasSettingPages>
  );
};

export default AliasSettingPages;
