import React, { useCallback, useState } from 'react';

import MarginBottomWrapper from '../../components/MarginBottomWrapper/';
import FlexCenter from '../../components/FlexCenter'
import Card from '../../system/Card';

import { WrapperStyled, TitleStyled, InputStyled } from './style';

import { noop } from '../../../utils';

const AliasModal = ({ visible, ButtonComponent, children }) => {
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

  return (
    <WrapperStyled visible={visible}>
      <TitleStyled>카드등록이 완료되었습니다.</TitleStyled>
      <MarginBottomWrapper>
        <FlexCenter>
          <Card
            color={cardCompanyColor}
            onClick={noop}
          >
            {[cardCompanyName, cardNumber, cardOwner, cardExpiration]}
          </Card>
        </FlexCenter>
      </MarginBottomWrapper>
      <FlexCenter>
        <InputStyled value={alias} onChange={onChangeInput} />
      </FlexCenter>
      <ButtonComponent card={[...children, alias]} />
    </WrapperStyled>
  );
};

export default AliasModal;
