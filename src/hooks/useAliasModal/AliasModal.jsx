import React, { useCallback, useState } from 'react';

import Button from '../../components/Button';
import MarginBottomWrapper from '../../components/MarginBottomWrapper/';
import FlexCenter from '../../components/FlexCenter'
import Card from '../../system/Card';

import { WrapperStyled, TitleStyled, InputStyled } from './style';

import { noop } from '../../utils';

import { CARD_SIZE_UNIT } from '../../constants';

const AliasModal = ({ visible, afterClick, children }) => {
  const [
    cardNumber,
    cardExpiration,
    cardOwner,
    cardCompanyName,
    cardCompanyColor,
  ] = children;

  const [alias, setAlias] = useState('');

  const onChangeInput = useCallback((e) => {
    setAlias(e.target.value);
  }, []);

  const onClickButton = () => {

  };

  return (
    <WrapperStyled visible={visible}>
      <TitleStyled>카드등록이 완료되었습니다.</TitleStyled>
      <MarginBottomWrapper>
        <FlexCenter>
          <Card
            size={CARD_SIZE_UNIT.BIG}
            onClick={noop}
          >
            {[cardCompanyName, cardNumber, cardOwner, cardExpiration, cardCompanyColor]}
          </Card>
        </FlexCenter>
      </MarginBottomWrapper>
      <FlexCenter>
        <InputStyled value={alias} onChange={onChangeInput} />
      </FlexCenter>
      <Button>확인</Button>
    </WrapperStyled>
  );
};

export default AliasModal;
