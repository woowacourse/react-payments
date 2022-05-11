import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  fliped: boolean;
};

const dynamicStyle = ({ fliped }: Props) => css`
  transform-style: preserve-3d;
  transition: transform 0.6s;
  position: relative;
  transform: ${fliped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  & > .front,
  & > .back {
    width: 208px;
    height: 130px;
    position: absolute;
    backface-visibility: hidden;
    border-radius: 5px;
  }
`;

const FlipableCard = styled.div`
  ${dynamicStyle}
`;

export default FlipableCard;
