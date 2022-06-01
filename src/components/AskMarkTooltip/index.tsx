import React from 'react';
import { memo } from 'react';
import * as Styled from './index.styled';

const AskMarkTooltip = () => {
  return (
    <Styled.Container>
      <Styled.AskMarkButton type="button">?</Styled.AskMarkButton>
      <Styled.TooltipText>
        카드 뒷면 서명란에 인쇄되어 있는 19자리 중 마지막 3자리 숫자 입니다
      </Styled.TooltipText>
    </Styled.Container>
  );
};

export default memo(AskMarkTooltip);
