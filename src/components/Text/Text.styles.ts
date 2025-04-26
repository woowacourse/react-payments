import styled from '@emotion/styled';
import { TextProps } from './Text';

const StyledText = styled.div<TextProps>`
  font-weight: ${(props) => {
    switch (props.type) {
      case 'title':
        return 'bold';
      case 'subTitle':
        return 'regular';
    }
  }};
  font-size: ${(props) => {
    switch (props.type) {
      case 'title':
        return '18px';
      case 'subTitle':
        return '12px';
    }
  }};
  color: ${(props) => {
    switch (props.type) {
      case 'title':
        return '#000000';
      case 'subTitle':
        return '#8B95A1';
    }
  }};
`;

export default StyledText;
