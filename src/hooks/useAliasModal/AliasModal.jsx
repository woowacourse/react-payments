import React, { useCallback, useState } from 'react';

import useCardDispatch from '../useCardDispatch';

import Button from '../../components/Button';
import MarginBottomWrapper from '../../components/MarginBottomWrapper/';
import FlexCenter from '../../components/FlexCenter'
import Card from '../../system/Card';

import { WrapperStyled, TitleStyled, InputStyled } from './style';

import UPDATE_CARD_ALIAS from './action';

import { noop } from '../../utils';

import { CARD_SIZE_UNIT } from '../../constants';

const AliasModal = ({ visible, afterClick, children }) => {
  const [alias, setAlias] = useState('');
  const dispatch = useCardDispatch();

  const onChangeInput = useCallback((e) => {
    setAlias(e.target.value);
  }, []);

  const onClickButton = useCallback(() => {
    dispatch({ type: UPDATE_CARD_ALIAS, cardId: children.cardId, alias });
    afterClick();
  });

  return (
    <WrapperStyled visible={visible}>
      <TitleStyled>카드등록이 완료되었습니다.</TitleStyled>
      <MarginBottomWrapper>
        <FlexCenter>
          <Card
            size={CARD_SIZE_UNIT.BIG}
            onClick={noop}
          >
            {children}
          </Card>
        </FlexCenter>
      </MarginBottomWrapper>
      <FlexCenter>
        <InputStyled value={alias} onChange={onChangeInput} />
      </FlexCenter>
      <Button onClick={onClickButton}>확인</Button>
    </WrapperStyled>
  );
};

export default AliasModal;
