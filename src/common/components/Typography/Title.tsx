import type {ComponentPropsWithoutRef} from 'react';
import styled from 'styled-components';

type TitleProps = Omit<ComponentPropsWithoutRef<'span'>, 'color'> & {
  color?: string;
  size?: string;
  weight?: number;
};

const StyledTitle = styled.span<{$color: string; $size: string; $weight: number}>`
  font-size: ${({$size}) => $size};
  font-weight: ${({$weight}) => $weight};
  color: ${({$color}) => $color};
`;

const Title = ({children, color = '#000', size = '18px', weight = 700, ...rest}: TitleProps) => {
  return (
    <StyledTitle $color={color} $size={size} $weight={weight} {...rest}>
      {children}
    </StyledTitle>
  );
};

export default Title;
