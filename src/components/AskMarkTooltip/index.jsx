import * as styled from './index.styled';

const AskMarkTooltip = () => {
  return (
    <styled.Container>
      <styled.AskMarkButton type="button">?</styled.AskMarkButton>
      <styled.TooltipText>
        카드 뒷면 서명란에 인쇄되어 있는 19자리 중 마지막 3자리 숫자 입니다
      </styled.TooltipText>
    </styled.Container>
  );
};

export default AskMarkTooltip;
