import styled from 'styled-components';
import { Icon } from './Icon';

export default {
  component: Icon,
};

export const Icons = () => {
  return (
    <IconContainer>
      <Icon imgSrc="/assets/hd_card.svg" name="현대카드" />
      <Icon imgSrc="/assets/lt_card.svg" name="롯데카드" />
      <Icon imgSrc="/assets/sh_card.svg" name="신한카드" />
      <Icon imgSrc="/assets/kb_card.svg" name="국민카드" />
      <Icon imgSrc="/assets/kakao_bank.svg" name="카카오뱅크" />
      <Icon imgSrc="/assets/hn_card.svg" name="하나카드" />
      <Icon imgSrc="/assets/wr_card.svg" name="우리카드" />
      <Icon imgSrc="/assets/bc_card.svg" name="BC카드" />
    </IconContainer>
  );
};

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
