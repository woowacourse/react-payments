import type {ComponentPropsWithoutRef} from 'react';
import styled from 'styled-components';

type DescriptionProps = Omit<ComponentPropsWithoutRef<'span'>, 'color'> & {
  color?: string;
  size?: string;
  weight?: number;
};

const StyledDescription = styled.span<{$color: string; $size: string; $weight: number}>`
  font-size: ${({$size}) => $size};
  font-weight: ${({$weight}) => $weight};
  color: ${({$color}) => $color};
`;

const Description = ({children, color = '#8b95a1', size = '9.5px', weight = 400, ...rest}: DescriptionProps) => {
  return (
    <StyledDescription $color={color} $size={size} $weight={weight} {...rest}>
      {children}
    </StyledDescription>
  );
};

export default Description;
