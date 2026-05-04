import type {ComponentPropsWithoutRef} from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #0a0d13;
`;

const Label = ({value, ...rest}: {value: string} & ComponentPropsWithoutRef<'label'>) => {
  return <StyledLabel {...rest}>{value}</StyledLabel>;
};

export default Label;
