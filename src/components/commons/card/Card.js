import Styled from './Card.style';

export const CARD_SIZE = {
  LG: 'LG',
  MD: 'MD',
};

export const Card = ({ size, children, ...props }) => {
  return (
    <Styled.Card size={size} styles={props}>
      {children}
    </Styled.Card>
  );
};

Card.defaultProps = {
  size: CARD_SIZE.MD,
};
