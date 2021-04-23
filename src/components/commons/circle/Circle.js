import Styled from './Circle.style';

export const CIRCLE_SIZE = {
  LG: 'LG',
  SM: 'SM',
  XS: 'XS',
  XXS: 'XXS',
};

export const Circle = ({ children, size, ...props }) => {
  return (
    <Styled.Circle size={size} styles={props}>
      {children}
    </Styled.Circle>
  );
};
