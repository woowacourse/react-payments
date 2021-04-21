import Styled from './Circle.style';

export const CIRCLE_SIZE = {
  LG: 'LG',
  SM: 'SM',
  XS: 'XS',
  XXS: 'XXS',
};

export const Circle = ({ children, ...props }) => {
  return <Styled.Circle {...props}>{children}</Styled.Circle>;
};
