import React, { useCallback, useState } from 'react';

import useCardDispatch from '../useCardDispatch';

import Button from '../../components/Button';
import MarginBottomWrapper from '../../components/MarginBottomWrapper/';
import FlexCenter from '../../components/FlexCenter'
import Card from '../../system/Card';

import { WrapperStyled, TitleStyled, InputStyled } from './style';

import UPDATE_CARD_ALIAS from './action';

import { noop } from '../../utils';

import { isEmpty } from '../../utils';

import { CARD_SIZE_UNIT } from '../../constants';

const AliasModal = ({ visible, afterClick, children }) => {
  const [alias, setAlias] = useState(children[5] || '');
  const dispatch = useCardDispatch();

  const onChangeInput = useCallback((e) => {
    setAlias(e.target.value);
  }, []);

  const onClickButton = useCallback(() => {
    dispatch({ type: UPDATE_CARD_ALIAS, cardNumber: children[1], alias });
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
      <Button type='button' marginTop='20px' disabled={isEmpty(alias)} color={children[4]} onClick={onClickButton}>확인</Button>
    </WrapperStyled>
  );
};

export default AliasModal;
