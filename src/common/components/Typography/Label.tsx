import type {ComponentPropsWithoutRef} from 'react';
import styled from 'styled-components';

type LabelProps = Omit<ComponentPropsWithoutRef<'label'>, 'color'> & {
  color?: string;
  size?: string;
  weight?: number;
};

const StyledLabel = styled.label<{$color: string; $size: string; $weight: number}>`
  font-size: ${({$size}) => $size};
  font-weight: ${({$weight}) => $weight};
  color: ${({$color}) => $color};
`;

const Label = ({children, color = '#0a0d13', size = '12px', weight = 500, ...rest}: LabelProps) => {
  return (
    <StyledLabel $color={color} $size={size} $weight={weight} {...rest}>
      {children}
    </StyledLabel>
  );
};

export default Label;
