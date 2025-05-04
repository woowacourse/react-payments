import styled from '@emotion/styled';
import { HelperTextProps } from './HelperText';

const StyledHelperText = styled.div<HelperTextProps>`
  font-size: 10px;
  margin-top: 10px;
  color: ${(props) => {
    switch (props.type) {
      case 'isError':
        return '#FF3D3D';
      case 'isValid':
        return '#15fc04';
    }
  }};
`;

export { StyledHelperText };
