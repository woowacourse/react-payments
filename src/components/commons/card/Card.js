import { CARD_COLOR } from '../../../constants/color';
import Styled from './Card.style';

export const CARD_SIZE = {
  LG: 'LG',
  MD: 'MD',
};

export const Card = ({ size, color, children, ...props }) => {
  return (
    <Styled.Card size={size} color={color} styles={props}>
      {children}
    </Styled.Card>
  );
};

Card.defaultProps = {
  size: CARD_SIZE.MD,
  color: CARD_COLOR.LIGHT_GRAY,
};
